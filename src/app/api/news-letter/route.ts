import { subscribeToNewsletter } from "@/services/newsletter_subscribers";
import Joi from "joi";
import { NextResponse } from "next/server";

const apiNewsLetterSchema = Joi.object({
  email: Joi.string().email().required(),
  locale: Joi.string().valid("en", "es", "fr", "ja", "zh"),
});

export async function POST(request: Request) {
  const { email, locale } = await request.json();
  const { error } = apiNewsLetterSchema.validate({ email });

  if (error) {
    return NextResponse.json(
      { success: false, error: "Validation error" },
      { status: 400 }
    );
  }

  try {
    await subscribeToNewsletter({ email, locale });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
