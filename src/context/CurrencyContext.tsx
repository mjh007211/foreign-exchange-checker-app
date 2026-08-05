import type {
  CountriesData,
  CurrenciesData,
  BaseCurrencyData,
  FavoritedCurrencies,
  LoggedCurrencies,
} from "@/type";
import { createContext } from "react";

type CurrencyContextType = {
  countries: CountriesData[] | null;
  setCountries: React.Dispatch<React.SetStateAction<CountriesData[] | null>>;
  selectedCurrencies: CurrenciesData;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<CurrenciesData>>;

  baseCurrency: BaseCurrencyData[];
  setBaseCurrency: React.Dispatch<React.SetStateAction<BaseCurrencyData[]>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;

  sendAmount: string;
  setSendAmount: React.Dispatch<React.SetStateAction<string>>;

  receiveAmount: number;
  setReceiveAmount: React.Dispatch<React.SetStateAction<number>>;

  favorited: FavoritedCurrencies[];
  setFavorited: React.Dispatch<React.SetStateAction<FavoritedCurrencies[]>>;

  logged: LoggedCurrencies[];
  setLogged: React.Dispatch<React.SetStateAction<LoggedCurrencies[]>>;
};

export const CurrencyContext = createContext<CurrencyContextType>({
  countries: null,
  setCountries: () => {},

  selectedCurrencies: {
    sendCurrency: "USD",
    receiveCurrency: "EUR",
  },
  setSelectedCurrencies: () => {},

  baseCurrency: [],
  setBaseCurrency: () => {},
  rate: 0,
  setRate: () => {},

  sendAmount: "0",
  setSendAmount: () => {},

  receiveAmount: 0,
  setReceiveAmount: () => {},

  favorited: [],
  setFavorited: () => {},

  logged: [],
  setLogged: () => {},
});
