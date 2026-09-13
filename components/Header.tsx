"use client";

import { AirbnbLogo, GlobeIcon, MenuIcon, SearchIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#EBEBEB]">
      <div className="listing-shell h-[80px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-[6px] text-airbnb shrink-0">
          <AirbnbLogo className="w-[32px] h-[32px]" />
          <span className="text-[22px] font-extrabold tracking-tight hidden lg:block leading-none">
            airbnb
          </span>
        </a>

        <button
          type="button"
          className="hidden md:flex items-center h-[48px] pl-[8px] pr-[8px] rounded-full border border-[#DDDDDD] shadow-search hover:shadow-md transition-shadow bg-white"
        >
          <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#E8F5E9] mr-[10px]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M4 11.5L12 5l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
                stroke="#222"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[14px] font-semibold px-[8px] border-r border-[#DDDDDD] h-[24px] flex items-center">
            Anywhere
          </span>
          <span className="text-[14px] font-semibold px-[16px] border-r border-[#DDDDDD] h-[24px] flex items-center">
            Anytime
          </span>
          <span className="text-[14px] text-[#6A6A6A] font-normal px-[12px]">Add guests</span>
          <span className="ml-[4px] w-[32px] h-[32px] rounded-full bg-airbnb text-white flex items-center justify-center">
            <SearchIcon />
          </span>
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="hidden sm:block text-[14px] font-semibold px-[14px] py-[10px] rounded-full hover:bg-[#F7F7F7]"
          >
            Become a host
          </button>
          <button
            type="button"
            className="w-[40px] h-[40px] rounded-full hover:bg-[#F7F7F7] flex items-center justify-center"
            aria-label="Language"
          >
            <GlobeIcon />
          </button>
          <button
            type="button"
            className="flex items-center gap-[10px] h-[42px] pl-[14px] pr-[8px] rounded-full border border-[#DDDDDD] hover:shadow-search transition-shadow ml-[4px]"
          >
            <MenuIcon />
            <span className="w-[30px] h-[30px] rounded-full bg-[#717171] text-white flex items-center justify-center">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                <circle cx="16" cy="12" r="6" />
                <path d="M4 28c0-6 5.4-10 12-10s12 4 12 10" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
