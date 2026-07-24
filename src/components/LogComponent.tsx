import type { LoggedCurrencies } from "@/App";
import ClearButton from "./ClearButton";
import LogList from "./LogList";

type Props = {
  logged: LoggedCurrencies[];
  setLogged: React.Dispatch<React.SetStateAction<LoggedCurrencies[]>>;
};

export default function LogComponent({ logged, setLogged }: Props) {
  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[16px]">CONVERSION LOG</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-100">{logged.length} LOGGED</span>
          <ClearButton setLogged={setLogged} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {!logged.length ? (
          <div>no data</div>
        ) : (
          logged.map(
            ({
              loggedSend,
              loggedReceive,
              loggedSendAmount,
              loggedReceiveAmount,
            }) => (
              <li key={loggedSend}>
                <LogList
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
