export type CountriesData = {
  iso_code: string;
  name: string;
};

export type CurrenciesData = {
  sendCurrency: string;
  receiveCurrency: string;
};

export type BaseCurrencyData = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

export type FavoritedCurrencies = {
  favoritedSend: string;
  favoritedReceive: string;
  favoritedRate: number;
};

export type LoggedCurrencies = {
  loggedSend: string;
  loggedReceive: string;
  loggedSendAmount: string;
  loggedReceiveAmount: number;
};
