import { SendCurrencyPickDropDownMenu } from "./SendCurrencyPickDropDownMenu";
import { useContext } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";

export default function SendCheckRateCard() {
  const { countries, sendAmount, setSendAmount } = useContext(CurrencyContext);
  const popularCurrencies = countries?.filter(
    ({ iso_code }) =>
      iso_code === "USD" || iso_code === "EUR" || iso_code === "GBP",
  );

  const handleSendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!/^\d*$/.test(value)) return;

    setSendAmount((prev) =>
      prev === "0" ? value.replace(/^0+/, "") || "0" : value,
    );
  };

  return (
    <div className="bg-neutral-600 flex flex-col gap-5 rounded-2xl p-5">
      <h4 className="text-neutral-100 text-[14px]">SEND</h4>
      <div className="flex justify-between items-center">
        <input
          onChange={handleSendChange}
          value={sendAmount}
          className={`text-[40px] font-bold w-fit max-w-[142px] h-12 rounded-8`}
          type="text"
        />
        <SendCurrencyPickDropDownMenu
          popularCurrencies={popularCurrencies || null}
        />
      </div>
    </div>
  );
}
