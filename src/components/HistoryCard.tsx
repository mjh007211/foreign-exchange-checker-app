type Props = {
  title: string;
  percentChange: string;
};

export default function HistoryCard({ title, percentChange }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-neutral-700 w-1800 h-[81px] rounded-16 px-5 py-3">
      <h5 className="text-neutral-200 text-[14px]">{title}</h5>
      <span
        className={`text-[20px] ${title.includes("CHANGE") ? "text-green-500" : ""}`}
      >
        {percentChange}
      </span>
    </div>
  );
}
