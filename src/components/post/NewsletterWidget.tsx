"use server";

const translations = {
  en: {
    title: "Subscribe to Our Newsletter",
    description: "Get the latest insights and updates delivered to your inbox.",
    placeholder: "Your email address",
    button: "Subscribe",
  },
  es: {
    title: "Suscríbete a nuestro boletín",
    description: "Recibe las últimas novedades e ideas en tu correo.",
    placeholder: "Tu correo electrónico",
    button: "Suscribirse",
  },
  fr: {
    title: "Abonnez-vous à notre newsletter",
    description: "Recevez les dernières actualités directement dans votre boîte mail.",
    placeholder: "Votre adresse e-mail",
    button: "S'abonner",
  },
  ja: {
    title: "ニュースレターを購読する",
    description: "最新の情報やニュースを受け取りましょう。",
    placeholder: "あなたのメールアドレス",
    button: "購読する",
  },
  zh: {
    title: "订阅我们的新闻通讯",
    description: "获取最新见解和更新，直接发送到您的收件箱。",
    placeholder: "你的邮箱地址",
    button: "订阅",
  },
};

interface NewsletterWidgetProps {
  readonly language: string;
}

export default async function NewsletterWidget({ language }: NewsletterWidgetProps) {
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="bg-primary p-6 rounded-lg text-white">
      <h3 className="font-semibold mb-4">{t.title}</h3>
      <p className="text-sm mb-4 text-pink-100">{t.description}</p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder={t.placeholder}
          className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="w-full bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          {t.button}
        </button>
      </form>
    </div>
  );
}
