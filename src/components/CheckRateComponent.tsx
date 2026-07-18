import type { CountriesData } from "@/App";
import SendCheckRateCard from "./SendCheckRateCard";
import SwapButton from "./SwapButton";
import ReceiveCheckRateCard from "./ReceiveCheckRateCard";
import { FavoritedButton } from "./FavoritedButton";
import { LogButton } from "./LogButton";
import useCurrency from "@/hooks/useCurrency";
import { useEffect, useState } from "react";

type Props = {
  countries: CountriesData[] | null;
};

export default function CheckRateComponent({ countries }: Props) {
  const { selectedCurrencies } = useCurrency();

  return (
    <div className="bg-neutral-700 mt-4 px-5  pt-5 pb-4 rounded-20">
      <div className="flex gap-6">
        <div className="flex-1">
          <SendCheckRateCard countries={countries} />
        </div>
        <div className="self-center">
          <SwapButton />
        </div>
        <div className="flex-1">
          <ReceiveCheckRateCard countries={countries} />
        </div>
      </div>

      <div className="flex items-center justify-between px-5 mt-5 h-16 border-neutral-500  border-t border-dashed">
        <div>
          <div>
            <h5>
              1 {selectedCurrencies.sendCurrency} ={" "}
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
