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

export { validateEmail, sanitizeInput, validateRequiredFields };
