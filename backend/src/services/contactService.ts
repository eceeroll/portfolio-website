import { Resend } from "resend";
import type { ContactData } from "@/models/Contact.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ContactData) => {
  const { name, email, message } = data;

  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL is not configured");
  }

  return await resend.emails.send({
    // TODO: Replace with a verified domain email after deployment
    from: "onboarding@resend.dev",
    to: contactEmail,
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
    html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
};

/*
TODO:
- Verify custom domain in Resend (after deployment)
- Replace onboarding@resend.dev with a domain email
- Add rate limiting to contact endpoint
- Add CAPTCHA/Cloudflare Turnstile protection
- Add centralized error handling
- Add email delivery logging/monitoring
*/
