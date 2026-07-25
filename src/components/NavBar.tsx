type Props = {
  navText: string;
  favoritedLan: number;
  loggedLan: number;
};

export default function NavBar({ navText, favoritedLan, loggedLan }: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-[10.5px]">
      <h2 className="text-[16px]">{navText}</h2>

      {navText === "FAVORITES" ? (
        <span className="flex justify-center items-center rounded-full bg-lime-800 text-lime-500 w-5 h-5">
          {favoritedLan}
        </span>
      ) : (
        ""
      )}

      {navText === "LOG" ? (
        <span className="flex justify-center items-center rounded-full bg-lime-800 text-lime-500 w-5 h-5">
          {loggedLan}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
