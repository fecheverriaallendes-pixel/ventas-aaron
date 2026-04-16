export const formatARS = (value: number) => {
  return value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

export const formatUSD = (value: number, rate: number) => {
  if (!rate || rate <= 0) return '';
  const usdValue = value / rate;
  return usdValue.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const formatCurrencyWithUSD = (value: number, rate: number) => {
  return `${formatARS(value)} (≈ ${formatUSD(value, rate)} USD)`;
};
