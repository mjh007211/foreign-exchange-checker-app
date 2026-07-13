import type { CountriesData } from "@/App";
import { SendCurrencyPickDropDownMenu } from "./SendCurrencyPickDropDownMenu";

type Props = {
  cardTitle: "SEND" | "RECEIVE";
  countries: CountriesData[] | null;
};

export default function SendCheckRateCard({ cardTitle, countries }: Props) {
  return (
    <div className="bg-neutral-600 flex flex-col gap-5 rounded-2xl p-5">
      <h4 className="text-neutral-100 text-[14px]">
        {cardTitle === "SEND" ? "SEND" : "RECEIVE"}
      </h4>
      <div className="flex justify-between items-center">
        <input
          value={cardTitle === "SEND" ? "1,000" : "853.02"}
          className={`text-[40px] font-bold w-fit max-w-[142px] h-10 rounded-8 ${cardTitle === "RECEIVE" ? "text-lime-500" : ""}`}
          type="text"
        />
        <SendCurrencyPickDropDownMenu countries={countries} />
      </div>
    </div>
  );
}
