import { useEffect, useState, type ReactNode } from "react";
import { CurrencyContext } from "./CurrencyContext";
import type {
  CountriesData,
  CurrenciesData,
  BaseCurrencyData,
  FavoritedCurrencies,
  LoggedCurrencies,
} from "@/type";
import { currencyFlags } from "@/countriesFlags";

type Props = {
  children: ReactNode;
};

export default function CurrencyContextProvider({ children }: Props) {
  const [countries, setCountries] = useState<CountriesData[] | null>(null);
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrenciesData>({
    sendCurrency: "USD",
    receiveCurrency: "EUR",
  });
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencyData[]>([]);
  const [rate, setRate] = useState(0);
  const [sendAmount, setSendAmount] = useState("0");
  const [favorited, setFavorited] = useState<FavoritedCurrencies[]>([]);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [logged, setLogged] = useState<LoggedCurrencies[]>([]);

  const getBaseCurrency = async () => {
    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v2/rates?base=${selectedCurrencies.sendCurrency}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();
      setBaseCurrency(data);
    } catch (error) {
      console.error(error);
      setBaseCurrency([]);
    }
  };

  const getExchangeRate = () => {
    if (!baseCurrency) {
      setRate(0);
      return;
    }

    const receiveCurrency = baseCurrency.find(
      (c) => c.quote === selectedCurrencies.receiveCurrency,
    );

    if (!receiveCurrency) {
      setRate(0);
      return;
    }

    setRate(receiveCurrency.rate);
  };


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v2/currencies",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currencies");
        }

        const data = await response.json();

        const countriesData = data.map(({ iso_code, name }: CountriesData) => ({
          iso_code,
          name,
        }));

        const countriesWithFlags = countriesData.filter(
          ({ iso_code }: CountriesData) => currencyFlags[iso_code],
        );

        setCountries(countriesWithFlags);
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
    };

    fetchCountries();
    getBaseCurrency();
    getExchangeRate();
  }, []);

  useEffect(() => {
    getBaseCurrency();
  }, [selectedCurrencies.sendCurrency]);

  useEffect(() => {
    getExchangeRate();
  }, [baseCurrency, selectedCurrencies.receiveCurrency]);

  
  return (
    <CurrencyContext.Provider
      value={{
        countries,
        setCountries,
        selectedCurrencies,
        setSelectedCurrencies,
        baseCurrency,
        setBaseCurrency,
        rate,
        setRate,
        sendAmount,
        setSendAmount,
        receiveAmount,
        setReceiveAmount,
        favorited,
        setFavorited,
        logged,
        setLogged,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
