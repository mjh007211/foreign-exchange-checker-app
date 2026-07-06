import "./App.css";
import Header from "./components/Header";
import LiveMarketsBar from "./components/LiveMarketsBar";
import SendCheckRateCard from "./components/SendCheckRateCard";

function App() {
  return (
    <div>
      <Header />
      <LiveMarketsBar />

      <div className="max-w-[1100px] px-8 mx-auto mt-12">
        <h2 className="text-[20px]">CHECK THE RATE</h2>

        <div className="bg-neutral-700 mt-4 px-5 pt-5 pb-4 rounded-20">
          <SendCheckRateCard />
        </div>
      </div>
    </div>
  );
}

export default App;
