export default function HistoryCalendar() {
  return (
    <div className="flex w-[286px] h-[42px] bg-neutral-700">
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          1D
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          1W
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          1M
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          3M
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          1Y
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-center cursor-pointer text-neutral-200 rounded-8 hover:bg-neutral-500 px-4 py-3">
          5Y
        </div>
      </div>
    </div>
  );
}
