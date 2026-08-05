import { CurrencyContext } from "@/context/CurrencyContext";
import { Button } from "@/ui/button";
import { useContext } from "react";
import { toast } from "sonner";

export default function ClearButton() {

  const { setLogged } = useContext(CurrencyContext);


  const handleClearLogged = () => {
    const isClear = confirm("Are you sure you want to delete all Logged?");
    if (!isClear) return;
    setLogged([]);
    toast.success("the conversion logs have been cleared successfully!");
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
