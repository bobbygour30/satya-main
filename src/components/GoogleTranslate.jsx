import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {

    if (window.google && window.google.translate) {
      if (!document.querySelector(".goog-te-combo")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,bn,te,ta,mr,gu,kn,ml,pa,or,as,ur,fr,de,es,ar,zh-CN,ja,ko,ru,pt,it,nl,pl,tr",
            autoDisplay: false,
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
      return;
    }

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-combo")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,bn,te,ta,mr,gu,kn,ml,pa,or,as,ur,fr,de,es,ar,zh-CN,ja,ko,ru,pt,it,nl,pl,tr",
            autoDisplay: false,
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element"></div>;
}