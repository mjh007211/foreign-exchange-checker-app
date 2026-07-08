import "./App.css";
import { FavoritedButton } from "./components/FavoritedButton";
import Header from "./components/Header";
import LiveMarketsBar from "./components/LiveMarketsBar";
import { LogButton } from "./components/LogButton";
import SendCheckRateCard from "./components/SendCheckRateCard";
import SwapButton from "./components/SwapButton";

function App() {
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
              <li className="text-[16px] px-4 py-[10.5px] border-b border-lime-500">
                HISTORY
              </li>
              <li className="text-[16px] px-4 py-[10.5px]">COMPARE</li>
              <li className="flex gap-2 text-[16px] px-4 py-[10.5px]">
                FAVORITES
                <div className="w-5 h-5 px-1 py-[5px] text-[10px] text-lime-500 flex justify-center items-center rounded-full bg-lime-800">
                  10
                </div>
              </li>
              <li className="flex gap-2 text-[16px] px-4 py-[10.5px]">
                LOG
                <div className="w-5 h-5 px-1 py-[5px] text-[10px] text-lime-500 flex justify-center items-center rounded-full bg-lime-800">
                  8
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 bg-neutral-700 w-1800 h-[81px] rounded-16 px-5 py-3">
                <h5 className="text-neutral-200 text-[14px]">OPEN</h5>
                <span className="text-[20px]">0.8516</span>
              </div>
              <div className="flex flex-col gap-4 bg-neutral-700 w-1800 h-[81px] rounded-16 px-5 py-3">
                <h5 className="text-neutral-200 text-[14px]">LAST</h5>
                <span className="text-[20px]">0.8516</span>
              </div>
              <div className="flex flex-col gap-4 bg-neutral-700 w-1800 h-[81px] rounded-16 px-5 py-3">
                <h5 className="text-neutral-200 text-[14px]">change</h5>
                <span className="text-[20px]">0.8516</span>
              </div>
              <div className="flex flex-col gap-4 bg-neutral-700 w-1800 h-[81px] rounded-16 px-5 py-3">
                <h5 className="text-neutral-200 text-[14px]">% change</h5>
                <span className="text-[20px]">0.8516</span>
              </div>
            </div>
            <div className="flex w-[286px] h-[42px] bg-neutral-700">
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  1D
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  1W
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  1M
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  3M
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  1Y
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-center items-center text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
                  5Y
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
