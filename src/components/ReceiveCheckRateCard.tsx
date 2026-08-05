import { ReceiveCurrencyPickDropDownMenu } from "./ReceiveCurrencyPickDropDownMenu";
import { useContext, useEffect } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";

export default function ReceiveCheckRateCard() {
  const { countries, sendAmount, rate, receiveAmount, setReceiveAmount } =
    useContext(CurrencyContext);

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
      <h4 className="text-neutral-100 text-preset-4">RECEIVE</h4>
      <div className="flex justify-between items-center">
        <span
          className={`text-preset-1 font-bold w-fit max-w-35.5 overflow-hidden  h-12 rounded-8 text-lime-500`}
        >
          {!receiveAmount ? receiveAmount : receiveAmount.toFixed(2)}
        </span>
        <ReceiveCurrencyPickDropDownMenu
          popularCurrencies={popularCurrencies || null}
        />
      </div>
    </div>
  );
}
