import type { LoggedCurrencies } from "@/type";
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
                  logged={logged}
                  setLogged={setLogged}
                />
              </li>
            ),
          )
        )}
      </div>
    </div>
  );
}
