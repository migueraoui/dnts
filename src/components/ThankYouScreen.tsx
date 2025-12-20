import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ThankYouScreenProps {
  type: "positive" | "feedback";
  onReset: () => void;
}

const ThankYouScreen = ({ type, onReset }: ThankYouScreenProps) => {
  const { t } = useLanguage();

  return (
    <div className="text-center animate-fade-in-up">
      <div className="mb-6">
        {type === "positive" ? (
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent animate-float">
            <Heart className="w-12 h-12 text-primary fill-primary" />
          </div>
        ) : (
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent animate-float">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
        )}
      </div>

      <h2 className="text-3xl font-bold text-foreground mb-3">
        {type === "positive" ? t("thanksRating") : t("feedbackReceived")}
      </h2>

      <p className="text-lg text-muted-foreground mb-8 max-w-sm mx-auto">
        {type === "positive" ? t("appreciateTrust") : t("appreciateTime")}
      </p>

      <Button
        onClick={onReset}
        variant="outline"
        className="px-8 h-12"
      >
        {t("newRating")}
      </Button>
    </div>
  );
};

export default ThankYouScreen;
