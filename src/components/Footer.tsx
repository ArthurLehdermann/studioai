import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <button
                    onClick={() => scrollToSection("templates")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    Como funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    Preços
                  </button>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/5548998386116?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20StudioAI.%20Podem%20me%20ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:StudioAI@bigworks.com.br"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    Termos de uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    Privacidade e LGPD
                  </button>
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

    <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
    <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
  </>
  );
};

export default Footer;
