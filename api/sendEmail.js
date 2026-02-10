// api/sendEmail.js
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return typeof body === 'object' ? body : {};
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getProviderErrorMessage = (resendBody) => {
  if (resendBody?.error?.message) return resendBody.error.message;
  if (typeof resendBody?.message === 'string') return resendBody.message;
  if (typeof resendBody?.error === 'string') return resendBody.error;
  return 'Failed to send email';
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = parseBody(req.body);
  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const message = String(payload.message ?? '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_RECEIVER;

  if (!apiKey || !from || !to) {
    return res.status(500).json({
      error:
        'Email service is not configured. Set RESEND_API_KEY, EMAIL_FROM, and EMAIL_RECEIVER.',
    });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    </div>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Contact Message from ${name}`,
        html,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const contentType = resendResponse.headers.get('content-type') ?? '';
    const resendBody = contentType.includes('application/json')
      ? await resendResponse.json()
      : await resendResponse.text();

    if (!resendResponse.ok) {
      const providerErrorMessage = getProviderErrorMessage(resendBody);
      return res.status(500).json({
        error: providerErrorMessage,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send email. Please try again.',
      details:
        process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
