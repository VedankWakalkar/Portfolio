/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY!);
type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(form: ContactFormInputs) {
  const parsed = ContactFormSchema.safeParse(form);
  if (!parsed.success) return { error: parsed.error.format() };

  const { name, email, message } = parsed.data;

  // Call Resend
  const { data, error } = await resend.emails.send({
    from: "Vedank <onboarding@resend.dev>",   // sandbox sender
    to: "vedankw11@gmail.com",
    replyTo: [email],
    cc: [email],
    subject: `New message from ${name}!`,
    text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`
  });

  if (error || !data) {
    console.error(error?.message);
    return { error: "Failed to send email" };
  }

  return { success: true };
}
