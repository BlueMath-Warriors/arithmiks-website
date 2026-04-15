# Frontend Integration Guide

Complete reference for integrating the Arithmiks chatbot API into a frontend application.

**Base URL (local Docker):** `http://localhost:8001`

---

## Authentication Flow

Every chat request requires a Bearer JWT. Tokens are anonymous — no user account is needed.

### 1. Obtain a session token

```http
POST /auth/session
```

**Request:** No body, no headers required.

**Response:**
```json
{
  "access_token": "<jwt>",
  "token_type": "bearer"
}
```

**Implementation notes:**
- Call this once when the chat widget mounts (or on first message)
- Store the token in `sessionStorage` (not `localStorage`) — it expires after 2 hours
- Token lifetime: `SESSION_TOKEN_EXPIRE_MINUTES` (default **120 minutes**)
- Rate limit: **10 new tokens / minute per IP** — do not call this on every message

```ts
// Example
const { access_token } = await fetch('/auth/session', { method: 'POST' }).then(r => r.json())
sessionStorage.setItem('chatToken', access_token)
```

### 2. Attach token to all chat requests

```
Authorization: Bearer <access_token>
```

### 3. Handle token expiry

When any chat endpoint returns `401`, fetch a fresh session token from `POST /auth/session`. The new token will contain a **new session ID** (`sub`) — extract it and update your stored `session_id` before retrying. Note: the previous conversation history (stored under the old session ID) will no longer be accessible.

---

## Session ID

The session ID is **generated server-side** and embedded in the JWT as the `sub` claim. You must decode the token after calling `POST /auth/session` and use the `sub` value as the `session_id` in all chat requests. The backend enforces that they match and returns `403` if they differ.

```ts
// After obtaining the token:
const payload = JSON.parse(atob(access_token.split('.')[1]))
const sessionId = payload.sub  // use this as session_id in every /chat request
sessionStorage.setItem('chatSessionId', sessionId)
```

- Persist both the token and the extracted `sessionId` in `sessionStorage`
- One session ID per chat widget instance

---

## Endpoints

### POST /chat/stream — Streaming chat (recommended)

Returns a Server-Sent Events stream. Use this for the real-time typing effect.

**Request headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request body:**
```json
{
  "session_id": "uuid-or-any-8-64-char-string",
  "message": "What services does Arithmiks offer?",
  "doc_type_filter": null
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `session_id` | string | Yes | 8–64 chars |
| `message` | string | Yes | 1–2000 chars |
| `doc_type_filter` | string \| null | No | See Doc Types below |

**Response — SSE stream:**

Each event:
```
data: {"token": "We"}

data: {"token": " offer"}

data: {"token": " web"}

data: [DONE]
```

- Events arrive as `text/event-stream`
- Each event before `[DONE]` is a JSON object with a single `"token"` key — append tokens to build the full response
- On error mid-stream: `data: {"error": "<message>"}`
- Rate limit: **20 requests / minute per session**

**JavaScript example:**
```ts
async function* streamChat(sessionId: string, message: string, bearerToken: string) {
  const res = await fetch('/chat/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`,
    },
    body: JSON.stringify({ session_id: sessionId, message }),
  })

  const reader = res.body!.getReader()
  const decoder = new TextDecoder()

  let buffer = ''
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop()!

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue
      const data = line.slice(6)
      if (data === '[DONE]') return
      const { token: chunk } = JSON.parse(data)
      yield chunk
    }
  }
}
```

---

### POST /chat/ — Sync chat (non-streaming)

Use this if you don't need the streaming effect.

**Request:** Same body as `/chat/stream`.

**Response:**
```json
{
  "session_id": "abc-123",
  "response": "Arithmiks offers web development, mobile apps, and cloud infrastructure.",
  "sources": ["https://arithmiks.com/services"]
}
```

| Field | Type | Notes |
|---|---|---|
| `session_id` | string | Echoed back |
| `response` | string | Full answer |
| `sources` | string[] | Source URLs referenced (may be empty) |

---

### DELETE /chat/session — Clear history

Wipes the conversation history for a session from Redis. Call when the user starts a new conversation or closes the widget.

**Request headers:** `Authorization: Bearer <token>`

**Request body:**
```json
{ "session_id": "abc-123" }
```

**Response:** `200 { "message": "Session abc-123 cleared" }`

---

### GET /chat/session/{session_id}/history — Get history

Fetch the raw conversation turns for a session.

**Request headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "session_id": "abc-123",
  "history": [
    { "role": "user", "content": "Hello" },
    { "role": "model", "content": "Hi! How can I help?" }
  ],
  "turn_count": 1
}
```

---

### POST /auth/dev/token — Mint a dev token (development only)

Disabled in production (`APP_ENV=production` returns `404`). Issues a long-lived JWT with a custom `user_id` for local testing without having to repeatedly call `/auth/session`.

**Request body:**
```json
{ "user_id": "test-user" }
```

**Response:** Same shape as `/auth/session` (`access_token`, `token_type`). Use the returned token's `sub` as the `session_id` in chat requests.

---

### GET /health — Service health

No auth required. Returns connectivity status for Qdrant and Redis.

**Response:**
```json
{
  "status": "ok",
  "qdrant": "ok",
  "redis": "ok",
  "version": "1.0.0"
}
```

`status` is `"degraded"` if either dependency is down.

**Note on conversation history:** The server retains the last **10 turns** per session (configurable via `RAG_MAX_HISTORY_TURNS`). Older turns are dropped automatically — you do not need to manage history size on the frontend.

---

## Doc Type Filter

The `doc_type_filter` field scopes vector search to a specific content category. Omit (or set `null`) to search across all content.

| Value | Content |
|---|---|
| `"service"` | Service pages |
| `"case_study"` | Project case studies |
| `"faq"` | FAQ entries |
| `"team"` | Team bios |
| `"pricing"` | Pricing information |
| `"blog"` | Blog posts |
| `"general"` | Uncategorised content |

**Use case:** A "Pricing" tab in the widget could set `doc_type_filter: "pricing"` to restrict answers to pricing content only.

---

## Error Reference

| Status | When | Action |
|---|---|---|
| `401` | Missing or expired token | Fetch new session token, retry once |
| `403` | `session_id` does not match JWT `sub` | Ensure `session_id` is extracted from the token (see Session ID section) |
| `422` | Validation error (bad body) | Check request shape against models above |
| `429` | Rate limit exceeded | Back off; show user a "please wait" message |
| `500` | Server error | Show generic error; log for debugging |

---

## Rate Limits

| Endpoint | Limit |
|---|---|
| `POST /auth/session` | 10 / min per IP |
| `POST /chat/` | 20 / min per session |
| `POST /chat/stream` | 20 / min per session |

---

## CORS

The API allows requests from origins defined in `ALLOWED_ORIGINS` (comma-separated). The default is `http://localhost:8000`. Your production origin must be added to this env var.

---

## Minimal Integration Checklist

- [ ] On widget mount: call `POST /auth/session`, store token in `sessionStorage`
- [ ] Decode the JWT and extract `sub` — store as `session_id` in `sessionStorage`
- [ ] Attach `Authorization: Bearer <token>` to every chat request
- [ ] On `401`: fetch new session token, extract new `sub` as `session_id`, then retry
- [ ] On widget close / new conversation: call `DELETE /chat/session`
- [ ] Check `GET /health` before showing the chat widget (optional)
