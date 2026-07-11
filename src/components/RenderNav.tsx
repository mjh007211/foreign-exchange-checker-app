import CompareComponent from "./CompareComponent";
import FavoritesComponent from "./FavoritesComponent";
import HistoryComponent from "./HistoryComponent";

type Props = {
  activeNav: string;
};

export default function RenderNav({ activeNav }: Props) {
  switch (activeNav) {
    case "HISTORY":
      return <HistoryComponent />;
    case "COMPARE":
      return <CompareComponent />;
    case "FAVORITES":
      return <FavoritesComponent />;
  }
}
