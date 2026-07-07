export default function SwapButton() {
  return (
    <button className="w-12 h-12 rounded-8 bg-neutral-600 flex justify-center items-center">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 8.75L0.75 4.75L4.75 0.75M0.75 4.75H16.75M12.75 10.75L16.75 14.75L12.75 18.75M16.75 14.75H0.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}
