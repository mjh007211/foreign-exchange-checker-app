import { Button } from "../ui/button";
import { toast } from "sonner";
import { CurrencyContext } from "@/context/CurrencyContext";
import { useContext } from "react";

export function LogButton() {
  const { receiveAmount, sendAmount, selectedCurrencies, setLogged } =
    useContext(CurrencyContext);

  const handleAddLogged = () => {
    setLogged((prev) => {
      if (sendAmount === "0" && receiveAmount === 0) {
        toast.error("enter a send amount.");
        return prev;
      }

      const alreadyExists = prev.some(
        (log) =>
          log.loggedSendAmount === sendAmount &&
          log.loggedReceiveAmount === receiveAmount,
      );

      if (alreadyExists) {
        toast.error("you already have logged the same data before.");
        return prev;
      }

      toast.success("it's has been successfully added to log!");

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
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
