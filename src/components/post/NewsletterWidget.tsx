"use client";

import Joi from "joi";
import { FormEventHandler, useState } from "react";

const translations = {
  en: {
    title: "Subscribe to Our Newsletter",
    description: "Get the latest insights and updates delivered to your inbox.",
    placeholder: "Your email address",
    button: "Subscribe",
    success: "You have successfully subscribed!",
    errors: {
      email: "Please enter a valid email",
      form: "An error occurred. Please try again later.",
      validation: "Please correct the following errors:",
      server: "Server error. Please try again later.",
      emailFailed: "Failed to send email. Please try again later.",
    },
  },
  es: {
    title: "Suscríbete a nuestro boletín",
    description: "Recibe las últimas novedades e ideas en tu correo.",
    placeholder: "Tu correo electrónico",
    button: "Suscribirse",
    success: "¡Te has suscrito exitosamente!",
    errors: {
      email: "Por favor, introduce un correo electrónico válido",
      form: "Ocurrió un error. Por favor, inténtalo de nuevo más tarde.",
      validation: "Por favor, corrige los siguientes errores:",
      server: "Error del servidor. Por favor, inténtalo de nuevo más tarde.",
      emailFailed:
        "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.",
    },
  },
  fr: {
    title: "Abonnez-vous à notre newsletter",
    description:
      "Recevez les dernières nouvelles et mises à jour dans votre boîte de réception.",
    placeholder: "Votre adresse e-mail",
    button: "S'abonner",
    success: "Vous vous êtes abonné avec succès !",
    errors: {
      email: "Veuillez entrer une adresse e-mail valide",
      form: "Une erreur s'est produite. Veuillez réessayer plus tard.",
      validation: "Veuillez corriger les erreurs suivantes :",
      server: "Erreur du serveur. Veuillez réessayer plus tard.",
      emailFailed:
        "Échec de l'envoi de l'e-mail. Veuillez réessayer plus tard.",
    },
  },
  ja: {
    title: "ニュースレターに登録",
    description: "最新の情報と更新をメールでお届けします。",
    placeholder: "メールアドレス",
    button: "登録する",
    success: "登録が成功しました！",
    errors: {
      email: "有効なメールアドレスを入力してください",
      form: "エラーが発生しました。後でもう一度お試しください。",
      validation: "以下のエラーを修正してください：",
      server: "サーバーエラー。後でもう一度お試しください。",
      emailFailed: "メールの送信に失敗しました。後でもう一度お試しください。",
    },
  },
  zh: {
    title: "订阅我们的新闻通讯",
    description: "获取最新的见解和更新，直接发送到您的邮箱。",
    placeholder: "您的电子邮件地址",
    button: "订阅",
    success: "您已成功订阅！",
    errors: {
      email: "请输入有效的电子邮件地址",
      form: "发生错误。请稍后再试。",
      validation: "请更正以下错误：",
      server: "服务器错误。请稍后再试。",
      emailFailed: "发送电子邮件失败。请稍后再试。",
    },
  },
};

const newsLetterSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "email",
      "string.empty": "email",
    }),
});

interface NewsletterWidgetProps {
  readonly language: string;
}

export default function NewsletterWidget({ language }: NewsletterWidgetProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors({});
    setApiError(null);
    setValidationErrors([]);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
    };

    const { error } = newsLetterSchema.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors: Record<string, string> = {};
      error.details.forEach((detail) => {
        const field = detail.path[0] as string;
        validationErrors[field] = t.errors[field as keyof typeof t.errors];
      });
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/news-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          locale: language,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.details) {
          setValidationErrors(result.details);
          setApiError(t.errors.validation);
        } else {
          setApiError(result.error || t.errors.server);
        }
        return;
      }

      if (result.error) {
        setApiError(result.error || t.errors.emailFailed);
        return;
      }

      setSubmitSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setApiError(t.errors.server);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary p-6 rounded-lg text-white">
      <h3 className="font-semibold mb-4">{t.title}</h3>
      <p className="text-sm mb-4 text-pink-100">{t.description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          type="email"
          placeholder={t.placeholder}
          className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {errors.email && <p className="text-red-200 text-sm">{errors.email}</p>}
        {apiError && <p className="text-red-200 text-sm">{apiError}</p>}
        {validationErrors.length > 0 && (
          <div className="text-red-200 text-sm space-y-1">
            <p>{t.errors.validation}</p>
            <ul className="list-disc ml-4">
              {validationErrors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
        {submitSuccess && <p className="text-green-200 text-sm">{t.success}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          {isSubmitting ? "..." : t.button}
        </button>
      </form>
    </div>
  );
}
