import MultiCurrencyList from "./MultiCurrencyList";

export default function CompareComponent() {
  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-neutral-200">MULTI-CURRENCY</h3>
          <span className="text-[16px]">1,000 FROM SAR</span>
        </div>
        <div>
          <span className="text-neutral-100">8 PAIRS</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <MultiCurrencyList />
        <MultiCurrencyList />
        <MultiCurrencyList />
      </div>
    </div>
  );
}
