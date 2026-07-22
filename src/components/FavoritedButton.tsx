import type { CurrenciesData, FavoritedCurrencies } from "@/App";
import { Button } from "../ui/button";

type Props = {
  selectedCurrencies: CurrenciesData;
  setFavorited: React.Dispatch<React.SetStateAction<FavoritedCurrencies[]>>;
};

export function FavoritedButton({ selectedCurrencies, setFavorited }: Props) {
  const handleAddFavorited = () => {
    setFavorited((prev) => {
      const alreadyExists = prev.some(
        (favorite) =>
          favorite.favoritedSend === selectedCurrencies.sendCurrency &&
          favorite.favoritedReceive === selectedCurrencies.receiveCurrency,
      );

      if (alreadyExists) {
        return prev;
      }

      return [
        ...prev,
        {
          favoritedSend: selectedCurrencies.sendCurrency,
          favoritedReceive: selectedCurrencies.receiveCurrency,
        },
      ];
    });
  };
  return (
    <Button
      onClick={handleAddFavorited}
      className="flex gap-2  px-3 py-2 rounded-8! cursor-pointer font-medium bg-lime-500 text-black"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33199 2.41094C7.61324 1.84844 8.41012 1.87187 8.66793 2.41094L10.2148 5.52812L13.6367 6.02031C14.2461 6.11406 14.4804 6.86406 14.0351 7.30937L11.5742 9.72344L12.1601 13.1219C12.2539 13.7312 11.5976 14.2 11.0586 13.9187L8.01168 12.3016L4.94137 13.9187C4.4023 14.2 3.74605 13.7312 3.8398 13.1219L4.42574 9.72344L1.9648 7.30937C1.51949 6.86406 1.75387 6.11406 2.36324 6.02031L5.80855 5.52812L7.33199 2.41094Z"
          fill="#0A0A0A"
        />
      </svg>
      FAVORITED
    </Button>
  );
}
