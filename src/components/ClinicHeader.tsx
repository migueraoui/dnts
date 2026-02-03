import { Stethoscope, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const ClinicHeader = () => {
  const { t, isRTL } = useLanguage();

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className={`flex items-center gap-3 ${isRTL ? "" : "flex-row-reverse"}`}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-primary/20">
            <img src="/logo.jpg" alt="Dental Corner Logo" className="w-full h-full object-cover" />
          </div>
          <div className={isRTL ? "text-right" : "text-left"}>
            <h1 className="text-lg font-bold text-foreground">{t("clinicName")}</h1>
            <p className="text-xs text-muted-foreground">{t("clinicSlogan")}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={`hidden md:flex items-center gap-6 text-sm text-muted-foreground ${isRTL ? "" : "flex-row-reverse"}`}>
            <a href="tel:+213775461347" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span dir="ltr">0775 46 13 47</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{t("location")}</span>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default ClinicHeader;
