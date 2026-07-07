import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vithusha014@gmail.com';

export async function sendContactEmail({ name, email, subject, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('SMTP not configured — message logged only:', { name, email, subject });
    return { sent: false, reason: 'smtp_not_configured' };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${SMTP_USER}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  return { sent: true };
}

export async function sendAiInquiryEmail({ question, reply }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('SMTP not configured — AI inquiry logged only:', question?.slice(0, 80));
    return { sent: false, reason: 'smtp_not_configured' };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const preview = question.length > 60 ? `${question.slice(0, 60)}...` : question;

  await transporter.sendMail({
    from: `"Portfolio AI" <${SMTP_USER}>`,
    to: TO_EMAIL,
    subject: `[Portfolio AI] Visitor asked: ${preview}`,
    text: `A visitor used the Portfolio AI Assistant.\n\nTime: ${new Date().toISOString()}\n\nQuestion:\n${question}\n\nAI Reply:\n${reply}`,
    html: `
      <h2>Portfolio AI inquiry</h2>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Question:</strong></p>
      <p>${question.replace(/\n/g, '<br>')}</p>
      <hr />
      <p><strong>AI Reply:</strong></p>
      <p>${reply.replace(/\n/g, '<br>')}</p>
    `,
  });

  return { sent: true };
}
