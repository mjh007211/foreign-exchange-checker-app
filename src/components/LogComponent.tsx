import ClearButton from "./ClearButton";
import LogList from "./LogList";

export default function LogComponent() {
  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[16px]">CONVERSION LOG</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-100">8 LOGGED</span>
          <ClearButton />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <LogList />
        <LogList />
        <LogList />
      </div>
    </div>
  );
}
