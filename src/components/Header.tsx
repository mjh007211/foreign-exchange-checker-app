import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center  px-300 h-[66px]">
      <img src={Logo} alt="" />

      <div className="flex gap-3.5 text-[14px] text-neutral-200">
        <div className="flex gap-3.5">
          <span>55</span>
          <h4>CURRENCIES</h4>
          <span>.</span>
        </div>
        <div className="flex gap-3.5">
          <h4>EOD </h4>
          <span>.</span>
        </div>
        <div className="flex gap-3.5">
          <h4>ECB DATA</h4>
        </div>
      </div>
    </header>
  );
}
