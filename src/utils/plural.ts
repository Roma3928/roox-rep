interface PluralVariants {
  zero?: string;
  one?: string;
  two?: string;
  few?: string;
  many?: string;
  other?: string;
}

const plural = (value: number, variants: PluralVariants = {}, locale: string = 'ru-RU'): string => {
  const key = new Intl.PluralRules(locale).select(value);

  return variants[key] || '';
};

export { plural };
