import type { CountriesData, CurrenciesData, FavoritedCurrencies } from "@/App";
import SendCheckRateCard from "./SendCheckRateCard";
import SwapButton from "./SwapButton";
import ReceiveCheckRateCard from "./ReceiveCheckRateCard";
import { FavoritedButton } from "./FavoritedButton";
import { LogButton } from "./LogButton";

type Props = {
  countries: CountriesData[] | null;
  rate: number;
  selectedCurrencies: CurrenciesData;
  sendAmount: string;
  setFavorited: React.Dispatch<React.SetStateAction<FavoritedCurrencies[]>>;
  setSendAmount: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<CurrenciesData>>;
};

export default function CheckRateComponent({
  countries,
  rate,
  selectedCurrencies,
  sendAmount,
  setFavorited,
  setSendAmount,
  setSelectedCurrencies,
}: Props) {
  return (
    <div className="bg-neutral-700 mt-4 px-5  pt-5 pb-4 rounded-20">
      <div className="flex gap-6">
        <div className="flex-1">
          <SendCheckRateCard
            sendAmount={sendAmount}
            setSendAmount={setSendAmount}
            setSelectedCurrencies={setSelectedCurrencies}
            countries={countries}
            selectedCurrencies={selectedCurrencies}
          />
        </div>
        <div className="self-center">
          <SwapButton setSelectedCurrencies={setSelectedCurrencies} />
        </div>
        <div className="flex-1">
          <ReceiveCheckRateCard
            sendAmount={sendAmount}
            rate={rate}
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
          <FavoritedButton
            selectedCurrencies={selectedCurrencies}
            setFavorited={setFavorited}
          />
          <LogButton />
        </div>
      </div>
    </div>
  );
}
