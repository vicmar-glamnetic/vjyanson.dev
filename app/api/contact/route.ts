import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "All fields required" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to:      "vicmar.yanson@gmail.com",
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      text:    `New inquiry from your portfolio.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
