import type { BaseCurrencyData, CountriesData, CurrenciesData } from "@/App";
import CompareComponent from "./CompareComponent";
import FavoritesComponent from "./FavoritesComponent";
import HistoryComponent from "./HistoryComponent";
import LogComponent from "./LogComponent";

type Props = {
  activeNav: string;
  baseCurrency: BaseCurrencyData[];
  sendAmount: string;
  selectedCurrencies: CurrenciesData;
  countries: CountriesData[];
};

export default function RenderNav({
  activeNav,
  baseCurrency,
  sendAmount,
  selectedCurrencies,
  countries,
}: Props) {
  switch (activeNav) {
    case "HISTORY":
      return <HistoryComponent />;
    case "COMPARE":
      return (
        <CompareComponent
          countries={countries}
          selectedCurrencies={selectedCurrencies}
          sendAmount={sendAmount}
          baseCurrency={baseCurrency}
        />
      );
    case "FAVORITES":
      return <FavoritesComponent />;
    case "LOG":
      return <LogComponent />;
  }
}
