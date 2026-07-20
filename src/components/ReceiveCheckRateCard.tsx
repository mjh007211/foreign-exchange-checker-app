import type { CountriesData, CurrenciesData } from "@/App";
import { ReceiveCurrencyPickDropDownMenu } from "./ReceiveCurrencyPickDropDownMenu";
import { useEffect, useState } from "react";

type Props = {
  countries: CountriesData[] | null;
  selectedCurrencies: CountriesData;
  rate: number;
  sendAmount: string;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<CurrenciesData>>;
};

export default function ReceiveCheckRateCard({
  countries,
  sendAmount,
  rate,
  setSelectedCurrencies,
  selectedCurrencies,
}: Props) {
  const [receiveAmount, setReceiveAmount] = useState(0);
  const popularCurrencies = countries?.filter(
    ({ iso_code }) =>
      iso_code === "USD" || iso_code === "EUR" || iso_code === "GBP",
  );

  useEffect(() => {
    if (sendAmount === "" || sendAmount === "0") {
      setReceiveAmount(0);
      return;
    }

    const exchange = Number(sendAmount) * rate;
    setReceiveAmount(exchange);
  }, [sendAmount, rate]);

  return (
    <div className="bg-neutral-600 flex flex-col gap-5 rounded-2xl p-5">
      <h4 className="text-neutral-100 text-[14px]">RECEIVE</h4>
      <div className="flex justify-between items-center">
        <span
          className={`text-[40px] font-bold w-fit max-w-[142px] overflow-hidden  h-12 rounded-8 text-lime-500`}
        >
          {!receiveAmount ? receiveAmount : receiveAmount.toFixed(2)}
        </span>
        <ReceiveCurrencyPickDropDownMenu
          countries={countries}
          popularCurrencies={popularCurrencies || null}
          setSelectedCurrencies={setSelectedCurrencies}
          selectedCurrencies={selectedCurrencies}
        />
      </div>
    </div>
  );
}
