import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HistoryCalendar from "./components/HistoryCalendar";
import HistoryCard from "./components/HistoryCard";
import LiveMarketsBar from "./components/LiveMarketsBar";
import NavBar from "./components/NavBar";
import RenderNav from "./components/RenderNav";
import { currencyFlags } from "./countriesFlags";
import CheckRateComponent from "./components/CheckRateComponent";

export type CountriesData = {
  iso_code: string;
  name: string;
};

export type CurrenciesData = {
  sendCurrency: string;
  receiveCurrency: string;
};

export type BaseCurrencyData = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

export type FavoritedCurrencies = {
  favoritedSend: string;
  favoritedReceive: string;
};

const navigateText = ["HISTORY", "COMPARE", "FAVORITES", "LOG"];

function App() {
  const [countries, setCountries] = useState<CountriesData[] | null>(null);
  const [activeNav, setActiveNav] = useState("HISTORY");
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrenciesData>({
    sendCurrency: "USD",
    receiveCurrency: "EUR",
  });
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencyData[]>([]);
  const [rate, setRate] = useState(0);
  const [sendAmount, setSendAmount] = useState("0");
  const [favorited, setFavorited] = useState<FavoritedCurrencies[]>([]);

  const getBaseCurrency = async () => {
    const response = await fetch(
      `https://api.frankfurter.dev/v2/rates?base=${selectedCurrencies.sendCurrency}`,
    );
    const data = await response.json();
    setBaseCurrency(data);
  };

  const getExchangeRate = () => {
    const receiveCurrency = baseCurrency?.find(
      (c) => c.quote === selectedCurrencies.receiveCurrency,
    );
    setRate(receiveCurrency?.rate || 0);
  };

  const handleActiveNav = (text: string) => {
    setActiveNav(text);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://api.frankfurter.dev/v2/currencies");
      const data = await response.json();
      const countriesData: CountriesData[] = data.map(
        ({ iso_code, name }: CountriesData) => ({
          iso_code,
          name,
        }),
      );

      const countriesWithFlags = countriesData.filter(
        ({ iso_code }) => currencyFlags[iso_code],
      );

      setCountries(countriesWithFlags);
    };

    fetchCountries();
    getBaseCurrency();
    getExchangeRate();
  }, []);

  useEffect(() => {
    getBaseCurrency();
  }, [selectedCurrencies.sendCurrency]);

  useEffect(() => {
    getExchangeRate();
  }, [baseCurrency, selectedCurrencies.receiveCurrency]);

  return (
    <div>
      <Header />
      <LiveMarketsBar />

      <div className="max-w-[1100px] px-8 mx-auto mt-12">
        <h2 className="text-[20px]">CHECK THE RATE</h2>

        <CheckRateComponent
          sendAmount={sendAmount}
          setSendAmount={setSendAmount}
          rate={rate}
          selectedCurrencies={selectedCurrencies}
          setSelectedCurrencies={setSelectedCurrencies}
          countries={countries}
          setFavorited={setFavorited}
        />
        <div className="mt-[42.5px]">
          <nav>
            <ul className="flex gap-2 border-b border-neutral-600">
              {navigateText.map((text) => (
                <li
                  className={`cursor-pointer ${activeNav === text ? "border-b border-lime-500" : ""}`}
                  onClick={() => handleActiveNav(text)}
                  key={text}
                >
                  <NavBar navText={text} />
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4">
              <HistoryCard title="OPEN" percentChange="0.8516" />
              <HistoryCard title="LAST" percentChange="0.8530" />
              <HistoryCard title="CHANGE" percentChange="+0.0014" />
              <HistoryCard title="% CHANGE" percentChange="+0.16%" />
            </div>
            <HistoryCalendar />
          </div>
        </div>
        <RenderNav
          favorited={favorited}
          countries={countries}
          selectedCurrencies={selectedCurrencies}
          sendAmount={sendAmount}
          baseCurrency={baseCurrency}
          activeNav={activeNav}
        />
      </div>
    </div>
  );
}

export default App;
