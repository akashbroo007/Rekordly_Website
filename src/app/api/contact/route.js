import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const category = typeof body?.category === "string" ? body.category.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !category || !message) {
      return Response.json(
        { ok: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const portRaw = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM;
    const to = process.env.CONTACT_TO;

    if (!host || !portRaw || !user || !pass || !from || !to) {
      return Response.json(
        {
          ok: false,
          error:
            "Email delivery is not configured on the server. Please try again later or email support@rekordly.com.",
        },
        { status: 501 }
      );
    }

    const port = Number(portRaw);
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Rekordly Contact] ${category} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">New Rekordly Contact Message</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 16px;"><strong>Category:</strong> ${escapeHtml(category)}</p>
          <div style="padding: 12px; border: 1px solid #e5e7eb; border-radius: 10px; background: #f9fafb;">
            <pre style="margin: 0; white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${escapeHtml(message)}</pre>
          </div>
        </div>
      `.trim(),
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
