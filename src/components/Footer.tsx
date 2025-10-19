import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">StudioAI</h3>
            <p className="text-background/70">
              Seu ensaio perfeito, criado pela inteligência.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2025 StudioAI. Todos os direitos reservados. Democratizando a fotografia profissional através da IA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
