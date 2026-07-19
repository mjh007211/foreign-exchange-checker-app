import type { CountriesData } from "@/App";
import SendCheckRateCard from "./SendCheckRateCard";
import SwapButton from "./SwapButton";
import ReceiveCheckRateCard from "./ReceiveCheckRateCard";
import { FavoritedButton } from "./FavoritedButton";
import { LogButton } from "./LogButton";
import { useEffect, useState } from "react";

export type CurrenciesData = {
  sendCurrency: string;
  receiveCurrency: string;
};

type BaseCurrencyData = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

type Props = {
  countries: CountriesData[] | null;
};

export default function CheckRateComponent({ countries }: Props) {
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrenciesData>({
    sendCurrency: "USD",
    receiveCurrency: "EUR",
  });
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencyData[] | null>(
    null,
  );
  const [rate, setRate] = useState(0);

  const getBaseCurrency = async () => {
    const response = await fetch(
      `https://api.frankfurter.dev/v2/rates?base=${selectedCurrencies.sendCurrency}`,
    );
    const data = await response.json();
    setBaseCurrency(data);
  };

  const getExchangeRate = () => {
    const receiveCurrency = baseCurrency?.find(
      (c) => c.quote === selectedCurrencies.receiveCurrency,
    );
    setRate(receiveCurrency?.rate || 0);
  };

  useEffect(() => {
    getBaseCurrency();
  }, [selectedCurrencies.sendCurrency]);

  useEffect(() => {
    getExchangeRate();
  }, [baseCurrency, selectedCurrencies.receiveCurrency]);

  return (
    <div className="bg-neutral-700 mt-4 px-5  pt-5 pb-4 rounded-20">
      <div className="flex gap-6">
        <div className="flex-1">
          <SendCheckRateCard
            setSelectedCurrencies={setSelectedCurrencies}
            countries={countries}
            selectedCurrencies={selectedCurrencies}
          />
        </div>
        <div className="self-center">
          <SwapButton />
        </div>
        <div className="flex-1">
          <ReceiveCheckRateCard
            setSelectedCurrencies={setSelectedCurrencies}
            countries={countries}
            selectedCurrencies={selectedCurrencies}
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-5 mt-5 h-16 border-neutral-500  border-t border-dashed">
        <div>
          <div>
            <h5>
              1 {selectedCurrencies.sendCurrency} = {rate}{" "}
              {selectedCurrencies.receiveCurrency}
            </h5>
          </div>
        </div>
        <div className="flex gap-3">
          <FavoritedButton />
          <LogButton />
        </div>
      </div>
    </div>
  );
}
