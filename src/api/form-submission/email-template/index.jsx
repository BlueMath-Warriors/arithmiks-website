import { OFFICE_ADDRESS, LEGAL_EMAIL } from "../../../constants/legal/blocks.js";

const SITE_URL = "https://arithmiks.com";


const LOGO_SRC =
  "https://dl.dropboxusercontent.com/scl/fi/4mpymtw1bbvo9ddppgyrq/company-logo-name.png?rlkey=3t7mmrjvtwj2jf7xf3v5wh3da&dl=0";


const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";


const PALETTE = {
  primary: "#1355FF",
  text: "#0A0F1F",
  textMuted: "#3A4256",
  textFaint: "#5C6478",
  border: "#E4E8F0",
  surface: "#F5F7FB",
};


const BRAND_GRADIENT_STOPS = ["#3F74DC", "#7E7BD6", "#A96FC8", "#D95BAC", "#EC4A9E"];


const HERO_GRADIENT =
  "linear-gradient(135deg, #E9EFFF 0%, #F6F8FF 26%, #FFFFFF 54%, #FEF3F9 84%, #FBE8F3 100%)";


const HERO_FALLBACK = "#F4F7FF";


const FOOTER_GRADIENT =
  "linear-gradient(135deg, #FBE8F3 0%, #FDF1F8 24%, #F7F9FF 58%, #EDF2FD 82%, #E4ECFF 100%)";

const FOOTER_FALLBACK = "#EDF2FC";

// The ramp the hero headline runs through on the site.
const HEADLINE_GRADIENT_STOPS = ["#1355FF", "#8B6FD4", "#EC4A9E"];

const hexToRgb = (hex) => [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));

const rgbToHex = (channels) =>
  `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;


const gradientText = (text, stops = HEADLINE_GRADIENT_STOPS) => {
  const characters = [...text];
  const lastIndex = Math.max(characters.length - 1, 1);

  return characters
    .map((character, index) => {
      if (character === " ") return " ";
      const position = (index / lastIndex) * (stops.length - 1);
      const stopIndex = Math.min(Math.floor(position), stops.length - 2);
      const ratio = position - stopIndex;
      const from = hexToRgb(stops[stopIndex]);
      const to = hexToRgb(stops[stopIndex + 1]);
      const blended = from.map((channel, i) => Math.round(channel + (to[i] - channel) * ratio));
      return `<span style="color:${rgbToHex(blended)};">${character}</span>`;
    })
    .join("");
};

/** Line breaks the sender typed survive into the HTML; tags cannot, because
 *  sanitizeInput has already stripped every angle bracket. */
const toHtmlText = (value) => String(value ?? "").replace(/\r?\n/g, "<br>");

const gradientRule = () => `
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                ${BRAND_GRADIENT_STOPS.map(
                  (stop) =>
                    `<td width="20%" height="4" bgcolor="${stop}" style="width:20%;height:4px;line-height:4px;font-size:0;">&nbsp;</td>`
                ).join("")}
              </tr>
            </table>`;

/** The hero's 3px eyebrow rule, as three stacked cells. */
const eyebrowBar = () => `
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                      ${["#5C8CFF", "#1355FF", "#A96FC8"]
                        .map(
                          (stop) =>
                            `<tr><td width="3" height="7" bgcolor="${stop}" style="width:3px;height:7px;line-height:7px;font-size:0;">&nbsp;</td></tr>`
                        )
                        .join("")}
                    </table>`;

const detailRow = ({ label, value }, isLast) => `
                  <tr>
                    <td class="detail-cell" style="padding:16px 24px;${
                      isLast ? "" : `border-bottom:1px solid ${PALETTE.border};`
                    }">
                      <p style="margin:0 0 6px;font-family:${FONT_STACK};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:${PALETTE.textFaint};">${label}</p>
                      <p style="margin:0;font-family:${FONT_STACK};font-size:15px;font-weight:500;line-height:1.6;color:${PALETTE.text};word-break:break-word;">${toHtmlText(value)}</p>
                    </td>
                  </tr>`;

export const generateContactResponseEmail = (formData, firstName, attachmentName = "") => {
  const details = [
    { label: "Your name", value: formData.full_name },
    { label: "Email", value: formData.email },
    { label: "Phone", value: formData.phone_number },
    { label: "Organization", value: formData.organization },
    ...(formData.role ? [{ label: "Your role", value: formData.role }] : []),
    ...(formData.message ? [{ label: "About the project", value: formData.message }] : []),
    ...(attachmentName ? [{ label: "Attachment", value: attachmentName }] : []),
  ];

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>We received your enquiry</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, p, a, h1, h2 { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    body { margin:0; padding:0; width:100% !important; background-color:${PALETTE.surface}; -webkit-font-smoothing:antialiased; }
    table { border-collapse:collapse; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
    a { text-decoration:none; }
    .cta:hover { background-color:#0B3AD1 !important; }

    @media only screen and (max-width:620px) {
      .shell { width:100% !important; }
      .pad-x { padding-left:24px !important; padding-right:24px !important; }
      .detail-cell { padding-left:18px !important; padding-right:18px !important; }
      .headline { font-size:27px !important; line-height:1.24 !important; }
      .cta-link { display:block !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${PALETTE.surface};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:${PALETTE.surface};">
    Thanks ${firstName} — your brief reached us. Here is exactly what we received.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PALETTE.surface};">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" class="shell" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(7,11,24,0.09);">

          <tr>
            <td style="font-size:0;line-height:0;">${gradientRule()}
            </td>
          </tr>

          <tr>
            <td class="pad-x" bgcolor="${HERO_FALLBACK}" style="background-color:${HERO_FALLBACK};background-image:${HERO_GRADIENT};background:${HERO_GRADIENT};padding:34px 44px 46px;">

              <a href="${SITE_URL}" style="text-decoration:none;">
                <img src="${LOGO_SRC}" width="156" height="34" alt="Arithmiks" style="display:block;width:156px;height:34px;border:0;">
              </a>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:46px;">
                <tr>
                  <td valign="middle" style="padding-right:12px;font-size:0;line-height:0;">${eyebrowBar()}
                  </td>
                  <td valign="middle" style="font-family:${FONT_STACK};font-size:11.5px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${PALETTE.primary};">Enquiry received</td>
                </tr>
              </table>

              <h1 class="headline" style="margin:20px 0 0;font-family:${FONT_STACK};font-size:32px;font-weight:700;line-height:1.2;letter-spacing:-0.02em;color:${PALETTE.text};">Thanks, ${firstName}.<br>We have ${gradientText("your details.")}</h1>

              <p style="margin:16px 0 0;font-family:${FONT_STACK};font-size:15px;font-weight:400;line-height:1.65;color:${PALETTE.textMuted};">Your brief is with our team. We read every one before replying — expect to hear from us within one business day.</p>

            </td>
          </tr>

          <tr>
            <td class="pad-x" style="padding:38px 44px 0;">

              <p style="margin:0 0 16px;font-family:${FONT_STACK};font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:${PALETTE.textFaint};">What you sent us</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PALETTE.surface};border:1px solid ${PALETTE.border};border-radius:14px;">
                ${details.map((detail, index) => detailRow(detail, index === details.length - 1)).join("")}
              </table>

            </td>
          </tr>

          <tr>
            <td class="pad-x" style="padding:32px 44px 44px;">

              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="cta" bgcolor="${PALETTE.primary}" style="background-color:${PALETTE.primary};border-radius:999px;">
                    <a class="cta-link" href="${SITE_URL}" style="display:inline-block;padding:15px 32px;font-family:${FONT_STACK};font-size:15px;font-weight:600;line-height:1;color:#FFFFFF;text-decoration:none;border-radius:999px;">Explore our work &nbsp;&rarr;</a>
                  </td>
                </tr>
              </table>

              <p style="margin:26px 0 0;font-family:${FONT_STACK};font-size:15px;font-weight:400;line-height:1.65;color:${PALETTE.textMuted};">Something to add or correct? Just reply to this email — it reaches the same people.</p>

              <p style="margin:22px 0 0;font-family:${FONT_STACK};font-size:15px;font-weight:600;line-height:1.65;color:${PALETTE.text};">Thanks,<br><span style="font-weight:400;color:${PALETTE.textMuted};">The Arithmiks team</span></p>

            </td>
          </tr>

          <tr>
            <td class="pad-x" bgcolor="${FOOTER_FALLBACK}" style="background-color:${FOOTER_FALLBACK};background-image:${FOOTER_GRADIENT};background:${FOOTER_GRADIENT};border-top:1px solid ${PALETTE.border};padding:26px 44px 28px;">

              <p style="margin:0 0 6px;font-family:${FONT_STACK};font-size:13.5px;font-weight:400;line-height:1.7;color:${PALETTE.textMuted};">
                This email was sent to <a href="mailto:${LEGAL_EMAIL}" style="color:${PALETTE.primary};text-decoration:underline;">${LEGAL_EMAIL}</a><br>
                ${OFFICE_ADDRESS}
              </p>

              <p style="margin:0;font-family:${FONT_STACK};font-size:12.5px;font-weight:400;line-height:1.7;color:${PALETTE.textFaint};">&copy; ${new Date().getFullYear()} Arithmiks. All rights reserved.</p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
};
