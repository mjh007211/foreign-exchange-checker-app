import FavoritesList from "./FavoritesList";

export default function FavoritesComponent() {
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
        <FavoritesList />
        <FavoritesList />
        <FavoritesList />
      </div>
    </div>
  );
}
