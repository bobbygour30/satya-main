import { Globe } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";

export default function LanguageSwitcher() {
  return (
    <div className="fixed bottom-22 right-2 z-[999]">
      <div className="language-switcher flex items-center gap-2 bg-white shadow-lg border border-gray-200 rounded-full px-3 py-1">

        <Globe size={18} className="text-[#9E4A47]" />

        <div className="google-translate">
          <GoogleTranslate />
        </div>

      </div>
    </div>
  );
}