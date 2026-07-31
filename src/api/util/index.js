const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  return input.trim().replace(/[<>]/g, ""); // Basic XSS prevention
};

const validateRequiredFields = (formData) => {
  const requiredFields = {
    email: "Email",
    full_name: "Full name",
    message: "Message",
    category: "Category",
  };

  const errors = [];

  for (const [field, displayName] of Object.entries(requiredFields)) {
    if (!formData[field] || formData[field].trim() === "") {
      errors.push(`${displayName} is required`);
    }
  }

  // Email format validation
  if (formData.email && !validateEmail(formData.email)) {
    errors.push("Please provide a valid email address");
  }

  return errors;
};

/**
 * Verifies a Netlify Identity JWT by asking Netlify's own GoTrue endpoint
 * whether it's valid, and returns the associated user if so. Works regardless
 * of whether this function runs as a raw Netlify Function or a Gatsby
 * Function, since it doesn't depend on any framework-injected identity
 * context — just a plain HTTP call.
 *
 * @param {{ headers: Record<string, string> }} req
 * @returns {Promise<null | { id: string; email: string; user_metadata?: object }>}
 */
const verifyIdentity = async (req) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const siteUrl = process.env.URL || process.env.DEPLOY_URL;
  if (!siteUrl) return null;

  try {
    const response = await fetch(`${siteUrl}/.netlify/identity/user`, {
      headers: { Authorization: authHeader },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

/** URL-safe slug from a title, e.g. "Hello, World!" -> "hello-world". */
const slugify = (title) =>
  (title || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export { validateEmail, sanitizeInput, validateRequiredFields, verifyIdentity, slugify };
