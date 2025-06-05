import React from "react";

const translations = {
  en: {
    sectionTitle: "Contact Us",
    sectionDescription:
      "We're ready to help you transform your ideas into innovative digital solutions. Tell us about your project and discover how we can collaborate.",
    subtitle: "Let's Talk",
    subtitleDescription:
      "Complete the form and we'll get back to you as soon as possible. We're eager to learn about your challenges and explore how we can help you achieve your goals.",
    phoneLabel: "Phone",
    phoneValue: "+34 123 456 789",
    emailLabel: "Email",
    emailValue: "info@onnasoft.com",
    locationLabel: "Location",
    locationValue: "Madrid, Spain",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
  },
  es: {
    sectionTitle: "Contáctanos",
    sectionDescription:
      "Estamos listos para ayudarte a transformar tus ideas en soluciones digitales innovadoras. Cuéntanos sobre tu proyecto y descubre cómo podemos colaborar.",
    subtitle: "Hablemos",
    subtitleDescription:
      "Completa el formulario y te responderemos lo antes posible. Estamos entusiasmados por conocer tus desafíos y explorar cómo ayudarte a alcanzar tus objetivos.",
    phoneLabel: "Teléfono",
    phoneValue: "+34 123 456 789",
    emailLabel: "Correo electrónico",
    emailValue: "info@onnasoft.com",
    locationLabel: "Ubicación",
    locationValue: "Madrid, España",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
  },
  fr: {
    sectionTitle: "Contactez-nous",
    sectionDescription:
      "Nous sommes prêts à vous aider à transformer vos idées en solutions numériques innovantes. Parlez-nous de votre projet et découvrez comment nous pouvons collaborer.",
    subtitle: "Discutons-en",
    subtitleDescription:
      "Remplissez le formulaire et nous vous répondrons dès que possible. Nous sommes impatients de connaître vos défis et de voir comment nous pouvons vous aider à atteindre vos objectifs.",
    phoneLabel: "Téléphone",
    phoneValue: "+34 123 456 789",
    emailLabel: "Email",
    emailValue: "info@onnasoft.com",
    locationLabel: "Localisation",
    locationValue: "Madrid, Espagne",
    form: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
    },
  },
  ja: {
    sectionTitle: "お問い合わせ",
    sectionDescription:
      "アイデアを革新的なデジタルソリューションに変えるお手伝いをいたします。プロジェクトについて教えてください。共に協力できる方法を探しましょう。",
    subtitle: "話しましょう",
    subtitleDescription:
      "フォームにご記入いただければ、できるだけ早くご連絡いたします。あなたの課題を理解し、目標達成のためにどう支援できるかを考えます。",
    phoneLabel: "電話",
    phoneValue: "+34 123 456 789",
    emailLabel: "メール",
    emailValue: "info@onnasoft.com",
    locationLabel: "所在地",
    locationValue: "スペイン、マドリード",
    form: {
      name: "名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      send: "メッセージを送信",
    },
  },
  zh: {
    sectionTitle: "联系我们",
    sectionDescription:
      "我们随时准备帮助您将想法转化为创新的数字解决方案。告诉我们您的项目，探索我们如何合作。",
    subtitle: "让我们交流",
    subtitleDescription:
      "填写表格后我们将尽快与您联系。我们期待了解您的挑战，并探索如何帮助您实现目标。",
    phoneLabel: "电话",
    phoneValue: "+34 123 456 789",
    emailLabel: "电子邮件",
    emailValue: "info@onnasoft.com",
    locationLabel: "位置",
    locationValue: "西班牙，马德里",
    form: {
      name: "姓名",
      email: "电子邮件",
      subject: "主题",
      message: "留言",
      send: "发送信息",
    },
  },
};

interface FAQProps {
  readonly language: string;
}

const Contact: React.FC<FAQProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.sectionTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.subtitle}</h3>
              <p className="text-gray-600 mb-6">{t.subtitleDescription}</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.phoneLabel}</p>
                    <p className="text-gray-600">{t.phoneValue}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.emailLabel}</p>
                    <p className="text-gray-600">{t.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.locationLabel}</p>
                    <p className="text-gray-600">{t.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  {t.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
