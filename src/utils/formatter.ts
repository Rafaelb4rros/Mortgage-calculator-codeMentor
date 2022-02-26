export const formatter = {
  format_currency: ({
    currency = "USD",
    locale = "en-US",
    value,
  }: {
    currency?: string;
    locale?: string;
    value: number;
  }) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  },
};
