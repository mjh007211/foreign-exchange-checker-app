import { useState } from "react";
import "./App.css";
import { FavoritedButton } from "./components/FavoritedButton";
import Header from "./components/Header";
import HistoryCalendar from "./components/HistoryCalendar";
import HistoryCard from "./components/HistoryCard";
import LiveMarketsBar from "./components/LiveMarketsBar";
import { LogButton } from "./components/LogButton";
import NavBar from "./components/NavBar";
import SendCheckRateCard from "./components/SendCheckRateCard";
import SwapButton from "./components/SwapButton";
import RenderNav from "./components/RenderNav";

const navigateText = ["HISTORY", "COMPARE", "FAVORITES", "LOG"];

function App() {
  const [activeNav, setActiveNav] = useState("HISTORY");

  const handleActiveNav = (text: string) => {
    setActiveNav(text);
  };

  return (
    <div>
      <Header />
      <LiveMarketsBar />

      <div className="max-w-[1100px] px-8 mx-auto mt-12">
        <h2 className="text-[20px]">CHECK THE RATE</h2>

        <div className="bg-neutral-700 mt-4  pt-5 pb-4 rounded-20">
          <div className="px-5">
            <div className="flex gap-6">
              <div className="flex-1">
                <SendCheckRateCard cardTitle="SEND" />
              </div>
              <div className="self-center">
                <SwapButton />
              </div>
              <div className="flex-1">
                <SendCheckRateCard cardTitle="RECEIVE" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-5 mt-5 h-16 border-neutral-500  border-t border-dashed">
            <div>
              <div>
                <h5>1 SAR = 0.8530 EUR</h5>
              </div>
            </div>
            <div className="flex gap-3">
              <FavoritedButton />
              <LogButton />
            </div>
          </div>
        </div>
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
        <RenderNav activeNav={activeNav} />
      </div>
    </div>
  );
}

export default App;
