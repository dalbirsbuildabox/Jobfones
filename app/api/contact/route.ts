import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const OWNER_EMAIL = process.env.CONTACT_OWNER_EMAIL || process.env.SMTP_FROM;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || 'noreply@jobformes.com.au';
const SITE_NAME = process.env.SITE_NAME || 'Job Formes';
const SITE_URL = process.env.SITE_URL || 'https://jobformes.com.au';
const CONTACT_PHONE = process.env.CONTACT_PHONE || '+1 (000) 000 0000';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'orders@jobformes.com.au';
const RESPONSE_TIME = process.env.CONTACT_RESPONSE_TIME || '24–48 hours';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP config: SMTP_HOST, SMTP_USER, SMTP_PASS');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 503 }
      );
    }

    if (!OWNER_EMAIL) {
      console.error('Missing CONTACT_OWNER_EMAIL or SMTP_FROM');
      return NextResponse.json(
        { success: false, error: 'Owner email is not configured.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const fullName = `${firstName} ${lastName}`.trim();
    const formSubject = 'Request a Technical Quote';

    // 1. Confirmation email to the user (sent after they submit the form)
    const confirmationText = `Dear ${fullName},

Thank you for contacting us! We have successfully received your message and our team is currently reviewing it. We truly appreciate you taking the time to reach out to us.

Here are the details we received:

Name: ${fullName}
Email: ${email}
Subject: ${formSubject}
Message: ${message}

Our team will get back to you within ${RESPONSE_TIME}. If your matter is urgent, please feel free to contact us directly at ${CONTACT_PHONE}.

Thank you for choosing us. We look forward to assisting you!

Best regards,
${SITE_NAME}
${SITE_URL}
${CONTACT_EMAIL} | ${CONTACT_PHONE}`;

    const confirmationHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <p>Dear ${fullName},</p>
        <p>Thank you for contacting us! We have successfully received your message and our team is currently reviewing it. We truly appreciate you taking the time to reach out to us.</p>
        <p><strong>Here are the details we received:</strong></p>
        <ul style="color: #333;">
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Subject:</strong> ${formSubject}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <blockquote style="border-left: 4px solid #ef6400; padding-left: 1rem; margin: 0.5rem 0 1rem; color: #555;">${message.replace(/\n/g, '<br />')}</blockquote>
        <p>Our team will get back to you within ${RESPONSE_TIME}. If your matter is urgent, please feel free to contact us directly at <a href="tel:${CONTACT_PHONE}">${CONTACT_PHONE}</a>.</p>
        <p>Thank you for choosing us. We look forward to assisting you!</p>
        <p>Best regards,<br /><strong>${SITE_NAME}</strong><br />${SITE_URL}<br />${CONTACT_EMAIL} | ${CONTACT_PHONE}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${SMTP_FROM}>`,
      to: email,
      subject: "We've Received Your Message - Thank You!",
      html: confirmationHtml,
      text: confirmationText,
    });

    // 2. Notification email to admin / website owner (sent when a new query is received)
    const ownerText = `Hello,

You have received a new message through the Contact Us form on your website.

Here are the details:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Subject: ${formSubject}
Message: ${message}

Please respond to the user as soon as possible.

This is an automated notification email.

Best regards,
${SITE_NAME}`;

    const ownerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <p>Hello,</p>
        <p>You have received a new message through the Contact Us form on your website.</p>
        <p><strong>Here are the details:</strong></p>
        <ul style="color: #333;">
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Subject:</strong> ${formSubject}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <blockquote style="border-left: 4px solid #ef6400; padding-left: 1rem; margin: 0.5rem 0 1rem; color: #555;">${message.replace(/\n/g, '<br />')}</blockquote>
        <p>Please respond to the user as soon as possible.</p>
        <p><em>This is an automated notification email.</em></p>
        <p>Best regards,<br /><strong>${SITE_NAME}</strong></p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${SITE_NAME} Contact" <${SMTP_FROM}>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New contact: ${fullName} - ${SITE_NAME}`,
      html: ownerHtml,
      text: ownerText,
    });

    return NextResponse.json({ success: true, message: 'Thank you. We have received your message.' });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send your message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
