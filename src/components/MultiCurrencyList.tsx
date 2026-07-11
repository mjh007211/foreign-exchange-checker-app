import KSA from "../assets/flags/sa.webp";

export default function MultiCurrencyList() {
  return (
    <div className="flex justify-between  bg-neutral-600 rounded-10 py-3 px-3.5">
      <div className="flex items-center gap-5">
        <div>
          <img className="w-6 h-6 bg-none" src={KSA} alt="" />{" "}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[14px]">SAR</h4>
          <h3 className="text-neutral-100">Saudi Riyal</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[16px]">736.64</span>
          <span className="text-[10px] text-neutral-200">@ 0.7366</span>
        </div>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5H24C28.1421 0.5 31.5 3.85786 31.5 8V24C31.5 28.1421 28.1421 31.5 24 31.5H8C3.85786 31.5 0.5 28.1421 0.5 24V8C0.5 3.85786 3.85786 0.5 8 0.5Z"
              fill="#202022"
            />
            <path
              d="M8 0.5H24C28.1421 0.5 31.5 3.85786 31.5 8V24C31.5 28.1421 28.1421 31.5 24 31.5H8C3.85786 31.5 0.5 28.1421 0.5 24V8C0.5 3.85786 3.85786 0.5 8 0.5Z"
              stroke="#2E2E2E"
            />
            <path
              d="M21.6372 14.0202C22.2465 14.1139 22.4809 14.8639 22.0356 15.3093L19.5747 17.7233L20.1606 21.1218C20.2544 21.7311 19.5981 22.1999 19.059 21.9186L16.0122 20.3014L12.9419 21.9186C12.4028 22.1999 11.7465 21.7311 11.8403 21.1218L12.4262 17.7233L9.96529 15.3093C9.51998 14.8639 9.75436 14.1139 10.3637 14.0202L13.809 13.528L15.3325 10.4108C15.6137 9.84831 16.4106 9.87175 16.6684 10.4108L18.2153 13.528L21.6372 14.0202ZM18.3559 17.3249L20.7231 15.028L17.4653 14.5593L16.0122 11.6061L14.5356 14.5593L11.2778 15.028L13.645 17.3249L13.0825 20.5593L16.0122 19.0358L18.9184 20.5593L18.3559 17.3249Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
