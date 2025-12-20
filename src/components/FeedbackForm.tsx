import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Send, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

// Web3Forms Configuration
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

interface FeedbackFormProps {
  rating: number;
  onSubmit: () => void;
  onBack: () => void;
}

const FeedbackForm = ({ rating, onSubmit, onBack }: FeedbackFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, isRTL } = useLanguage();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      // Clinical Headers for professional email look
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "Dental Corner Feedback Hub");
      formData.append("to_name", "Dr. Billal Darrab");
      formData.append("title", "New Patient Feedback Report");
      formData.append("subject", `⭐ ${rating} Stars - New Patient Review`);

      // Better clinical labels
      formData.append("Clinical Rating", `${rating} / 5 ${t("stars")}`);
      formData.append("Feedback Received", new Date().toLocaleString("fr-FR"));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t("thanksFeedback"));
        setTimeout(onSubmit, 1000);
      } else {
        console.error("Web3Forms Error:", data);
        toast.error(data.message || t("errorTryAgain"));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(t("errorTryAgain"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t("sorryExperience")}
        </h2>
        <p className="text-muted-foreground">
          {t("feedbackHelps")}
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-5">
        <div>
          <Input
            name="name"
            required
            placeholder={t("nameOptional")}
            className={`bg-card border-border text-foreground placeholder:text-muted-foreground h-12 ${isRTL ? "text-right" : "text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <div>
          <Input
            name="email"
            type="email"
            required
            placeholder={t("emailOptional")}
            className={`bg-card border-border text-foreground placeholder:text-muted-foreground h-12 ${isRTL ? "text-right" : "text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <div>
          <Textarea
            name="message"
            required
            placeholder={t("writeFeedback")}
            className={`bg-card border-border text-foreground placeholder:text-muted-foreground min-h-[150px] resize-none ${isRTL ? "text-right" : "text-left"}`}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="flex-1 h-12 gap-2"
          >
            <BackArrow size={18} />
            {t("back")}
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-12 gap-2 bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? (
              <span className="animate-pulse-soft">{t("sending")}</span>
            ) : (
              <>
                {t("send")}
                <Send size={18} />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
