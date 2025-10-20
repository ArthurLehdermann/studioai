import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt-BR' | 'en-US' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  'pt-BR': {
    // Hero
    'hero.badge': 'Fotografia Profissional com IA',
    'hero.title': 'Ensaios fotográficos',
    'hero.title.highlight': 'profissionais',
    'hero.title.end': 'sem sair de casa',
    'hero.subtitle': 'Transforme suas fotos em produções de estúdio com qualidade profissional. Sem precisar de fotógrafo, sem complicação.',
    'hero.cta': 'Crie seu ensaio agora',
    'hero.examples': 'Ver exemplos',
    'hero.stat1': 'fotos grátis',
    'hero.stat2': 'para criar',
    'hero.stat3': 'alta resolução',
    
    // How It Works
    'howitworks.title': 'Como funciona',
    'howitworks.subtitle': 'Transforme suas fotos em ensaios profissionais em 4 passos simples',
    'howitworks.step1.title': 'Envie suas fotos',
    'howitworks.step1.desc': 'Faça upload de 15-30 fotos suas em diferentes poses e ambientes',
    'howitworks.step2.title': 'Escolha o template',
    'howitworks.step2.desc': 'Selecione entre diversos estilos profissionais de estúdio',
    'howitworks.step3.title': 'IA processa',
    'howitworks.step3.desc': 'Nossa inteligência artificial cria seu ensaio personalizado',
    'howitworks.step4.title': 'Receba as fotos',
    'howitworks.step4.desc': 'Download em alta resolução em até 30 segundos',
    
    // Templates
    'templates.title': 'Templates disponíveis',
    'templates.subtitle': 'Escolha entre diversos estilos profissionais',
    'templates.corporate': 'Corporativo',
    'templates.corporate.desc': 'Perfeito para LinkedIn e currículos profissionais',
    'templates.fashion': 'Fashion',
    'templates.fashion.desc': 'Produções de moda e editorial de alta qualidade',
    'templates.lifestyle': 'Lifestyle',
    'templates.lifestyle.desc': 'Fotos casuais e autênticas para redes sociais',
    'templates.travel': 'Travel',
    'templates.travel.desc': 'Ensaios em destinos incríveis ao redor do mundo',
    'templates.badge.popular': 'Popular',
    'templates.badge.new': 'Novo',
    'templates.badge.trending': 'Em alta',
    
    // Pricing
    'pricing.title': 'Escolha seu pacote',
    'pricing.subtitle': 'Preços justos para ensaios profissionais',
    'pricing.trial.title': 'Teste grátis',
    'pricing.trial.subtitle': 'Experimente antes de comprar',
    'pricing.trial.photos': 'fotos HD',
    'pricing.trial.price': 'Grátis',
    'pricing.trial.cta': 'Começar teste grátis',
    'pricing.photos': 'fotos',
    'pricing.economy': 'Economize',
    'pricing.popular': 'Mais popular',
    'pricing.cta': 'Comprar pacote',
    'pricing.features.title': 'O que está incluso',
    'pricing.feature1': 'Processamento em até 30 segundos',
    'pricing.feature2': 'Qualidade HD profissional',
    'pricing.feature3': 'Todos os templates disponíveis',
    'pricing.feature4': 'Download ilimitado',
    'pricing.feature5': 'Suporte prioritário via WhatsApp',
    'pricing.feature6': 'Satisfação garantida',
    
    // Footer
    'footer.tagline': 'Ensaios fotográficos profissionais com inteligência artificial.',
    'footer.product': 'Produto',
    'footer.templates': 'Templates',
    'footer.howitworks': 'Como funciona',
    'footer.pricing': 'Preços',
    'footer.company': 'Empresa',
    'footer.contact': 'Contato',
    'footer.email': 'Email',
    'footer.legal': 'Legal',
    'footer.terms': 'Termos de uso',
    'footer.privacy': 'Privacidade e LGPD',
    'footer.rights': '© 2025 StudioAI. Todos os direitos reservados. Democratizando a fotografia profissional através da IA.',
  },
  'en-US': {
    // Hero
    'hero.badge': 'Professional Photography with AI',
    'hero.title': 'Professional photo shoots',
    'hero.title.highlight': 'without leaving home',
    'hero.title.end': '',
    'hero.subtitle': 'Transform your photos into studio productions with professional quality. No photographer needed, no hassle.',
    'hero.cta': 'Create your shoot now',
    'hero.examples': 'View examples',
    'hero.stat1': 'free photos',
    'hero.stat2': 'to create',
    'hero.stat3': 'high resolution',
    
    // How It Works
    'howitworks.title': 'How it works',
    'howitworks.subtitle': 'Transform your photos into professional shoots in 4 simple steps',
    'howitworks.step1.title': 'Upload your photos',
    'howitworks.step1.desc': 'Upload 15-30 photos of yourself in different poses and environments',
    'howitworks.step2.title': 'Choose template',
    'howitworks.step2.desc': 'Select from various professional studio styles',
    'howitworks.step3.title': 'AI processing',
    'howitworks.step3.desc': 'Our artificial intelligence creates your personalized shoot',
    'howitworks.step4.title': 'Receive photos',
    'howitworks.step4.desc': 'High-resolution download in up to 30 seconds',
    
    // Templates
    'templates.title': 'Available templates',
    'templates.subtitle': 'Choose from various professional styles',
    'templates.corporate': 'Corporate',
    'templates.corporate.desc': 'Perfect for LinkedIn and professional resumes',
    'templates.fashion': 'Fashion',
    'templates.fashion.desc': 'High-quality fashion and editorial productions',
    'templates.lifestyle': 'Lifestyle',
    'templates.lifestyle.desc': 'Casual and authentic photos for social media',
    'templates.travel': 'Travel',
    'templates.travel.desc': 'Shoots in incredible destinations around the world',
    'templates.badge.popular': 'Popular',
    'templates.badge.new': 'New',
    'templates.badge.trending': 'Trending',
    
    // Pricing
    'pricing.title': 'Choose your package',
    'pricing.subtitle': 'Fair prices for professional shoots',
    'pricing.trial.title': 'Free trial',
    'pricing.trial.subtitle': 'Try before you buy',
    'pricing.trial.photos': 'HD photos',
    'pricing.trial.price': 'Free',
    'pricing.trial.cta': 'Start free trial',
    'pricing.photos': 'photos',
    'pricing.economy': 'Save',
    'pricing.popular': 'Most popular',
    'pricing.cta': 'Buy package',
    'pricing.features.title': 'What\'s included',
    'pricing.feature1': 'Processing in up to 30 seconds',
    'pricing.feature2': 'Professional HD quality',
    'pricing.feature3': 'All templates available',
    'pricing.feature4': 'Unlimited downloads',
    'pricing.feature5': 'Priority support via WhatsApp',
    'pricing.feature6': 'Satisfaction guaranteed',
    
    // Footer
    'footer.tagline': 'Professional photo shoots with artificial intelligence.',
    'footer.product': 'Product',
    'footer.templates': 'Templates',
    'footer.howitworks': 'How it works',
    'footer.pricing': 'Pricing',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of use',
    'footer.privacy': 'Privacy and LGPD',
    'footer.rights': '© 2025 StudioAI. All rights reserved. Democratizing professional photography through AI.',
  },
  'es': {
    // Hero
    'hero.badge': 'Fotografía Profesional con IA',
    'hero.title': 'Sesiones fotográficas',
    'hero.title.highlight': 'profesionales',
    'hero.title.end': 'sin salir de casa',
    'hero.subtitle': 'Transforma tus fotos en producciones de estudio con calidad profesional. Sin necesidad de fotógrafo, sin complicaciones.',
    'hero.cta': 'Crea tu sesión ahora',
    'hero.examples': 'Ver ejemplos',
    'hero.stat1': 'fotos gratis',
    'hero.stat2': 'para crear',
    'hero.stat3': 'alta resolución',
    
    // How It Works
    'howitworks.title': 'Cómo funciona',
    'howitworks.subtitle': 'Transforma tus fotos en sesiones profesionales en 4 simples pasos',
    'howitworks.step1.title': 'Sube tus fotos',
    'howitworks.step1.desc': 'Sube 15-30 fotos tuyas en diferentes poses y ambientes',
    'howitworks.step2.title': 'Elige la plantilla',
    'howitworks.step2.desc': 'Selecciona entre varios estilos profesionales de estudio',
    'howitworks.step3.title': 'IA procesa',
    'howitworks.step3.desc': 'Nuestra inteligencia artificial crea tu sesión personalizada',
    'howitworks.step4.title': 'Recibe las fotos',
    'howitworks.step4.desc': 'Descarga en alta resolución en hasta 30 segundos',
    
    // Templates
    'templates.title': 'Plantillas disponibles',
    'templates.subtitle': 'Elige entre varios estilos profesionales',
    'templates.corporate': 'Corporativo',
    'templates.corporate.desc': 'Perfecto para LinkedIn y currículums profesionales',
    'templates.fashion': 'Moda',
    'templates.fashion.desc': 'Producciones de moda y editorial de alta calidad',
    'templates.lifestyle': 'Lifestyle',
    'templates.lifestyle.desc': 'Fotos casuales y auténticas para redes sociales',
    'templates.travel': 'Viajes',
    'templates.travel.desc': 'Sesiones en destinos increíbles alrededor del mundo',
    'templates.badge.popular': 'Popular',
    'templates.badge.new': 'Nuevo',
    'templates.badge.trending': 'Tendencia',
    
    // Pricing
    'pricing.title': 'Elige tu paquete',
    'pricing.subtitle': 'Precios justos para sesiones profesionales',
    'pricing.trial.title': 'Prueba gratis',
    'pricing.trial.subtitle': 'Prueba antes de comprar',
    'pricing.trial.photos': 'fotos HD',
    'pricing.trial.price': 'Gratis',
    'pricing.trial.cta': 'Comenzar prueba gratis',
    'pricing.photos': 'fotos',
    'pricing.economy': 'Ahorra',
    'pricing.popular': 'Más popular',
    'pricing.cta': 'Comprar paquete',
    'pricing.features.title': 'Qué está incluido',
    'pricing.feature1': 'Procesamiento en hasta 30 segundos',
    'pricing.feature2': 'Calidad HD profesional',
    'pricing.feature3': 'Todas las plantillas disponibles',
    'pricing.feature4': 'Descarga ilimitada',
    'pricing.feature5': 'Soporte prioritario vía WhatsApp',
    'pricing.feature6': 'Satisfacción garantizada',
    
    // Footer
    'footer.tagline': 'Sesiones fotográficas profesionales con inteligencia artificial.',
    'footer.product': 'Producto',
    'footer.templates': 'Plantillas',
    'footer.howitworks': 'Cómo funciona',
    'footer.pricing': 'Precios',
    'footer.company': 'Empresa',
    'footer.contact': 'Contacto',
    'footer.email': 'Email',
    'footer.legal': 'Legal',
    'footer.terms': 'Términos de uso',
    'footer.privacy': 'Privacidad y LGPD',
    'footer.rights': '© 2025 StudioAI. Todos los derechos reservados. Democratizando la fotografía profesional a través de la IA.',
  },
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt-BR';
  if (browserLang.startsWith('es')) return 'es';
  return 'en-US';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
