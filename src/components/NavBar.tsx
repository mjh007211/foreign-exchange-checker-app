{
  /* <div className="w-5 h-5 px-1 py-[5px] text-[10px] text-lime-500 flex justify-center items-center rounded-full bg-lime-800">
                  10
                </div>
                <div className="w-5 h-5 px-1 py-[5px] text-[10px] text-lime-500 flex justify-center items-center rounded-full bg-lime-800">
                  8
                </div> */
}

type Props = {
  navText: string;
};

export default function NavBar({ navText }: Props) {
  return <div className="text-[16px] px-4 py-[10.5px]">{navText}</div>;
}
