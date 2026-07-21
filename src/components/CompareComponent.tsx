import MultiCurrencyList from "./MultiCurrencyList";
import type { BaseCurrencyData, CountriesData, CurrenciesData } from "@/App";

type Props = {
  baseCurrency: BaseCurrencyData[];
  sendAmount: string;
  selectedCurrencies: CurrenciesData;
  countries: CountriesData[];
};

export default function CompareComponent({
  baseCurrency,
  sendAmount,
  selectedCurrencies,
  countries,
}: Props) {
  const ratesByQuote = Object.fromEntries(
    baseCurrency.map((c) => [c.quote, c]),
  );

  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-neutral-200">MULTI-CURRENCY</h3>
          <span className="text-[16px]">
            {sendAmount} FROM {selectedCurrencies.sendCurrency}
          </span>
        </div>
        <div>
          <span className="text-neutral-100">8 PAIRS</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {countries?.map((c) => {
          if (
            c.iso_code === selectedCurrencies.sendCurrency ||
            c.iso_code === selectedCurrencies.receiveCurrency
          ) {
            return null;
          }

          return (
            <li key={c.iso_code}>
              <MultiCurrencyList
                currency={c.iso_code}
                currencyName={c.name}
                rate={ratesByQuote[c.iso_code]?.rate}
                sendAmount={sendAmount}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}
