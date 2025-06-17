"use client";

import { useState } from "react";
import Joi from "joi";

const translations = {
  en: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    errors: {
      name: "Name is required (2-50 characters)",
      email: "Please enter a valid email",
      subject: "Subject is required (5-100 characters)",
      message: "Message is required (10-1000 characters)",
      form: "An error occurred. Please try again later.",
      validation: "Please correct the following errors:",
      server: "Server error. Please try again later.",
      emailFailed: "Failed to send email. Please try again later.",
    },
    success: "Message sent successfully!",
  },
  es: {
    name: "Nombre",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
    errors: {
      name: "Nombre es requerido (2-50 caracteres)",
      email: "Por favor ingresa un email válido",
      subject: "Asunto es requerido (5-100 caracteres)",
      message: "Mensaje es requerido (10-1000 caracteres)",
      form: "Ocurrió un error. Por favor intenta más tarde.",
      validation: "Por favor corrige los siguientes errores:",
      server: "Error del servidor. Intenta nuevamente más tarde.",
      emailFailed: "No se pudo enviar el correo. Intenta más tarde.",
    },
    success: "¡Mensaje enviado con éxito!",
  },
  fr: {
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer le message",
    errors: {
      name: "Le nom est requis (2-50 caractères)",
      email: "Veuillez entrer un email valide",
      subject: "Le sujet est requis (5-100 caractères)",
      message: "Le message est requis (10-1000 caractères)",
      form: "Une erreur s'est produite. Veuillez réessayer plus tard.",
      validation: "Veuillez corriger les erreurs suivantes :",
      server: "Erreur du serveur. Veuillez réessayer plus tard.",
      emailFailed: "Échec de l'envoi de l'email. Réessayez plus tard.",
    },
    success: "Message envoyé avec succès!",
  },
  ja: {
    name: "名前",
    email: "メール",
    subject: "件名",
    message: "メッセージ",
    send: "メッセージを送信",
    errors: {
      name: "名前が必要です (2-50文字)",
      email: "有効なメールアドレスを入力してください",
      subject: "件名が必要です (5-100文字)",
      message: "メッセージが必要です (10-1000文字)",
      form: "エラーが発生しました。後でもう一度お試しください。",
      validation: "次のエラーを修正してください：",
      server: "サーバーエラー。後でもう一度お試しください。",
      emailFailed: "メールの送信に失敗しました。後でもう一度お試しください。",
    },
    success: "メッセージが送信されました!",
  },
  zh: {
    name: "姓名",
    email: "电子邮件",
    subject: "主题",
    message: "留言",
    send: "发送信息",
    errors: {
      name: "需要姓名 (2-50个字符)",
      email: "请输入有效的电子邮件",
      subject: "需要主题 (5-100个字符)",
      message: "需要留言 (10-1000个字符)",
      form: "发生错误。请稍后再试。",
      validation: "请更正以下错误：",
      server: "服务器错误。请稍后再试。",
      emailFailed: "发送电子邮件失败。请稍后再试。",
    },
    success: "信息发送成功!",
  },
};

// Esquema de validación Joi
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "name.empty",
    "string.min": "name.min",
    "string.max": "name.max",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "email.invalid",
      "string.empty": "email.empty",
    }),
  subject: Joi.string().min(5).max(100).required().messages({
    "string.empty": "subject.empty",
    "string.min": "subject.min",
    "string.max": "subject.max",
  }),
  message: Joi.string().min(10).max(1000).required().messages({
    "string.empty": "message.empty",
    "string.min": "message.min",
    "string.max": "message.max",
  }),
});

interface ContactFormProps {
  readonly language: string;
}

export default function ContactForm({ language }: ContactFormProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors({});
    setApiError(null);
    setValidationErrors([]);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validación del cliente
    const { error } = contactSchema.validate(data, { abortEarly: false });

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.details) {
          // Errores de validación del servidor
          setValidationErrors(result.details);
          setApiError(t.errors.validation);
        } else {
          // Otros errores del servidor
          setApiError(result.error || t.errors.server);
        }
        return;
      }

      if (result.error) {
        // Error de Resend
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
    <form onSubmit={handleSubmit} method="POST" className="space-y-4">
      {submitSuccess && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          {t.success}
        </div>
      )}

      {(apiError || validationErrors.length > 0) && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {apiError && <p className="font-medium">{apiError}</p>}
          {validationErrors.length > 0 && (
            <ul className="mt-1 list-disc list-inside">
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {errors.form && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {errors.form}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full px-4 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`w-full px-4 py-2 border ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full px-4 py-2 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="btn-primary w-full disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t.send}
          </span>
        ) : (
          t.send
        )}
      </button>
    </form>
  );
}
