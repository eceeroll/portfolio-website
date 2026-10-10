import { Resend } from "resend";
import type { ContactData } from "@/models/Contact.js";
import { escapeHtml } from "@/utils/escapeHtml.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ContactData) => {
  const { name, email, message } = data;

  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL is not configured");
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return await resend.emails.send({
    // TODO: Replace with a verified domain email after deployment
    from: "onboarding@resend.dev",
    to: contactEmail,
    replyTo: email,
    subject: `New message from ${name.replace(/[\r\n]+/g, " ")}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>

      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  });
};

/*
TODO:
- Verify custom domain in Resend (after deployment)
- Replace onboarding@resend.dev with a domain email
- Add CAPTCHA/Cloudflare Turnstile protection
- Add centralized error handling
- Add email delivery logging/monitoring
*/
