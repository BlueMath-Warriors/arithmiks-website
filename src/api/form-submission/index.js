import nodemailer from "nodemailer";
import { generateContactResponseEmail } from "./email-template/index.jsx";
import { sanitizeInput, validateRequiredFields } from "../util/index.js";
import { prepareAttachment } from "../util/attachment.js";

const DEFAULT_CATEGORY = "Website enquiry";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASS,
  },
});

export default async function formHandler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed.",
    });
  }

  try {
    if (
      !process.env.GMAIL_SMTP_USER ||
      !process.env.GMAIL_SMTP_PASS ||
      !process.env.SERVICE_EMAIL
    ) {
      return res.status(500).json({
        success: false,
        error: "Server configuration error.",
      });
    }

    // Extract and sanitize form data
    const formData = {
      full_name: sanitizeInput(req.body.full_name),
      category: sanitizeInput(req.body.category) || DEFAULT_CATEGORY,
      role: sanitizeInput(req.body.role) || "",
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

    // The form sends at most one file, in the "attachment" field.
    const upload = (req.files || []).find((file) => file.fieldname === "attachment");
    const attachment = upload ? prepareAttachment(upload) : null;
    if (attachment && attachment.error) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: [attachment.error],
      });
    }

    // Extract first name for personalization
    const firstName = formData.full_name.includes(" ")
      ? formData.full_name.split(" ")[0]
      : formData.full_name;

    // Prepare email content
    const htmlContent = generateContactResponseEmail(
      formData,
      firstName,
      attachment ? attachment.filename : ""
    );

    const serviceEmail = process.env.SERVICE_EMAIL;
    const sender = `"Arithmiks AI" <${process.env.GMAIL_SMTP_USER}>`;
    const subject = `${formData.category} Inquiry - ${formData.organization}`;

    const teamMessage = {
      to: serviceEmail,
      from: sender,
      replyTo: formData.email,
      subject,
      html: htmlContent,
      ...(attachment && {
        attachments: [
          {
            filename: attachment.filename,
            content: attachment.content,
            encoding: "base64",
            contentType: attachment.type,
          },
        ],
      }),
    };

    const visitorMessage = {
      to: formData.email,
      from: sender,
      replyTo: serviceEmail,
      subject,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(teamMessage);
    } catch (emailError) {
      return res.status(500).json({
        success: false,
        error: "Failed to send your enquiry.",
      });
    }


    let confirmationSent = true;
    try {
      await transporter.sendMail(visitorMessage);
    } catch (emailError) {
      confirmationSent = false;
    }

    return res.status(200).json({
      success: true,
      message: confirmationSent
        ? "Thank you! Your message has been received successfully. Check your email for confirmation."
        : "Thank you! Your message has been received successfully.",
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
