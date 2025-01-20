export enum CurrencyCode {
  CANADA = 'CAD',
  UNITED_STATES = 'USD',
  FRANCE = 'EUR',
  UNITED_KINGDOM = 'GBP',
}

export type CurrencyInfo = {
  flagPath: string;
  symbol: string;
};

export type Currency = {
  code: CurrencyCode;
};
