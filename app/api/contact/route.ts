import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const OWNER_EMAIL = process.env.CONTACT_OWNER_EMAIL || process.env.SMTP_FROM;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || 'noreply@jobformes.com.au';
const SITE_NAME = process.env.SITE_NAME || 'Job Formes';

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

    // 1. Confirmation email to the person who submitted the form
    const confirmationHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ef6400;">Thank you for contacting ${SITE_NAME}</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 4px solid #ef6400; padding-left: 1rem; margin: 1rem 0; color: #555;">
          ${message.replace(/\n/g, '<br />')}
        </blockquote>
        <p>If you have any urgent questions, you can reach us at orders@jobformes.com.au or by phone.</p>
        <p>Best regards,<br /><strong>${SITE_NAME} Team</strong></p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${SITE_NAME}" <${SMTP_FROM}>`,
      to: email,
      subject: `We've received your message - ${SITE_NAME}`,
      html: confirmationHtml,
      text: `Hi ${firstName},\n\nWe've received your message and will get back to you soon.\n\nYour message:\n${message}\n\nBest regards,\n${SITE_NAME} Team`,
    });

    // 2. Notification email to the owner
    const ownerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ef6400;">New contact form submission</h2>
        <p><strong>From:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ef6400; padding-left: 1rem; margin: 1rem 0; color: #555;">
          ${message.replace(/\n/g, '<br />')}
        </blockquote>
        <p><em>Sent via ${SITE_NAME} contact form</em></p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${SITE_NAME} Contact" <${SMTP_FROM}>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New contact: ${fullName} - ${SITE_NAME}`,
      html: ownerHtml,
      text: `New contact from ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
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
