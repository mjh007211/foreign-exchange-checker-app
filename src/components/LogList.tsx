type Props = {
  loggedSend: string;
  loggedReceive: string;
  loggedSendAmount: string;
  loggedReceiveAmount: number;
};

export default function LogList({
  loggedSend,
  loggedReceive,
  loggedSendAmount,
  loggedReceiveAmount,
}: Props) {
  return (
    <div className="flex justify-between  bg-neutral-600 rounded-10 py-3 px-3.5">
      <div className="flex items-center gap-10">
        <div>
          <span className="text-[14px] text-neutral-200">20M</span>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-neutral-100 text-[14px]">{loggedSend}</h4>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.10938 0.0878906C5.20312 -0.0292969 5.39062 -0.0292969 5.50781 0.0878906L10.4062 4.98633C10.5234 5.10352 10.5234 5.26758 10.4062 5.38477L5.50781 10.2832C5.39062 10.4004 5.20312 10.4004 5.10938 10.2832L4.64062 9.83789C4.52344 9.7207 4.52344 9.5332 4.64062 9.43945L8.27344 5.7832H0.28125C0.117188 5.7832 0 5.66602 0 5.50195V4.8457C0 4.70508 0.117188 4.56445 0.28125 4.56445H8.27344L4.64062 0.931641C4.52344 0.837891 4.52344 0.650391 4.64062 0.533203L5.10938 0.0878906Z"
              fill="#9D9D9D"
            />
          </svg>
          <h4 className="text-neutral-100 text-[14px]">{loggedReceive}</h4>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div>
          <span>{loggedSendAmount}</span>
        </div>
        <div>
          <span className="text-lime-500">
            {loggedReceiveAmount.toFixed(2)}
          </span>
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
              d="M20.875 11.875C21.0625 11.875 21.25 12.0625 21.25 12.25V12.625C21.25 12.8359 21.0625 13 20.875 13H20.5L19.9844 20.9453C19.9609 21.5312 19.4453 22 18.8594 22H13.1172C12.5313 22 12.0156 21.5312 11.9922 20.9453L11.5 13H11.125C10.9141 13 10.75 12.8359 10.75 12.625V12.25C10.75 12.0625 10.9141 11.875 11.125 11.875H13.0469L13.8438 10.5625C14.0313 10.2578 14.4531 10 14.8047 10H17.1719C17.5234 10 17.9453 10.2578 18.1328 10.5625L18.9297 11.875H20.875ZM14.8047 11.125L14.3594 11.875H17.6172L17.1719 11.125H14.8047ZM18.8594 20.875L19.3516 13H12.625L13.1172 20.875H18.8594Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
