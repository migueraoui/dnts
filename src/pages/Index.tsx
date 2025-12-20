import { useState } from "react";
import StarRating from "@/components/StarRating";
import FeedbackForm from "@/components/FeedbackForm";
import ThankYouScreen from "@/components/ThankYouScreen";
import ClinicHeader from "@/components/ClinicHeader";
import ClinicFooter from "@/components/ClinicFooter";
import { Stethoscope } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Screen = "rating" | "feedback" | "thank-you-positive" | "thank-you-feedback";

const GOOGLE_MAPS_REVIEW_URL = "https://www.google.com/maps/place/Dental+corner+dr+billal+darrab/@34.8360877,0.1468692,682m/data=!3m1!1e3!4m8!3m7!1s0x12801723b877b5f9:0xba27d26349c24305!8m2!3d34.8360877!4d0.1494441!9m1!1b1!16s%2Fg%2F11m_ynd3bz?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("rating");
  const [selectedRating, setSelectedRating] = useState(0);
  const { t, isRTL } = useLanguage();

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);

    if (rating >= 4) {
      setTimeout(() => {
        window.open(GOOGLE_MAPS_REVIEW_URL, "_blank");
        setCurrentScreen("thank-you-positive");
      }, 300);
    } else {
      setCurrentScreen("feedback");
    }
  };

  const handleFeedbackSubmit = () => {
    setCurrentScreen("thank-you-feedback");
  };

  const handleBack = () => {
    setCurrentScreen("rating");
    setSelectedRating(0);
  };

  const handleReset = () => {
    setCurrentScreen("rating");
    setSelectedRating(0);
  };

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <ClinicHeader />

      <main className="flex-1 flex items-center justify-center p-4 pt-24 pb-8">
        <div className="w-full max-w-lg">
          <div className="card-gradient rounded-2xl shadow-card p-8 md:p-12">
            {/* Logo Section */}
            <div className="text-center mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mb-4 animate-float shadow-lg bg-white">
                <img src="/logo.jpg" alt="Dental Corner Logo" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t("shareOpinion")}
              </h2>
              <p className="text-muted-foreground">
                {t("yourExperienceMatters")}
              </p>
            </div>

            {currentScreen === "rating" && (
              <div className="animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t("howWasVisit")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("chooseRating")}
                  </p>
                </div>
                <StarRating onRatingSelect={handleRatingSelect} />
              </div>
            )}

            {currentScreen === "feedback" && (
              <FeedbackForm
                rating={selectedRating}
                onSubmit={handleFeedbackSubmit}
                onBack={handleBack}
              />
            )}

            {currentScreen === "thank-you-positive" && (
              <ThankYouScreen type="positive" onReset={handleReset} />
            )}

            {currentScreen === "thank-you-feedback" && (
              <ThankYouScreen type="feedback" onReset={handleReset} />
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("confidentialNote")}
          </p>
        </div>
      </main>

      <ClinicFooter />
    </div>
  );
};

export default Index;
