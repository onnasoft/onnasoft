import Joi from "joi";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "-");

const apiContactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(5).max(100).required(),
  message: Joi.string().min(10).max(1000).required(),
});

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const { error } = apiContactSchema.validate({
    name,
    email,
    subject,
    message,
  });

  if (error) {
    return NextResponse.json(
      { success: false, error: "Validation error" },
      { status: 400 }
    );
  }

  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject,
      replyTo: email,
      html: `<p><strong>Nombre:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Mensaje:</strong><br/>${message}</p>`,
    });

    if (response.error?.message) {
      return NextResponse.json(
        { success: false, error: response.error?.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
