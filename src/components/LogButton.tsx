import type { CurrenciesData, LoggedCurrencies } from "@/App";
import { Button } from "../ui/button";

type Props = {
  receiveAmount: number;
  sendAmount: string;
  selectedCurrencies: CurrenciesData;
  setLogged: React.Dispatch<React.SetStateAction<LoggedCurrencies[]>>;
};

export function LogButton({
  receiveAmount,
  sendAmount,
  selectedCurrencies,
  setLogged,
}: Props) {
  const handleAddLogged = () => {
    setLogged((prev) => {
      if (sendAmount === "0" && receiveAmount === 0) return prev;

      const alreadyExists = prev.some(
        (log) =>
          log.loggedSendAmount === sendAmount &&
          log.loggedReceiveAmount === receiveAmount,
      );

      if (alreadyExists) {
        return prev;
      }

      return [
        ...prev,
        {
          loggedSend: selectedCurrencies.sendCurrency,
          loggedReceive: selectedCurrencies.receiveCurrency,
          loggedSendAmount: sendAmount,
          loggedReceiveAmount: receiveAmount,
        },
      ];
    });
  };

  return (
    <Button
      onClick={handleAddLogged}
      className="px-3 py-2 rounded-8! cursor-pointer font-medium bg-neutral-700 border border-lime-500 hover:bg-lime-800  text-neutral-50"
    >
      LOG CONVERSION
    </Button>
  );
}
