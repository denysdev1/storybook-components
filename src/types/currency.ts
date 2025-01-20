export enum CurrencyCode {
  CANADA = 'CAD',
  US = 'USD',
  FRANCE = 'EUR',
  UK = 'GBP',
}

export type CurrencyInfo = {
  flagPath: string;
  symbol: string;
};

export type Currency = {
  code: CurrencyCode;
};
