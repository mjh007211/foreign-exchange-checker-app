import type { CountriesData } from "@/App";
import { ReceiveCurrencyPickDropDownMenu } from "./ReceiveCurrencyPickDropDownMenu";

type Props = {
  countries: CountriesData[] | null;
};

export default function ReceiveCheckRateCard({ countries }: Props) {

  const popularCurrencies = countries?.filter(
    ({ iso_code }) =>
      iso_code === "USD" || iso_code === "EUR" || iso_code === "GBP",
  );

  return (
    <div className="bg-neutral-600 flex flex-col gap-5 rounded-2xl p-5">
      <h4 className="text-neutral-100 text-[14px]">RECEIVE</h4>
      <div className="flex justify-between items-center">
        <input
          value={853.02}
          className={`text-[40px] font-bold w-fit max-w-[142px] h-10 rounded-8 text-lime-500`}
          type="text"
        />
        <ReceiveCurrencyPickDropDownMenu
          countries={countries}
          popularCurrencies={popularCurrencies || null}
        />
      </div>
    </div>
  );
}
