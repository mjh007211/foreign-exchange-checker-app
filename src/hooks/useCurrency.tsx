import { useEffect, useState } from "react";

type CurrenciesData = {
  sendCurrency: string;
  receiveCurrency: string;
};

type BaseCurrencyData = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

export default function useCurrency() {
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrenciesData>({
    sendCurrency: "USD",
    receiveCurrency: "EUR",
  });
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencyData[] | null>(
    null,
  );
  const handleSendCurrency = (currency: string) => {
    setSelectedCurrencies((prev) => ({
      ...prev,
      sendCurrency: currency,
    }));
  };

  const handleReceiveCurrency = (currency: string) => {
    setSelectedCurrencies((prev) => ({
      ...prev,
      receiveCurrency: currency,
    }));
  };

  const getBaseCurrency = async () => {
    const response = await fetch(
      `https://api.frankfurter.dev/v2/rates?base=${selectedCurrencies.sendCurrency}`,
    );
    const data = await response.json();
    setBaseCurrency(data);
  };

  useEffect(() => {
    getBaseCurrency();
  }, [selectedCurrencies]);

  // const handleCurrencyConvert = async (value: number) => {
  //   if (!value || !baseCurrency) return;
  //   await getBaseCurrency();
  //   const currencyQuote = baseCurrency?.find((c)=> c.quote === selectedCurrencies.receiveCurrency)
  //   const result = value * currencyQuote?.rate;
  //   return result;
  // };

  return {
    handleSendCurrency,
    handleReceiveCurrency,
    baseCurrency,
    selectedCurrencies,
  };
}
