import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPricing } from "@/utils/pricing";

const Pricing = () => {
  const { t, language } = useLanguage();
  const packages = getPricing(language);

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
  ];

  const handleWhatsAppClick = (photos: number, price: number, currency: string) => {
    const pricePerPhoto = (price / photos).toFixed(2);
    const message = `✨ Olá! Quero transformar minhas fotos em ensaio profissional!

📦 Pacote escolhido: ${photos} fotos
💰 Investimento: ${currency} ${price.toFixed(2).replace('.', ',')} (apenas ${currency} ${pricePerPhoto.replace('.', ',')} por foto)

Gostaria de saber como proceder com o pagamento e envio das fotos. Obrigado!`;
    
    const whatsappUrl = `https://wa.me/5548998386116?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Free trial card */}
        <Card className="max-w-2xl mx-auto mb-12 p-8 border-2 border-primary shadow-elegant">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-3 gradient-primary text-primary-foreground">
                {t('pricing.trial.title')}
              </Badge>
              <h3 className="text-3xl font-bold mb-2">5 {t('pricing.trial.photos')}</h3>
              <p className="text-muted-foreground">
                {t('pricing.trial.subtitle')}
              </p>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="md:w-auto w-full"
              onClick={() => {
                const message = `🎁 Olá! Vi que vocês oferecem 5 fotos grátis do StudioAI e quero aproveitar!

Gostaria de saber como criar minha conta e começar meu ensaio profissional agora mesmo. 

Estou ansioso para ver minhas fotos transformadas! 😍`;
                window.open(`https://wa.me/5548998386116?text=${encodeURIComponent(message)}`, "_blank");
              }}
            >
              {t('pricing.trial.cta')}
            </Button>
          </div>
        </Card>

        {/* Package grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {packages.map((pkg) => (
            <Card
              key={pkg.photos}
              className={`relative p-6 transition-all duration-300 hover:shadow-elegant ${
                pkg.popular
                  ? "border-2 border-primary shadow-elegant scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground shadow-soft">
                  <Star className="w-3 h-3 mr-1" />
                  {t('pricing.popular')}
                </Badge>
              )}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-4xl font-bold">{pkg.photos}</h3>
                  <p className="text-sm text-muted-foreground">{t('pricing.photos')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">
                    {pkg.currency} {pkg.price.toFixed(2).replace('.', ',')}
                  </p>
                  {pkg.discount && (
                    <Badge variant="outline" className="mt-2 border-primary text-primary">
                      {t('pricing.economy')} {pkg.discount}%
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.currency} {(pkg.price / pkg.photos).toFixed(2).replace('.', ',')} {t('pricing.photos').slice(0, -1)}
                </p>
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => handleWhatsAppClick(pkg.photos, pkg.price, pkg.currency)}
                >
                  {t('pricing.cta')}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features list */}
        <Card className="max-w-4xl mx-auto p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('pricing.features.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
