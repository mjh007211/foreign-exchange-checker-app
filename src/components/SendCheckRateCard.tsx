import { SendCurrencyPickDropDownMenu } from "./SendCurrencyPickDropDownMenu";

type Props = {
  cardTitle: "SEND" | "RECEIVE";
};

export default function SendCheckRateCard({ cardTitle }: Props) {
  return (
    <div className="bg-neutral-600 flex flex-col gap-5 rounded-2xl p-5">
      <h4 className="text-neutral-100 text-[14px]">
        {cardTitle === "SEND" ? "SEND" : "RECEIVE"}
      </h4>
      <div className="flex justify-between items-center">
        <input
          // placeholder={cardTitle === "SEND" ? "1000" : "853.02"}
          className="text-[40px] font-bold w-fit max-w-[123px] h-10 rounded-8"
          type="text"
        />
        <SendCurrencyPickDropDownMenu />
      </div>
    </div>
  );
}
