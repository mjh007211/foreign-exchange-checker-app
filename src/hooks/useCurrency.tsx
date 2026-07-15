import { useState } from "react";

type CurrenciesData = {
  sendCurrency: string;
  receiveCurrency: string;
};

export default function useCurrency() {
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrenciesData>({
    sendCurrency: "USD",
    receiveCurrency: "USD",
  });

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

  return { handleSendCurrency, handleReceiveCurrency, selectedCurrencies };
}
