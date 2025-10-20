
import { useState } from "react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { t } = useLanguage();

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
                {t('footer.tagline')}
              </p>
            </div>

            {/* Produto */}
            <div>
              <h4 className="font-bold mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("templates")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    {t('footer.templates')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    {t('footer.howitworks')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    {t('footer.pricing')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-bold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/5548998386116?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20StudioAI.%20Podem%20me%20ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t('footer.contact')}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:StudioAI@bigworks.com.br"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t('footer.email')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    {t('footer.terms')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                  >
                    {t('footer.privacy')}
                  </button>
                </li>
              </ul>
            </div>
          </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm">
            {t('footer.rights')}
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
