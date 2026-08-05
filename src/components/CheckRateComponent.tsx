import SendCheckRateCard from "./SendCheckRateCard";
import SwapButton from "./SwapButton";
import ReceiveCheckRateCard from "./ReceiveCheckRateCard";
import { FavoritedButton } from "./FavoritedButton";
import { LogButton } from "./LogButton";
import { useContext } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";

export default function CheckRateComponent() {
  const { rate, selectedCurrencies } = useContext(CurrencyContext);

  return (
    <div className="bg-neutral-700 mt-4 px-5  pt-5 pb-4 rounded-20">
      <div className="flex gap-6">
        <div className="flex-1">
          <SendCheckRateCard />
        </div>
        <div className="self-center">
          <SwapButton />
        </div>
        <div className="flex-1">
          <ReceiveCheckRateCard />
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
