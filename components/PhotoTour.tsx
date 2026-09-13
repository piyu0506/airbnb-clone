"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { photos, tourSections } from "@/data/listing";
import { Chevron, HeartIcon, ShareIcon } from "./Icons";
import type { TourPhoto } from "@/data/listing";

type Props = {
  saved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
  initialPhotoIndex?: number | null;
  closeOnEscape?: boolean;
};

function PhotoButton({
  photo,
  className,
  imgClass,
  onSelect,
}: {
  photo: TourPhoto;
  className: string;
  imgClass: string;
  onSelect: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(photo.globalIndex)}
      className={`overflow-hidden rounded-xl bg-[#F7F7F7] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className={imgClass} />
    </button>
  );
}

function SectionPhotos({
  images,
  layout,
  onSelect,
}: {
  images: TourPhoto[];
  layout?: "default" | "triple-mid";
  onSelect: (index: number) => void;
}) {
  if (layout === "triple-mid" && images.length >= 5) {
    return (
      <div className="flex flex-col gap-4">
        <PhotoButton
          photo={images[0]}
          onSelect={onSelect}
          className="w-full"
          imgClass="w-full max-h-[420px] object-cover block hover:scale-[1.015] transition-transform duration-300"
        />
        <div className="grid grid-cols-3 gap-4">
          {images.slice(1, 4).map((img) => (
            <PhotoButton
              key={img.globalIndex}
              photo={img}
              onSelect={onSelect}
              className="w-full"
              imgClass="w-full h-[180px] object-cover block hover:scale-[1.015] transition-transform duration-300"
            />
          ))}
        </div>
        <PhotoButton
          photo={images[4]}
          onSelect={onSelect}
          className="w-full"
          imgClass="w-full max-h-[420px] object-cover block hover:scale-[1.015] transition-transform duration-300"
        />
      </div>
    );
  }

  const elements: ReactNode[] = [];
  let idx = 0;
  let full = true;
  while (idx < images.length) {
    const remaining = images.length - idx;
    if (full || remaining === 1) {
      elements.push(
        <PhotoButton
          key={images[idx].globalIndex}
          photo={images[idx]}
          onSelect={onSelect}
          className="w-full"
          imgClass="w-full max-h-[520px] object-cover block hover:scale-[1.015] transition-transform duration-300"
        />
      );
      idx += 1;
    } else {
      const a = images[idx];
      const b = images[idx + 1];
      elements.push(
        <div key={`${a.globalIndex}-${b.globalIndex}`} className="grid grid-cols-2 gap-4">
          <PhotoButton
            photo={a}
            onSelect={onSelect}
            className="w-full"
            imgClass="w-full h-[280px] object-cover block hover:scale-[1.015] transition-transform duration-300"
          />
          <PhotoButton
            photo={b}
            onSelect={onSelect}
            className="w-full"
            imgClass="w-full h-[280px] object-cover block hover:scale-[1.015] transition-transform duration-300"
          />
        </div>
      );
      idx += 2;
    }
    full = !full;
  }
  return <div className="flex flex-col gap-4">{elements}</div>;
}

export default function PhotoTour({
  saved,
  onToggleSave,
  onClose,
  onSelectPhoto,
  initialPhotoIndex,
  closeOnEscape = true,
}: Props) {
  const [activeId, setActiveId] = useState(tourSections[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const skipObserver = useRef(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, closeOnEscape]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return;
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = vis?.target.getAttribute("data-section-id");
        if (id) setActiveId(id);
      },
      { root, rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] }
    );
    tourSections.forEach((s) => {
      const el = document.getElementById(`tour-section-${s.id}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (initialPhotoIndex == null) return;
    const section = tourSections.find((s) => s.images.some((img) => img.globalIndex === initialPhotoIndex));
    if (!section) return;
    const el = document.getElementById(`tour-section-${section.id}`);
    if (el) {
      skipObserver.current = true;
      setActiveId(section.id);
      el.scrollIntoView({ behavior: "auto", block: "start" });
      setTimeout(() => {
        skipObserver.current = false;
      }, 400);
    }
  }, [initialPhotoIndex]);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    skipObserver.current = true;
    document.getElementById(`tour-section-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      skipObserver.current = false;
    }, 600);
  };

  const share = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-[80] bg-white flex flex-col animate-slide-up">
      <header className="sticky top-0 z-[90] bg-white">
        <div className="relative h-[64px] flex items-center px-[24px]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="w-[36px] h-[36px] rounded-full hover:bg-[#F7F7F7] flex items-center justify-center"
          >
            <Chevron dir="left" className="w-4 h-4" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 text-[16px] font-semibold">Photo tour</div>
          <div className="ml-auto flex items-center gap-[4px]">
            <button
              type="button"
              onClick={share}
              aria-label="Share"
              className="w-[40px] h-[40px] rounded-full hover:bg-[#F7F7F7] flex items-center justify-center"
            >
              <ShareIcon />
            </button>
            <button
              type="button"
              onClick={onToggleSave}
              aria-label="Save"
              className="w-[40px] h-[40px] rounded-full hover:bg-[#F7F7F7] flex items-center justify-center"
            >
              <HeartIcon className={saved ? "fill-[#222]" : ""} />
            </button>
          </div>
        </div>
      </header>

      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-[1120px] mx-auto px-[24px] pt-[8px] pb-[80px]">
          <div className="flex flex-wrap gap-x-[12px] gap-y-[16px] mb-[48px]">
            {tourSections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="w-[104px] text-left"
              >
                <span
                  className={`block h-[70px] rounded-lg overflow-hidden border-2 ${
                    activeId === sec.id ? "border-black" : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sec.thumbSrc} alt="" className="w-full h-full object-cover" />
                </span>
                <span className="block mt-[6px] text-[13px] leading-[16px] text-[#717171]">{sec.name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-[64px]">
            {tourSections.map((sec) => (
              <section
                key={sec.id}
                id={`tour-section-${sec.id}`}
                data-section-id={sec.id}
                className="grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr] gap-[24px] md:gap-[48px] scroll-mt-[24px]"
              >
                <div className="md:sticky md:top-[24px] self-start">
                  <h2 className="text-[26px] leading-[30px] font-semibold">{sec.name}</h2>
                  {sec.subtext ? (
                    <p className="text-[14px] text-[#6A6A6A] mt-[8px] leading-[20px]">{sec.subtext}</p>
                  ) : null}
                </div>
                <SectionPhotos images={sec.images} layout={sec.layout} onSelect={onSelectPhoto} />
              </section>
            ))}
          </div>
        </div>
      </div>
      <span className="sr-only">{photos.length} photos</span>
    </div>
  );
}
