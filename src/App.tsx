import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HistoryCalendar from "./components/HistoryCalendar";
import HistoryCard from "./components/HistoryCard";
import LiveMarketsBar from "./components/LiveMarketsBar";
import NavBar from "./components/NavBar";
import RenderNav from "./components/RenderNav";
import CheckRateComponent from "./components/CheckRateComponent";
import { CurrencyContext } from "./context/CurrencyContext";

const navigateText = ["HISTORY", "COMPARE", "FAVORITES", "LOG"];

function App() {
  const [activeNav, setActiveNav] = useState("HISTORY");

  const { favorited, logged } = useContext(CurrencyContext);

  const handleActiveNav = (text: string) => {
    setActiveNav(text);
  };

  return (
    <div>
      <Header />
      <LiveMarketsBar />

      <div className="max-w-275 px-8 mx-auto mt-12">
        <h2 className="text-preset-2">CHECK THE RATE</h2>

        <CheckRateComponent />
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
        <RenderNav activeNav={activeNav} />
      </div>
    </div>
  );
}

export default App;
