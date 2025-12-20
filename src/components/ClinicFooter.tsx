import { Heart, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ClinicFooter = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className={`text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
            <h3 className="font-bold text-foreground mb-3">{t("aboutClinic")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("aboutText")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-3">{t("contactUs")}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+213775461347" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>0775 46 13 47</span>
              </a>
              <a href="https://www.facebook.com/dentalcorner.dr.billal/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Dental Corner</span>
              </a>
              <a href="https://www.instagram.com/dental_corner_20" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@dental_corner_20</span>
              </a>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t("location")}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className={`text-center ${isRTL ? "md:text-left" : "md:text-right"}`}>
            <h3 className="font-bold text-foreground mb-3">{t("workingHours")}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className={`flex items-center gap-2 ${isRTL ? "justify-center md:justify-start" : "justify-center md:justify-end"}`}>
                <Clock className="w-4 h-4" />
                <span>{t("workDays")}</span>
              </div>
              <p>{t("workTime")}</p>
              <p className="text-xs">{t("fridayClosed")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            {t("madeWith")} <Heart className="w-4 h-4 text-primary fill-primary" /> {t("toServeYou")}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} {t("clinicName")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClinicFooter;
