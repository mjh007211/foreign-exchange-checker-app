import HistoryComponent from "./HistoryComponent";

type Props = {
  activeNav: string;
};

export default function RenderNav({ activeNav }: Props) {
  switch (activeNav) {
    case "HISTORY":
      return <HistoryComponent />;
  }
}
