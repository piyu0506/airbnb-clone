"use client";

import { useCallback, useEffect, useState } from "react";
import type { TourPhoto } from "@/data/listing";
import { CloseIcon, HeartIcon, NavChevron, ShareIcon } from "./Icons";

type Props = {
  images: TourPhoto[];
  currentIndex: number;
  saved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({
  images,
  currentIndex,
  saved,
  onToggleSave,
  onClose,
  onIndexChange,
}: Props) {
  const [animating, setAnimating] = useState(false);
  const current = images[currentIndex];

  const go = useCallback(
    (next: number) => {
      const len = images.length;
      const idx = ((next % len) + len) % len;
      setAnimating(true);
      onIndexChange(idx);
      window.setTimeout(() => setAnimating(false), 280);
    },
    [images.length, onIndexChange]
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(currentIndex + 1);
      else if (e.key === "ArrowLeft") go(currentIndex - 1);
      else if (e.key === "Escape") {
        e.stopPropagation();
        e.stopImmediatePropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey, true);
    };
  }, [currentIndex, go, onClose]);

  const share = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
  };

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade-in">
      <header className="h-[80px] px-[24px] flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-[8px] text-[14px] font-semibold px-[12px] py-[8px] rounded-lg hover:bg-[#F7F7F7] -ml-[12px]"
        >
          <CloseIcon />
          Close
        </button>
        <div className="text-[16px] font-medium">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-[4px]">
          <button
            type="button"
            onClick={share}
            className="flex items-center gap-[8px] text-[14px] font-semibold px-[12px] py-[8px] rounded-lg hover:bg-[#F7F7F7]"
          >
            <ShareIcon />
            Share
          </button>
          <button
            type="button"
            onClick={onToggleSave}
            className="flex items-center gap-[8px] text-[14px] font-semibold px-[12px] py-[8px] rounded-lg hover:bg-[#F7F7F7]"
          >
            <HeartIcon className={saved ? "fill-[#222]" : ""} />
            Save
          </button>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-between px-[24px] pb-[48px] min-h-0">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => go(currentIndex - 1)}
          className="w-[48px] h-[48px] rounded-full border border-[#DDDDDD] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-[1.04] active:scale-[0.96] transition flex items-center justify-center shrink-0"
        >
          <NavChevron dir="left" />
        </button>

        <div className="flex-1 max-w-[80%] max-h-full flex items-center justify-center px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className={`max-w-full max-h-[80vh] object-contain shadow-[0_24px_48px_rgba(0,0,0,0.12)] ${
              animating ? "animate-img-fade" : ""
            }`}
          />
        </div>

        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(currentIndex + 1)}
          className="w-[48px] h-[48px] rounded-full border border-[#DDDDDD] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-[1.04] active:scale-[0.96] transition flex items-center justify-center shrink-0"
        >
          <NavChevron dir="right" />
        </button>
      </div>
    </div>
  );
}
