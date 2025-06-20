"use client";

interface MobileLanguageSelectorProps {
  readonly language: string;
}

export default function MobileLanguageSelector({
  language,
}: MobileLanguageSelectorProps) {
  return (
    <div className="relative mr-4">
      <select
        className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none pr-8"
        defaultValue={language}
        onChange={(e) => {
          const newLang = e.target.value;
          const currentPath = window.location.pathname;
          const langRegex = /^\/(en|es|fr|ja|zh)(\/|$)/;
          const basePath = "/" + newLang;
          const newPath = langRegex.test(currentPath)
            ? currentPath.replace(langRegex, basePath + "$2")
            : basePath + currentPath;
          window.location.href = newPath;
        }}
        aria-label="Select language"
      >
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="fr">🇫🇷 FR</option>
        <option value="ja">🇯🇵 JA</option>
        <option value="zh">🇨🇳 ZH</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
