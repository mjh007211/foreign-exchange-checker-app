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
import type {
  CountriesData,
  CurrenciesData,
  BaseCurrencyData,
  FavoritedCurrencies,
  LoggedCurrencies,
} from "./type";

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
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [logged, setLogged] = useState<LoggedCurrencies[]>([]);

  const getBaseCurrency = async () => {
    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v2/rates?base=${selectedCurrencies.sendCurrency}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();
      setBaseCurrency(data);
    } catch (error) {
      console.error(error);
      setBaseCurrency([]);
    }
  };

  const getExchangeRate = () => {
    if (!baseCurrency) {
      setRate(0);
      return;
    }

    const receiveCurrency = baseCurrency.find(
      (c) => c.quote === selectedCurrencies.receiveCurrency,
    );

    if (!receiveCurrency) {
      setRate(0);
      return;
    }

    setRate(receiveCurrency.rate);
  };

  const handleActiveNav = (text: string) => {
    setActiveNav(text);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v2/currencies",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currencies");
        }

        const data = await response.json();

        const countriesData = data.map(({ iso_code, name }: CountriesData) => ({
          iso_code,
          name,
        }));

        const countriesWithFlags = countriesData.filter(
          ({ iso_code }: CountriesData) => currencyFlags[iso_code],
        );

        setCountries(countriesWithFlags);
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
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

      <div className="max-w-275 px-8 mx-auto mt-12">
        <h2 className="text-preset-2">CHECK THE RATE</h2>

        <CheckRateComponent
          sendAmount={sendAmount}
          setSendAmount={setSendAmount}
          rate={rate}
          selectedCurrencies={selectedCurrencies}
          setSelectedCurrencies={setSelectedCurrencies}
          countries={countries}
          setFavorited={setFavorited}
          receiveAmount={receiveAmount}
          setReceiveAmount={setReceiveAmount}
          setLogged={setLogged}
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
                  <NavBar
                    favoritedLan={favorited.length}
                    loggedLan={logged.length}
                    navText={text}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4 ">
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
          receiveAmount={receiveAmount}
          logged={logged}
          setLogged={setLogged}
        />
      </div>
    </div>
  );
}

export default App;
