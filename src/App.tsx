import "./App.css";
import Header from "./components/Header";
import LiveMarketsBar from "./components/LiveMarketsBar";
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

          <div className="flex items-center justify-between mt-5 h-16  border-t border-dashed">
            <div className="px-5">
              <div>
                <h5>1 SAR = 0.8530 EUR</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
