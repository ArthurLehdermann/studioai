import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import corporateImage from "@/assets/template-corporate.jpg";
import fashionImage from "@/assets/template-fashion.jpg";
import lifestyleImage from "@/assets/template-lifestyle.jpg";
import travelImage from "@/assets/template-travel.jpg";
import { Briefcase, Sparkles, Camera, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Templates = () => {
  const { t } = useLanguage();

  const templates = [
    {
      id: 1,
      titleKey: "templates.corporate",
      descKey: "templates.corporate.desc",
      image: corporateImage,
      icon: Briefcase,
      badgeKey: "templates.badge.popular",
    },
    {
      id: 2,
      titleKey: "templates.fashion",
      descKey: "templates.fashion.desc",
      image: fashionImage,
      icon: Sparkles,
      badgeKey: "templates.badge.trending",
    },
    {
      id: 3,
      titleKey: "templates.lifestyle",
      descKey: "templates.lifestyle.desc",
      image: lifestyleImage,
      icon: Camera,
      badgeKey: "templates.badge.popular",
    },
    {
      id: 4,
      titleKey: "templates.travel",
      descKey: "templates.travel.desc",
      image: travelImage,
      icon: Plane,
      badgeKey: "templates.badge.new",
    },
  ];

  return (
    <section id="templates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t('templates.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('templates.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card
                key={template.id}
                className="group overflow-hidden cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={template.image}
                    alt={t(template.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-soft">
                    {t(template.badgeKey)}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-bold text-lg">{t(template.titleKey)}</h3>
                    </div>
                    <p className="text-sm text-primary-foreground/90">{t(template.descKey)}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Templates;
