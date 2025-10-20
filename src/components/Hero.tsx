import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fotografia profissional de estúdio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-primary/20 text-primary-foreground mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
            {t('hero.title')}{" "}
            <span className="relative">
              <span className="text-accent">{t('hero.title.highlight')}</span>
            </span>
            {t('hero.title.end') && ` ${t('hero.title.end')}`}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => {
                const message = `🌟 Olá! Descobri o StudioAI e fiquei encantado!

Quero transformar minhas fotos em ensaios profissionais de estúdio com qualidade de revista. 

Podem me explicar como funciona? Estou pronto para começar! 📸✨`;
                window.open(`https://wa.me/5548998386116?text=${encodeURIComponent(message)}`, "_blank");
              }}
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
              onClick={() => {
                const element = document.getElementById("templates");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t('hero.examples')}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-primary-foreground/80">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary-foreground">5</p>
              <p className="text-sm">{t('hero.stat1')}</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary-foreground">30s</p>
              <p className="text-sm">{t('hero.stat2')}</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary-foreground">HD</p>
              <p className="text-sm">{t('hero.stat3')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
