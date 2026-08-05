import ClearButton from "./ClearButton";
import LogList from "./LogList";
import { CurrencyContext } from "@/context/CurrencyContext";
import { useContext } from "react";

export default function LogComponent() {
  const { logged, setLogged } = useContext(CurrencyContext);

  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[16px]">CONVERSION LOG</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-100">{logged.length} LOGGED</span>
          <ClearButton />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {!logged.length ? (
          <div>no data</div>
        ) : (
          logged.map(
            ({
              id,
              loggedSend,
              loggedReceive,
              loggedSendAmount,
              loggedReceiveAmount,
            }) => (
              <li key={id}>
                <LogList
                  id={id}
                  loggedSend={loggedSend}
                  loggedReceive={loggedReceive}
                  loggedSendAmount={loggedSendAmount}
                  loggedReceiveAmount={loggedReceiveAmount}
                />
              </li>
            ),
          )
        )}
      </div>
    </div>
  );
}
