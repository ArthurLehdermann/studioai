import { Upload, Wand2, Download, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Envie suas fotos",
    description: "Faça upload de algumas fotos suas. A IA usa essas referências para manter seus traços reais.",
  },
  {
    icon: Wand2,
    title: "Escolha o template",
    description: "Selecione entre estilos profissionais: corporativo, moda, lifestyle, viagem e muito mais.",
  },
  {
    icon: Sparkles,
    title: "IA cria seu ensaio",
    description: "Em segundos, a inteligência transforma suas fotos em retratos de estúdio profissionais.",
  },
  {
    icon: Download,
    title: "Baixe e compartilhe",
    description: "Salve em alta resolução ou compartilhe direto no Instagram, LinkedIn e redes sociais.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Quatro passos simples para ter seu ensaio profissional pronto
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
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
