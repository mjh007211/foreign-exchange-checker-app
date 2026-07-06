export default function LiveMarketsBar() {
  return (
    <div>
      <div className="flex items-center gap-2 px-4 py-3 w-[138px] text-[12px] bg-lime-500 text-neutral-900">
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
            fill="#0A0A0A"
          />
        </svg>

        <h3 className="font-medium">LIVE MARKETS</h3>
      </div>
    </div>
  );
}
