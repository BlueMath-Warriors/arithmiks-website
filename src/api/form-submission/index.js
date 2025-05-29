import sgMail from "@sendgrid/mail";
import { generateContactResponseEmail } from "./email-template/index.jsx";
import { sanitizeInput, validateRequiredFields } from "../util/index.js";

export default async function formHandler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed.",
    });
  }

  try {
    if (!process.env.SENDGRID_API_KEY || !process.env.SERVICE_EMAIL) {
      return res.status(500).json({
        success: false,
        error: "Server configuration error.",
      });
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Extract and sanitize form data
    const formData = {
      full_name: sanitizeInput(req.body.full_name),
      category: sanitizeInput(req.body.category),
      email: sanitizeInput(req.body.sender_email),
      phone_number: sanitizeInput(req.body.phone_number) || "Not Provided",
      organization: sanitizeInput(req.body.organization) || "Personal Project",
      message: sanitizeInput(req.body.message),
    };

    // Validate required fields
    const validationErrors = validateRequiredFields(formData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationErrors,
      });
    }

    // Extract first name for personalization
    const firstName = formData.full_name.includes(" ")
      ? formData.full_name.split(" ")[0]
      : formData.full_name;

    // Prepare email content
    const htmlContent = generateContactResponseEmail(formData, firstName);

    const serviceEmail = process.env.SERVICE_EMAIL;

    const emailMessage = {
      to: formData.email,
      from: {
        email: serviceEmail,
        name: "Arithmiks Solutions",
      },
      replyTo: serviceEmail,
      cc: serviceEmail,
      subject: `${formData.category} Inquiry - ${formData.organization}`,
      html: htmlContent,
    };

    // Send email
    try {
      await sgMail.send(emailMessage);
    } catch (emailError) {
      // console.error("SendGrid email error:", {
      //   message: emailError.message,
      //   code: emailError.code,
      //   response: emailError.response?.body,
      // });

      return res.status(500).json({
        success: false,
        error: "Failed to send confirmation email.",
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message:
        "Thank you! Your message has been received successfully. Check your email for confirmation.",
    });
  } catch (error) {
    // console.error("Form handler error:", {
    //   message: error.message,
    //   stack: error.stack,
    //   timestamp: new Date().toISOString(),
    // });

    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    });
  }
}
