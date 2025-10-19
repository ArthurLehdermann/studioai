import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const packages = [
  {
    photos: 5,
    price: 2.38,
    discount: "5% off",
    popular: false,
  },
  {
    photos: 10,
    price: 4.63,
    discount: "7.5% off",
    popular: false,
  },
  {
    photos: 20,
    price: 9.00,
    discount: "10% off",
    popular: true,
  },
  {
    photos: 30,
    price: 13.20,
    discount: "12% off",
    popular: false,
  },
  {
    photos: 50,
    price: 21.25,
    discount: "15% off",
    popular: false,
  },
  {
    photos: 100,
    price: 40.00,
    discount: "20% off",
    popular: false,
  },
];

const features = [
  "Alta resolução (HD e 4K)",
  "Seu rosto real preservado",
  "Múltiplas variações de pose",
  "Download ilimitado",
  "Compartilhamento direto",
  "Armazenamento em nuvem",
];

const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Preços que cabem no seu bolso
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece grátis com 5 fotos. Depois, escolha o pacote perfeito para você.
          </p>
        </div>

        {/* Free trial card */}
        <Card className="max-w-2xl mx-auto mb-12 p-8 border-2 border-primary shadow-elegant">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-3 gradient-primary text-primary-foreground">
                Oferta de Boas-vindas
              </Badge>
              <h3 className="text-3xl font-bold mb-2">5 Fotos Grátis</h3>
              <p className="text-muted-foreground">
                Experimente sem compromisso. Crie sua conta e receba 5 créditos na hora.
              </p>
            </div>
            <Button variant="hero" size="lg" className="md:w-auto w-full">
              Começar grátis
            </Button>
          </div>
        </Card>

        {/* Package grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
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
                  Mais Popular
                </Badge>
              )}
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Pacote</p>
                  <h3 className="text-4xl font-bold">{pkg.photos}</h3>
                  <p className="text-sm text-muted-foreground">fotos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">US$ {pkg.price.toFixed(2)}</p>
                  <Badge variant="outline" className="mt-2 border-primary text-primary">
                    {pkg.discount}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  US$ {(pkg.price / pkg.photos).toFixed(2)} por foto
                </p>
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Comprar pacote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features list */}
        <Card className="max-w-4xl mx-auto p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tudo que você recebe em cada foto
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
