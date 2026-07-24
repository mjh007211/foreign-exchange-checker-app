import type { LoggedCurrencies } from "@/App";
import { Button } from "@/ui/button";

type Props = {
  setLogged: React.Dispatch<React.SetStateAction<LoggedCurrencies[]>>;
};

export default function ClearButton({ setLogged }: Props) {
  const handleClearLogged = () => {
    const isClear = confirm("Are you sure you want to delete all Logged?");
    if (!isClear) return;
    setLogged([]);
  };
  return (
    <Button
      onClick={handleClearLogged}
      className="rounded-8! cursor-pointer text-neutral-200 border-neutral-400 bg-neutral-600"
    >
      CLEAR ALL
    </Button>
  );
}
