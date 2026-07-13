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
import { currencyFlags } from "@/countriesFlags";
import type { CountriesData } from "@/App";
import { useState } from "react";

type Props = {
  countries: CountriesData[] | null;
};

export function SendCurrencyPickDropDownMenu({ countries }: Props) {
  const [sendselectedCurrency, setSendSelectedCurrency] = useState("USD");
  const [open, setOpen] = useState(false);

  const popularCurrencies = countries?.filter(
    ({ iso_code }) =>
      iso_code === "USD" || iso_code === "EUR" || iso_code === "GBP",
  );

  const handleSelectedCurrency = (iso_code: string) => {
    setSendSelectedCurrency(iso_code);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
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
              cursor: "pointer",
            }}
            variant="secondary"
          >
            <img
              className="w-5 h-5 bg-none"
              src={currencyFlags[sendselectedCurrency]}
              alt=""
            />
            <h5 className="text-[14px]">{sendselectedCurrency}</h5>
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
        className="w-[376px] p-2 bg-neutral-500 text-neutral-200 rounded-8"
        align="start"
      >
        <DropdownMenuGroup>
          <div className="relative">
            <input
              className="py-3 w-full pl-9 placeholder:text-neutral-200 rounded-6 border border-neutral-200"
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
          <span>{popularCurrencies?.length}</span>
        </div>
        <DropdownMenuSeparator className="bg-neutral-400" />
        <DropdownMenuGroup className="p-2 flex flex-col gap-5">
          {popularCurrencies?.map(({ iso_code, name }) => (
            <div
              onClick={() => handleSelectedCurrency(iso_code)}
              key={iso_code}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" src={currencyFlags[iso_code]} alt="" />
                <h4 className="text-[14px] text-neutral-50">{iso_code}</h4>
                <h5>{name}</h5>
              </div>
              {sendselectedCurrency === iso_code && (
                <div>
                  <img src={CheckIcon} alt="" />
                </div>
              )}
            </div>
          ))}
        </DropdownMenuGroup>
        <div className="flex p-2 justify-between items-center">
          <h4>OTHER CURRENCIES</h4>
          <span>{countries?.length}</span>
        </div>
        <DropdownMenuSeparator className="bg-neutral-400" />
        <DropdownMenuGroup>
          {countries?.map(({ iso_code, name }) => (
            <div
              onClick={() => handleSelectedCurrency(iso_code)}
              key={iso_code}
              className="flex justify-between items-center cursor-pointer py-3 px-2 hover:border rounded-4 hover:border-neutral-200"
            >
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" src={currencyFlags[iso_code]} alt="" />
                <h4 className="text-[14px] text-neutral-50">{iso_code}</h4>
                <h5>{name}</h5>
              </div>
              {sendselectedCurrency === iso_code && (
                <div>
                  <img src={CheckIcon} alt="" />
                </div>
              )}
            </div>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-neutral-400 mt-2" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
