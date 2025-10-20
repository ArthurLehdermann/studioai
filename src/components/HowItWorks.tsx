import { Upload, Wand2, Download, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Upload,
      titleKey: "howitworks.step1.title",
      descKey: "howitworks.step1.desc",
    },
    {
      icon: Wand2,
      titleKey: "howitworks.step2.title",
      descKey: "howitworks.step2.desc",
    },
    {
      icon: Sparkles,
      titleKey: "howitworks.step3.title",
      descKey: "howitworks.step3.desc",
    },
    {
      icon: Download,
      titleKey: "howitworks.step4.title",
      descKey: "howitworks.step4.desc",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t('howitworks.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('howitworks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elegant mx-auto">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-soft">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
