type Language = 'pt-BR' | 'en-US' | 'es';

export const getPricing = (language: Language) => {
  const packages = [
    { photos: 10, priceUSD: 15, priceBRL: 79.97 },
    { photos: 25, priceUSD: 35, priceBRL: 179.97, discount: 20, popular: true },
    { photos: 50, priceUSD: 65, priceBRL: 329.97, discount: 30 },
    { photos: 100, priceUSD: 115, priceBRL: 579.97, discount: 42 },
  ];

  return packages.map(pkg => {
    const isReais = language === 'pt-BR';
    const price = isReais ? pkg.priceBRL : pkg.priceUSD;
    const currency = isReais ? 'R$' : '$';
    
    return {
      ...pkg,
      price,
      currency,
      formattedPrice: `${currency} ${price.toFixed(2).replace('.', ',')}`,
    };
  });
};
