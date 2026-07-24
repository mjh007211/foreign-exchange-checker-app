import type {
  BaseCurrencyData,
  CountriesData,
  CurrenciesData,
  FavoritedCurrencies,
  LoggedCurrencies,
} from "@/App";
import CompareComponent from "./CompareComponent";
import FavoritesComponent from "./FavoritesComponent";
import HistoryComponent from "./HistoryComponent";
import LogComponent from "./LogComponent";

type Props = {
  activeNav: string;
  baseCurrency: BaseCurrencyData[];
  sendAmount: string;
  selectedCurrencies: CurrenciesData;
  countries: CountriesData[] | null;
  favorited: FavoritedCurrencies[];
  receiveAmount: number;
  logged: LoggedCurrencies[];
  setLogged: React.Dispatch<React.SetStateAction<LoggedCurrencies[]>>;
};

export default function RenderNav({
  logged,
  activeNav,
  baseCurrency,
  sendAmount,
  selectedCurrencies,
  countries,
  favorited,
  setLogged,
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
      return <FavoritesComponent favorited={favorited} />;
    case "LOG":
      return <LogComponent setLogged={setLogged} logged={logged} />;
  }
}
