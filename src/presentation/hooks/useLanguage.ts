import { useTranslation } from "react-i18next";

type Lang = "en" | "es";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as Lang;

  const changeLanguage = (lang: Lang) => {
    if (lang !== currentLanguage) {
      i18n.changeLanguage(lang);
    }
  };

  const isActive = (lang: Lang) => currentLanguage === lang;

  return {
    currentLanguage,
    changeLanguage,
    isActive,
  };
};
