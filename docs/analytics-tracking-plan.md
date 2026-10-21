# GA4 Tracking Plan — arithmiks.com

Measurement ID: `G-EMCBCBC3FD` (set as `GA_ID` in Netlify)

The site exists to get **qualified leads**: a visitor fills in the contact card and books a call. Every event here either measures that funnel directly or explains what led to it. The priorities below follow that.

---

## 0. What GA4 already tracks (no code needed)

With **Enhanced Measurement** turned on (Admin → Data Streams → Web → Enhanced measurement):

| Automatic event | Keep? | Notes |
|---|---|---|
| `page_view` | ✅ Yes | `gatsby-plugin-google-gtag` sends one on every client-side route change. Keep *"Page changes based on browser history events"* **off**, or every route change is counted twice. |
| `scroll` (90%) | ✅ Yes | Coarse. See `content_scroll` below for finer depth on blog posts and case studies. |
| `click` (outbound) | ✅ Yes | Covers LinkedIn, the WhatsApp share and other external links. |
| `view_search_results` | ✅ Yes | Set the search query parameter to **`q`**. `/search?q=…` is what the header overlay and the search page use. |
| `file_download` | ✅ Yes | — |
| `form_start` / `form_submit` | ❌ **Turn off** | The contact card is a React form submitted with `fetch`, so these fire unreliably and would double-count leads. Use `generate_lead` instead. |
| `video_start` etc. | Optional | The site has no embedded YouTube videos. |

---

## 1. 🔴 Must have

These measure revenue. Build them first and mark the ones flagged **Key event** as key events (conversions) in GA4.

### 1.1 `generate_lead` — **Key event**
Fires when `/api/form-submission` returns `ok` (`BookingFlow.handleSubmit`, just before `setStep(2)`).

| Param | Example | Source |
|---|---|---|
| `form_location` | `/services/ai-mvp-development` | `window.location.pathname`. The card is on ~20 pages, so this shows which pages produce leads. |
| `lead_role` | `Founder / CEO` | `values.role` (from `ROLE_OPTIONS`) |
| `has_brief` | `true` | `values.brief.trim() !== ""` |
| `has_attachment` | `true` | `!!file` |
| `has_phone` | `false` | `values.phone.trim() !== ""` |

> ⚠️ Never send the name, email, company, phone or brief text. Google's terms forbid PII in GA.

### 1.2 `book_call` — **Key event**
Fires when Calendly posts `calendly.event_scheduled` from the inline widget in `BookingStep`, i.e. the call is actually booked. Step 2 of the contact card embeds `calendly.com/omer-arithmiks/30min`, prefilled with the name and email from step 1.

| Param | Example |
|---|---|
| `form_location` | `/contact` |

Calendly's message carries no slot time without its API, so none is sent.

### 1.3 `contact_form_error`
Fires when validation fails or the submit request errors. Without it you can't tell when the form breaks and leads are being lost.

| Param | Example |
|---|---|
| `error_type` | `validation` \| `submit_failed` \| `attachment_invalid` |
| `fields` | `email,name` (field names only, never their values) |
| `form_location` | `/contact` |

### 1.4 `contact_click` — **Key event**
Clicks on `mailto:` links (Footer, ContactAside, Careers CTA, legal pages). Many B2B buyers skip the form and email instead.

| Param | Example |
|---|---|
| `contact_method` | `email` |
| `link_location` | `footer` \| `contact_aside` \| `careers_cta` \| `legal` |
| `address` | `services@arithmiks.com` (a company address, not PII) |

### 1.5 `cta_click`
Every "Book a call / Let's talk / Get started" style button that sends visitors toward the contact card (header, hero, service pages, case study footers).

| Param | Example |
|---|---|
| `cta_text` | `Book a discovery call` |
| `cta_location` | `header` \| `hero` \| `service_page` \| `case_study_end` |
| `page_type` | `service` \| `case_study` \| `blog` \| `home` |

### 1.6 Consent: `cookie_consent`
Fires when the visitor chooses an option in the `CookieConsent` banner.

| Param | Example |
|---|---|
| `consent_choice` | `accepted` \| `rejected` |

Consent Mode v2 is already set up in `gatsby-ssr.js`. Make sure `decide()` calls `gtag('consent', 'update', { analytics_storage: 'granted' })` so pageviews start counting **in the same session** the visitor accepts. Fire this event *after* the consent update, otherwise accepts go uncounted.

---

## 2. 🟡 Should have

These explain *why* people convert (or don't). Add them once the must-haves are verified.

### 2.1 `contact_form_start`
The first keystroke in any field of `Step1Form` (fire once per page load). Comparing it with `generate_lead` gives the form's drop-off rate.

| Param | Example |
|---|---|
| `form_location` | `/case-studies/quanta` |
| `first_field` | `name` |

### 2.2 `case_study_view` / `case_study_click`
- `case_study_click`: a case study card is clicked on the landing rail, `/case-studies`, *More case studies* or the Industries explorer.
- Params: `case_study` (`quanta`), `click_location` (`landing_rail` \| `index` \| `more_case_studies` \| `industries`).

Case studies are the main proof content. This shows which ones lead to enquiries.

### 2.3 `filter_case_studies`
`FilterDropdown` on `/case-studies`.
Params: `filter_type` (`industry` \| `service`, whatever the dropdown filters by), `filter_value`.

### 2.4 `service_interest`
Clicks on service cards, accordion items and capability rows (`Services-Section`, `ServicesIndex/CapabilityRow`, `JumpRail`, `ServiceChips`).
Params: `service_name` (`ai-automation`), `click_location`.

### 2.5 Virus scanner tool (`/tools/virus-scanner`)
This is the site's lead-magnet tool.

| Event | When | Params |
|---|---|---|
| `tool_scan_start` | A file is dropped in `UploadDropzone` | `file_ext` (`exe`), `file_size_kb` (bucketed: `<100`, `100-1000`, `1000+`) |
| `tool_scan_complete` | Final result is shown | `verdict` (`clean` \| `suspicious` \| `malicious`), `duration_s` |
| `tool_scan_error` | `onError` in `useScanUpload` | `error_code` (HTTP status) |

> Never send the file name. It can contain personal data.

### 2.6 `site_search`
`view_search_results` is automatic, but it has no result count. `site_search` fires on `/search` with `search_term` and `search_results_count`. A count of `0` matters most, because it shows what people looked for and didn't find.

### 2.7 Careers
| Event | When | Params |
|---|---|---|
| `job_view` | Job detail template mounts | `job_title`, `job_department` |
| `job_apply_click` | *Apply now* is clicked | `job_title`, `button_location` (`hero` \| `body`) |
| `job_share` | LinkedIn / WhatsApp / email share | `method`, `job_title` |
| `job_search` | `JobSearchBar` is submitted | `search_term`, `team`, `location` (`any` when unset) |

> ⚠️ **Gap found:** both *Apply now* buttons (`JobDetailHero`, `JobDetailBody`) use `href="#"`, so they lead nowhere and every applicant is currently lost. Fix the link before tracking it.

### 2.8 `content_scroll` (blog posts + case studies)
Fire at 25 / 50 / 75 / 100% depth, once each per page.
Params: `percent_scrolled`, `content_type` (`blog` \| `case_study`), `content_id` (slug).

---

## 3. 🟢 Good to have

✅ = implemented.

Useful for UX and content decisions, but not urgent.

| Event | When | Params |
|---|---|---|
| `faq_expand` | FAQ item opened (`HowWeWork/Faq`, `AiDiscoveryService/Faq`, `FixedPrice`/`DedicatedTeam` Questions, `ToolPage/FAQ`) | `question` (short text), `page_type` |
| `toc_click` | Blog `TableOfContents` or legal page TOC clicked | `section_id`, `content_type` |
| `industry_tab_select` | `Industries/Explorer` tab change | `industry` |
| `engagement_model_view` ✅ | The `/how-we-work` comparison scrolls into view (`model: comparison`), a column is hovered (once per model, e.g. `Retainer`), or `/fixed-price` / `/dedicated-team` loads | `model`, `trigger` (`scroll` \| `hover` \| `page`) |
| `testimonial_interact` ✅ | Testimonials carousel moved by a dot or a swipe | `method` (`dot` \| `swipe`), `direction`, `page` |
| `nav_click` | Header mega-menu / mobile menu link | `link_text`, `menu_type` (`desktop` \| `mobile`) |
| `blog_read_complete` | 100% scroll **and** ≥ 60s on the page | `post_slug`, `read_time_s` |
| `related_tool_click` | `ToolPage/RelatedTools` card | `tool_name` |
| `back_to_form` | *Back* button in `BookingStep` | `form_location` (a sign that visitors hesitate at the scheduling step) |
| `attachment_add` | A file is attached in `AttachField` | `file_ext` |
| `phone_country_select` | `DialCodeSelect` changed from the `PK` default | `country_iso` (shows where leads come from) |
| `web_vitals` ✅ | LCP / CLS / INP via the `web-vitals` lib | `metric_name`, `value` (CLS × 1000), `rating`, `metric_id`, `page_type` (of the page that loaded) |

---

## 4. GA4 admin setup checklist

1. **Key events:** once each has arrived at least once (GA4 only lists events it has received), star `generate_lead`, `book_call` and `contact_click` under Admin → Events → Recent events.
2. **Custom dimensions:** Admin → Custom definitions → register each event param you want in reports. At minimum: `form_location`, `lead_role`, `cta_location`, `case_study`, `service_name`, `consent_choice`, `verdict`, `job_title`. Unregistered params are collected but can't be reported on.
3. **Internal traffic:** Admin → Data Streams → *Define internal traffic* for the team's IPs, then turn the filter on. Otherwise your own testing inflates leads.
4. **Unwanted referrals:** add `arithmiks.com` and any booking tool's domain, so a booking redirect doesn't start a new session.
5. **Data retention:** Admin → Data settings → set to **14 months** (the default is 2).
6. **Funnel exploration:** `page_view` → `contact_form_start` → `generate_lead` → `book_call`, broken down by `form_location`.
7. **Link Google Search Console** to see organic queries next to landing pages.

---

## 5. Implementation notes

Everything in sections 1 and 2 is implemented, plus the ✅ rows in section 3.

- `src/utils/analytics.js` has `track()` and small helpers. `window.gtag` always exists because `gatsby-ssr.js` defines it. Before the visitor consents, Consent Mode sends cookieless pings instead of full hits.
- `src/utils/globalTracking.js` (started from `gatsby-browser.jsx`) handles site-wide tracking by delegation: `contact_click` (any `mailto:`/`tel:` link), `cta_click` (any link to `/contact` or `#contact`, or any element with `data-cta`), `case_study_click`, `service_interest`, `content_scroll` and `web_vitals`. New links and CTAs are picked up automatically. The click location comes from the nearest `data-track-location`, then `header`/`footer`/`nav`, then the section id.
- Component-level events: `BookingFlow` (lead, form start, errors), `BookingStep` (`book_call`), `CookieConsent`, `FilterDropdown`, `SearchPage`, `VirusScanner`, the careers components, `EngagementModels`, `FixedPrice`, `DedicatedTeam` and `Testimonials`.
- Use **snake_case** for event and param names. Keep event names ≤ 40 characters, param values ≤ 100 characters, and no more than 25 params per event.
- Check events with **GA4 → Admin → DebugView** (install the *Google Analytics Debugger* Chrome extension), not the Realtime report.
- `respectDNT: true` is on in `gatsby-config.js`, so visitors with Do Not Track enabled are never tracked. Expect your numbers to run somewhat low because of that.
