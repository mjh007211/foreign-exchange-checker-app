import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import KSA from "../assets/flags/sa.webp";
import EGY from "../assets/flags/eg.webp";
import SearcgIcon from "../assets/icon-search.svg";
import CheckIcon from "../assets/icon-check.svg";

export function SendCurrencyPickDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            style={{
              backgroundColor: "#2e2e2e",
              color: "#fff",
              borderRadius: 8,
              display: "flex",
              padding: "10px",
              width: "96px",
              height: "40px",
            }}
            variant="secondary"
          >
            <img className="w-5 h-5 bg-none" src={KSA} alt="" />
            <h5 className="text-[14px]">KSA</h5>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.98838 4.01953H9.01182C9.4337 4.01953 9.64463 4.53516 9.33995 4.83984L6.33995 7.83984C6.15245 8.02734 5.84776 8.02734 5.66026 7.83984L2.66026 4.83984C2.35557 4.53516 2.56651 4.01953 2.98838 4.01953Z"
                fill="white"
              />
            </svg>
          </Button>
        }
      />
      <DropdownMenuContent
        className="w-[376] p-2 bg-neutral-500 text-neutral-200 rounded-8"
        align="start"
      >
        <DropdownMenuGroup>
          <div className="relative">
            <input
              className="py-3 pl-9 placeholder:text-neutral-200 rounded-6 border border-neutral-200"
              placeholder="Search currencies..."
              type="text"
            />
            <img
              className="absolute left-3 top-1/2 translate-y-[-50%]"
              src={SearcgIcon}
              alt=""
            />
          </div>
        </DropdownMenuGroup>
        <div className="flex p-2 justify-between items-center mt-2.5">
          <h4>POPULAR</h4>
          <span>3</span>
        </div>
        <DropdownMenuSeparator className="bg-neutral-400" />
        <DropdownMenuGroup className="p-2 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <img className="w-5 h-5" src={EGY} alt="" />
              <h4 className="text-[14px] text-neutral-50">EGY</h4>
              <h5>EGP</h5>
            </div>
            <div>
              <img src={CheckIcon} alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <img className="w-5 h-5" src={EGY} alt="" />
              <h4 className="text-[14px] text-neutral-50">EGY</h4>
              <h5>EGP</h5>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <img className="w-5 h-5" src={EGY} alt="" />
              <h4 className="text-[14px] text-neutral-50">EGY</h4>
              <h5>EGP</h5>
            </div>
          </div>
        </DropdownMenuGroup>
        <h4 className="mt-5">OTHER CURRENCIES</h4>
        <DropdownMenuSeparator className="bg-neutral-400 mt-2" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
