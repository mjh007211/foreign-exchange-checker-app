import type { BaseCurrencyData, FavoritedCurrencies } from "@/App";
import FavoritesList from "./FavoritesList";

type Props = {
  favorited: FavoritedCurrencies[];
  baseCurrency: BaseCurrencyData[];
};

export default function FavoritesComponent({ favorited }: Props) {
  return (
    <div className="bg-neutral-700 p-5 rounded-16 mt-5">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[16px]">PINNED PAIRS</h3>
        </div>
        <div>
          <span className="text-neutral-100">10 FAVORITES</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {!favorited.length ? (
          <div>no data</div>
        ) : (
          favorited.map((f, index) => (
            <li key={index}>
              <FavoritesList
                send={f.favoritedSend}
                receive={f.favoritedReceive}
              />
            </li>
          ))
        )}
      </div>
    </div>
  );
}
