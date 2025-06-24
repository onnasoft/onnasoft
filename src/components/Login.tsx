"use client";

import type React from "react";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const translations = {
  en: {
    sectionTitle: "Sign In",
    sectionDescription:
      "Access your account securely and start managing your projects efficiently. Choose your preferred authentication method and join our platform.",
    subtitle: "Welcome Back",
    subtitleDescription:
      "Sign in to your account using one of the secure authentication methods below. We're excited to have you back and help you achieve your goals.",
    securityLabel: "Security",
    securityValue: "OAuth 2.0 encrypted authentication",
    privacyLabel: "Privacy",
    privacyValue: "We don't store your passwords",
    supportLabel: "Support",
    supportValue: "24/7 technical assistance",
    chooseMethodTitle: "Choose your method",
    chooseMethodSubtitle: "Secure and fast authentication",
    continueWithGoogle: "Continue with Google",
    continueWithMicrosoft: "Continue with Microsoft",
    consent:
      "By signing in, you agree to our terms of service and privacy policy",
  },
  es: {
    sectionTitle: "Iniciar Sesión",
    sectionDescription:
      "Accede a tu cuenta de forma segura y comienza a gestionar tus proyectos de manera eficiente. Elige tu método de autenticación preferido y únete a nuestra plataforma.",
    subtitle: "Bienvenido de Nuevo",
    subtitleDescription:
      "Inicia sesión en tu cuenta usando uno de los métodos de autenticación seguros que aparecen a continuación. Estamos emocionados de tenerte de vuelta y ayudarte a alcanzar tus objetivos.",
    securityLabel: "Seguridad",
    securityValue: "Autenticación encriptada OAuth 2.0",
    privacyLabel: "Privacidad",
    privacyValue: "No almacenamos tus contraseñas",
    supportLabel: "Soporte",
    supportValue: "Asistencia técnica 24/7",
    chooseMethodTitle: "Elige tu método",
    chooseMethodSubtitle: "Autenticación segura y rápida",
    continueWithGoogle: "Continuar con Google",
    continueWithMicrosoft: "Continuar con Microsoft",
    consent:
      "Al iniciar sesión, aceptas nuestros términos de servicio y política de privacidad",
  },
  fr: {
    sectionTitle: "Se Connecter",
    sectionDescription:
      "Accédez à votre compte en toute sécurité et commencez à gérer vos projets efficacement. Choisissez votre méthode d'authentification préférée et rejoignez notre plateforme.",
    subtitle: "Bon Retour",
    subtitleDescription:
      "Connectez-vous à votre compte en utilisant l'une des méthodes d'authentification sécurisées ci-dessous. Nous sommes ravis de vous revoir et de vous aider à atteindre vos objectifs.",
    securityLabel: "Sécurité",
    securityValue: "Authentification cryptée OAuth 2.0",
    privacyLabel: "Confidentialité",
    privacyValue: "Nous ne stockons pas vos mots de passe",
    supportLabel: "Support",
    supportValue: "Assistance technique 24/7",
    chooseMethodTitle: "Choisissez votre méthode",
    chooseMethodSubtitle: "Authentification sécurisée et rapide",
    continueWithGoogle: "Continuer avec Google",
    continueWithMicrosoft: "Continuer avec Microsoft",
    consent:
      "En vous connectant, vous acceptez nos conditions de service et notre politique de confidentialité",
  },
  ja: {
    sectionTitle: "サインイン",
    sectionDescription:
      "安全にアカウントにアクセスし、プロジェクトを効率的に管理しましょう。お好みの認証方法を選択して、プラットフォームにご参加ください。",
    subtitle: "おかえりなさい",
    subtitleDescription:
      "以下の安全な認証方法のいずれかを使用してアカウントにサインインしてください。お帰りいただき、目標達成のお手伝いができることを嬉しく思います。",
    securityLabel: "セキュリティ",
    securityValue: "OAuth 2.0暗号化認証",
    privacyLabel: "プライバシー",
    privacyValue: "パスワードは保存しません",
    supportLabel: "サポート",
    supportValue: "24時間365日技術サポート",
    chooseMethodTitle: "方法を選択",
    chooseMethodSubtitle: "安全で高速な認証",
    continueWithGoogle: "Googleで続行",
    continueWithMicrosoft: "Microsoftで続行",
    consent:
      "サインインすることで、利用規約とプライバシーポリシーに同意したことになります",
  },
  zh: {
    sectionTitle: "登录",
    sectionDescription:
      "安全访问您的账户，开始高效管理您的项目。选择您偏好的身份验证方法，加入我们的平台。",
    subtitle: "欢迎回来",
    subtitleDescription:
      "使用下面的安全身份验证方法之一登录您的账户。我们很高兴您回来，并帮助您实现目标。",
    securityLabel: "安全性",
    securityValue: "OAuth 2.0加密身份验证",
    privacyLabel: "隐私",
    privacyValue: "我们不存储您的密码",
    supportLabel: "支持",
    supportValue: "24/7技术支持",
    chooseMethodTitle: "选择您的方法",
    chooseMethodSubtitle: "安全快速的身份验证",
    continueWithGoogle: "使用Google继续",
    continueWithMicrosoft: "使用Microsoft继续",
    consent: "登录即表示您同意我们的服务条款和隐私政策",
  },
} as const;

interface LoginProps {
  readonly language: string;
}

const Login: React.FC<LoginProps> = ({ language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const signIn = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const t =
    translations[language as keyof typeof translations] || translations.en;

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    console.log("Iniciando sesión con Google...");
    // Aquí integrarías con Google OAuth
    signIn();
  };

  return (
    <section id="login" className="section bg-white animate-fade-in-down">
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
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.securityLabel}</p>
                    <p className="text-gray-600">{t.securityValue}</p>
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
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"></path>
                      <path d="M3 10v4c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.privacyLabel}</p>
                    <p className="text-gray-600">{t.privacyValue}</p>
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
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <circle cx="12" cy="17" r="1"></circle>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.supportLabel}</p>
                    <p className="text-gray-600">{t.supportValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-8 border-gray-100">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.chooseMethodTitle}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t.chooseMethodSubtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Google Button */}
                  <button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 mr-3 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
                    ) : (
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    )}
                    {t.continueWithGoogle}
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">{t.consent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
