import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUK from "./locales/ukr/translationUK.json";
import translationGB from "./locales/en/translationGB.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en",
    // supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",

    resources: {
      en: {
        translation: translationGB,
      },
      uk: {
        translation: translationUK,
      },
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
