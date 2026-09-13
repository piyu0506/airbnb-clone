"use client";

import { useEffect, useMemo, useState } from "react";
import {
  amenities,
  cohosts,
  IMG,
  listing,
  mentionTags,
  nearby,
  photos,
  reviews,
} from "@/data/listing";
import {
  AmenityIcon,
  BanIcon,
  CalendarIcon,
  Chevron,
  ChevronDown,
  FlagIcon,
  GiftIcon,
  GridIcon,
  HeartIcon,
  HighlightIcon,
  MinusIcon,
  PlusIcon,
  RatingIcon,
  SearchIcon,
  ShareIcon,
  ShieldIcon,
  StarIcon,
} from "./Icons";

function Avatar({
  name,
  letter,
  bg,
  letterColor,
  size = 40,
}: {
  name: string;
  letter?: string;
  bg?: string;
  letterColor?: string;
  size?: number;
}) {
  const hue =
    name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 font-semibold"
      style={{
        width: size,
        height: size,
        background: bg || `hsl(${hue} 35% 70%)`,
        color: letterColor || "#fff",
        fontSize: size * 0.38,
      }}
    >
      {letter || name[0]}
    </span>
  );
}

function Month({
  name,
  year,
  startDow,
  days,
  range,
}: {
  name: string;
  year: number;
  startDow: number;
  days: number;
  range: [number, number] | null;
}) {
  const cells: (number | null)[] = [...Array(startDow).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  return (
    <div className="w-full">
      <div className="text-center text-[16px] font-semibold mb-[16px]">
        {name} {year}
      </div>
      <div className="grid grid-cols-7 text-center text-[12px] text-[#6A6A6A] mb-[8px]">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={`${d}-${i}`} className="h-[32px] leading-[32px]">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-[14px]">
        {cells.map((d, i) => {
          if (!d) return <div key={i} className="h-[42px]" />;
          const inRange = range && d >= range[0] && d <= range[1];
          const isStart = range && d === range[0];
          const isEnd = range && d === range[1];
          const mid = inRange && !isStart && !isEnd;
          return (
            <div key={i} className="h-[42px] flex items-center justify-center relative">
              {mid && <span className="absolute inset-y-[4px] inset-x-0 bg-[#F7F7F7]" />}
              {isStart && <span className="absolute inset-y-[4px] left-1/2 right-0 bg-[#F7F7F7]" />}
              {isEnd && <span className="absolute inset-y-[4px] right-1/2 left-0 bg-[#F7F7F7]" />}
              <span
                className={`relative z-[1] w-[34px] h-[34px] flex items-center justify-center rounded-full ${
                  isStart || isEnd ? "bg-[#222] text-white font-semibold" : ""
                } ${mid ? "font-medium" : ""}`}
              >
                {d}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ListingPage() {
  const [showSticky, setShowSticky] = useState(false);
  const [active, setActive] = useState("photos");
  const [saved, setSaved] = useState(false);
  const [guests, setGuests] = useState(listing.guests);
  const [openGuests, setOpenGuests] = useState(false);
  const [photoTour, setPhotoTour] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["photos", "amenities", "reviews", "location"];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.2, 0.6] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const gallery = useMemo(() => photos.slice(0, 5), []);

  return (
    <>
      {showSticky && (
        <div className="sticky top-[80px] z-30 bg-white border-b border-[#EBEBEB]">
          <div className="listing-shell h-[64px] flex items-center justify-between">
            <nav className="flex items-center gap-[24px] text-[14px] font-semibold">
              {[
                ["photos", "Photos"],
                ["amenities", "Amenities"],
                ["reviews", "Reviews"],
                ["location", "Location"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`py-[20px] border-b-2 ${
                    active === id ? "border-black" : "border-transparent text-[#222]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-[16px]">
              <div className="text-right leading-tight hidden sm:block">
                <div className="text-[16px] font-semibold">
                  {listing.price} <span className="font-normal text-[14px]">for {listing.nights} nights</span>
                </div>
                <div className="text-[12px] flex items-center justify-end gap-1">
                  <StarIcon /> {listing.rating} · {listing.reviews} reviews
                </div>
              </div>
              <button className="h-[40px] px-[20px] rounded-full bg-airbnb text-white text-[14px] font-semibold">
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="listing-shell pt-[24px] pb-[48px]">
        <section id="photos">
          <div className="flex items-start justify-between gap-4 mb-[20px]">
            <h1 className="text-[26px] leading-[30px] font-semibold tracking-[-0.02em]">
              {listing.title}
            </h1>
            <div className="flex items-center gap-[8px] shrink-0 mt-[4px]">
              <button className="flex items-center gap-[8px] text-[14px] font-semibold px-[12px] py-[8px] rounded-lg hover:bg-[#F7F7F7]">
                <ShareIcon />
                <span className="underline">Share</span>
              </button>
              <button
                onClick={() => setSaved((s) => !s)}
                className="flex items-center gap-[8px] text-[14px] font-semibold px-[12px] py-[8px] rounded-lg hover:bg-[#F7F7F7]"
              >
                <HeartIcon className={saved ? "fill-[#222]" : ""} />
                <span className="underline">Save</span>
              </button>
            </div>
          </div>

          <div className="photo-grid relative mb-[32px] group">
            {gallery.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setPhotoTour(true)}
                className="relative overflow-hidden bg-[#DDD] h-full w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover hover:brightness-90 transition" />
                {i === 4 && (
                  <span className="absolute bottom-[16px] right-[16px] h-[34px] px-[14px] rounded-lg bg-white border border-[#222] text-[14px] font-semibold flex items-center gap-[8px]">
                    <GridIcon /> Show all photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_372px] gap-[80px] items-start">
          <div>
            <h2 className="text-[22px] leading-[26px] font-semibold">{listing.locationLine}</h2>
            <p className="text-[16px] text-[#222] mt-[4px]">{listing.facts}</p>

            <div className="mt-[24px] border border-[#DDDDDD] rounded-[12px] px-[24px] py-[20px] flex items-center gap-[20px]">
              <div className="flex items-center gap-[8px] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.laurelL} alt="" className="h-[40px] w-auto" />
                <div className="text-center leading-[18px]">
                  <div className="text-[14px] font-bold">Guest</div>
                  <div className="text-[14px] font-bold">favourite</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.laurelR} alt="" className="h-[40px] w-auto" />
              </div>
              <p className="text-[14px] font-semibold leading-[18px] max-w-[220px]">
                One of the most loved homes on Airbnb, according to guests
              </p>
              <div className="ml-auto text-center px-[12px] border-l border-[#DDDDDD]">
                <div className="text-[18px] font-semibold">{listing.rating}</div>
                <div className="text-[11px] tracking-tight">★★★★★</div>
              </div>
              <div className="text-center pl-[12px] border-l border-[#DDDDDD] min-w-[72px]">
                <div className="text-[18px] font-semibold underline">{listing.reviews}</div>
                <div className="text-[12px] underline">Reviews</div>
              </div>
            </div>

            <div className="mt-[24px] pt-[8px] pb-[24px] border-b border-[#EBEBEB] flex items-center gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#1F4A32] text-white flex items-center justify-center text-[6px] font-bold leading-[8px] text-center">
                MIRASHYA
                <br />
                HOMES
              </div>
              <div>
                <div className="text-[16px] font-semibold">Hosted by Mirashya Homes</div>
                <div className="text-[14px] text-[#6A6A6A]">2 years hosting</div>
              </div>
            </div>

            <div className="py-[8px] border-b border-[#EBEBEB]">
              {[
                ["outdoor", "Outdoor entertainment", "The pool and al fresco dining are great for summer trips."],
                ["cool", "Designed for staying cool", "Beat the heat with the A/C and ceiling fan."],
                ["checkin", "Self check-in", "You can check in with the building staff."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-[16px] py-[18px]">
                  <HighlightIcon name={icon} />
                  <div>
                    <div className="text-[16px] font-semibold">{title}</div>
                    <div className="text-[14px] text-[#6A6A6A]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <section className="pt-[40px] pb-[32px] border-b border-[#EBEBEB]">
              <h2 className="text-[22px] font-semibold mb-[20px]">Where you&apos;ll sleep</h2>
              <div className="grid grid-cols-2 gap-[16px] max-w-[520px]">
                {[
                  { img: IMG.bedroom, t: "Bedroom", s: "1 double bed" },
                  { img: IMG.livingRoom, t: "Living room", s: "1 sofa" },
                ].map((r) => (
                  <div key={r.t}>
                    <div className="rounded-[12px] overflow-hidden h-[148px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.img} alt={r.t} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-[10px] text-[16px] font-semibold">{r.t}</div>
                    <div className="text-[14px] text-[#6A6A6A]">{r.s}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="amenities" className="pt-[40px] pb-[40px] border-b border-[#EBEBEB]">
              <h2 className="text-[22px] font-semibold mb-[20px]">What this place offers</h2>
              <div className="grid grid-cols-2 gap-y-[18px] gap-x-[24px] text-[16px]">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-[16px]">
                    <AmenityIcon name={a.icon} />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
              <button className="mt-[28px] h-[48px] px-[24px] rounded-lg border border-[#222] text-[16px] font-semibold hover:bg-[#F7F7F7]">
                Show all 50 amenities
              </button>
            </section>

            <section className="pt-[40px] pb-[8px]">
              <h2 className="text-[22px] font-semibold">5 nights in {listing.city}</h2>
              <p className="text-[14px] text-[#6A6A6A] mt-[4px]">
                {listing.checkInLabel} - {listing.checkOutLabel}
              </p>
              <div className="mt-[24px] flex gap-[24px] items-start">
                <button className="mt-[6px] text-[#6A6A6A]" aria-label="Previous">
                  <Chevron dir="left" />
                </button>
                <div className="grid grid-cols-2 gap-[48px] flex-1">
                  <Month name="October" year={2026} startDow={4} days={31} range={[18, 23]} />
                  <Month name="November" year={2026} startDow={0} days={30} range={null} />
                </div>
                <button className="mt-[6px]" aria-label="Next">
                  <Chevron dir="right" />
                </button>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-[108px] pb-[40px]">
            <div className="border border-[#E5E5E5] rounded-[12px] p-[16px] mb-[16px] flex items-center gap-[12px] bg-white">
              <span className="text-[#00A699]">
                <GiftIcon />
              </span>
              <div className="flex-1 text-[14px] leading-[18px]">
                <div className="font-semibold">Get 10% off your next stay.</div>
                <button className="underline text-[14px]">Terms apply</button>
              </div>
              <button className="h-[34px] px-[14px] rounded-lg border border-[#222] text-[14px] font-semibold">
                Claim
              </button>
            </div>

            <div className="border border-[#DDDDDD] rounded-[12px] p-[24px] shadow-card bg-white">
              <div className="text-[22px] font-semibold mb-[24px]">
                {listing.price} <span className="text-[16px] font-normal">for {listing.nights} nights</span>
              </div>
              <div className="border border-[#B0B0B0] rounded-[8px] overflow-hidden text-[10px] font-semibold tracking-[0.04em]">
                <div className="grid grid-cols-2">
                  <div className="p-[12px] border-r border-[#B0B0B0]">
                    <div>CHECK-IN</div>
                    <div className="text-[14px] font-normal tracking-normal mt-[2px]">{listing.checkIn}</div>
                  </div>
                  <div className="p-[12px]">
                    <div>CHECKOUT</div>
                    <div className="text-[14px] font-normal tracking-normal mt-[2px]">{listing.checkOut}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenGuests((v) => !v)}
                  className="w-full p-[12px] border-t border-[#B0B0B0] flex items-center justify-between text-left"
                >
                  <div>
                    <div>GUESTS</div>
                    <div className="text-[14px] font-normal tracking-normal mt-[2px]">{guests} guests</div>
                  </div>
                  <ChevronDown />
                </button>
              </div>
              {openGuests && (
                <div className="border border-[#DDDDDD] rounded-[8px] mt-2 p-4 flex items-center justify-between">
                  <span className="text-[14px] font-semibold">Adults</span>
                  <div className="flex items-center gap-3">
                    <button
                      className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    >
                      <MinusIcon />
                    </button>
                    <span>{guests}</span>
                    <button
                      className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center"
                      onClick={() => setGuests((g) => Math.min(3, g + 1))}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              )}
              <p className="text-center text-[14px] mt-[16px]">
                <span className="text-airbnb underline">Free cancellation before {listing.cancelBy}</span>
              </p>
              <button className="mt-[16px] w-full h-[48px] rounded-lg bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white text-[16px] font-semibold">
                Reserve
              </button>
              <p className="text-center text-[14px] text-[#6A6A6A] mt-[12px]">You won&apos;t be charged yet</p>
            </div>

            <button className="mt-[24px] w-full flex items-center justify-center gap-[8px] text-[14px] text-[#6A6A6A] underline">
              <FlagIcon /> Report this listing
            </button>
          </aside>
        </div>

        <section id="reviews" className="mt-[24px] pt-[48px] border-t border-[#EBEBEB]">
          <div className="flex items-center justify-center gap-[8px] mb-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.laurelL} alt="" className="h-[58px]" />
            <span className="text-[64px] font-semibold tracking-tight leading-none">{listing.rating}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.laurelR} alt="" className="h-[58px]" />
          </div>
          <h2 className="text-center text-[22px] font-semibold">Guest favourite</h2>
          <p className="text-center text-[16px] text-[#6A6A6A] max-w-[360px] mx-auto mt-[8px] leading-[20px]">
            This home is a guest favourite based on ratings, reviews and reliability
          </p>
          <p className="text-center mt-[10px]">
            <button className="text-[14px] underline font-semibold">How reviews work</button>
          </p>

          <div className="mt-[40px] grid grid-cols-7 gap-[12px] items-start text-[14px]">
            <div className="pr-[12px] border-r border-[#EBEBEB]">
              <div className="font-semibold mb-[8px]">Overall rating</div>
              {[
                [5, 92],
                [4, 14],
                [3, 2],
                [2, 1],
                [1, 1],
              ].map(([label, w]) => (
                <div key={label} className="flex items-center gap-[8px] text-[12px] h-[14px]">
                  <span className="w-[8px]">{label}</span>
                  <span className="flex-1 h-[4px] bg-[#EBEBEB] rounded-full overflow-hidden">
                    <span className="block h-full bg-[#222]" style={{ width: `${w}%` }} />
                  </span>
                </div>
              ))}
            </div>
            {[
              ["Cleanliness", "5.0", "clean"],
              ["Accuracy", "5.0", "accuracy"],
              ["Check-in", "5.0", "checkin"],
              ["Communication", "5.0", "comm"],
              ["Location", "4.8", "location"],
              ["Value", "4.8", "value"],
            ].map(([label, score, icon], i) => (
              <div key={label} className={`px-[12px] ${i < 5 ? "border-r border-[#EBEBEB]" : ""}`}>
                <div className="font-semibold">{label}</div>
                <div className="font-semibold mt-[4px]">{score}</div>
                <div className="mt-[16px] text-[#222]">
                  <RatingIcon name={icon} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[24px] flex flex-wrap gap-[8px]">
            {mentionTags.map((t) => (
              <span
                key={t.label}
                className="h-[32px] px-[12px] rounded-full text-[13px] font-medium flex items-center gap-[6px]"
                style={{ background: t.bg }}
              >
                {t.label} {t.count}
              </span>
            ))}
            <span className="h-[32px] w-[32px] rounded-md border border-[#DDD] flex items-center justify-center">
              <FlagIcon />
            </span>
          </div>

          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[32px]">
            {reviews.map((r) => (
              <article key={r.name}>
                <div className="flex items-center gap-[12px]">
                  <Avatar name={r.name} letter={r.letter} bg={r.bg} letterColor={r.letterColor} size={48} />
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-[14px] text-[#6A6A6A]">{r.tenure}</div>
                  </div>
                </div>
                <div className="mt-[10px] text-[12px] flex items-center gap-[6px]">
                  <span>★★★★★</span>
                  <span className="text-[#6A6A6A]">· {r.when}</span>
                </div>
                <p className="mt-[8px] text-[16px] leading-[24px]">{r.text}</p>
                {r.long && (
                  <button className="mt-[8px] font-semibold underline text-[16px]">Show more</button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="mt-[48px] pt-[48px] border-t border-[#EBEBEB]">
          <h2 className="text-[22px] font-semibold">Where you&apos;ll be</h2>
          <p className="text-[16px] mt-[8px]">{listing.mapLine}</p>
          <div className="relative mt-[24px] h-[380px] rounded-[12px] overflow-hidden">
            <svg viewBox="0 0 1120 380" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E4EDE3" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1120" height="380" fill="#E7F0DC" />
              <polygon points="0,0 470,0 620,380 0,380" fill="#B9D4E5" />
              <rect width="1120" height="380" fill="url(#grid)" />
              <circle cx="430" cy="120" r="48" fill="#C5DDB0" />
              <circle cx="760" cy="210" r="70" fill="#C5DDB0" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#222] flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M4 11.5L12 5l8 6.5V20H4v-8.5z" />
              </svg>
            </div>
            <button className="absolute top-[16px] left-[16px] w-[34px] h-[34px] rounded-full bg-white shadow flex items-center justify-center">
              <SearchIcon className="w-3 h-3" />
            </button>
            <div className="absolute top-[16px] right-[16px] rounded-[8px] overflow-hidden shadow bg-white">
              <button className="w-[34px] h-[34px] flex items-center justify-center border-b border-[#EEE]">
                <PlusIcon />
              </button>
              <button className="w-[34px] h-[34px] flex items-center justify-center">
                <MinusIcon />
              </button>
            </div>
          </div>
          <p className="text-[14px] mt-[12px]">Exact location will be provided after booking.</p>
          <h3 className="text-[16px] font-semibold mt-[24px]">Neighbourhood highlights</h3>
          <p className="text-[16px] mt-[8px] max-w-[720px]">
            Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and
            popular attractions.
          </p>
          <button className="mt-[12px] font-semibold underline text-[16px]">
            Show more <span className="no-underline">›</span>
          </button>
        </section>

        <section className="mt-[48px] pt-[48px] border-t border-[#EBEBEB]">
          <h2 className="text-[22px] font-semibold mb-[24px]">Meet your host</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-[48px]">
            <div className="rounded-[24px] shadow-host p-[24px] flex gap-[16px] items-center">
              <div className="text-center flex-1">
                <div className="w-[104px] h-[104px] mx-auto rounded-full bg-[#1F4A32] text-white flex items-center justify-center text-[11px] font-bold leading-[14px] tracking-wide text-center px-2">
                  MIRASHYA
                  <br />
                  HOMES
                </div>
                <div className="text-[28px] font-semibold mt-[12px] leading-tight">Mirashya Homes</div>
                <div className="text-[14px] text-[#6A6A6A]">Host</div>
              </div>
              <div className="text-[14px] space-y-[12px] pr-[8px]">
                <div>
                  <div className="text-[22px] font-semibold leading-none">1,463</div>
                  <div className="underline text-[12px]">Reviews</div>
                </div>
                <div className="border-t border-[#EBEBEB] pt-[12px]">
                  <div className="text-[22px] font-semibold leading-none">4.68 ★</div>
                  <div className="text-[12px]">Rating</div>
                </div>
                <div className="border-t border-[#EBEBEB] pt-[12px]">
                  <div className="text-[22px] font-semibold leading-none">2</div>
                  <div className="text-[12px]">Years hosting</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[16px] font-semibold mb-[16px]">Co-Hosts</div>
              <div className="grid grid-cols-3 gap-y-[16px] gap-x-[12px]">
                {cohosts.map((c) => (
                  <div key={c.name} className="flex items-center gap-[10px]">
                    <Avatar name={c.name} letter={c.letter} bg={c.color} letterColor={c.letterColor} size={40} />
                    <span className="text-[14px]">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[32px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-[48px]">
            <div className="text-[16px] space-y-[14px]">
              <div className="flex items-center gap-[12px]">
                <span>🎈</span> Born in the 80s
              </div>
              <div className="flex items-center gap-[12px]">
                <span>🎓</span> Where I went to school: NIOMAR GOA
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold">Host details</h3>
              <p className="text-[16px] mt-[8px] leading-[24px]">
                Response rate: 100%
                <br />
                Responds within an hour
              </p>
              <button className="mt-[20px] h-[48px] px-[24px] rounded-lg bg-[#F0F0F0] font-semibold text-[16px]">
                Message host
              </button>
              <p className="mt-[20px] text-[12px] text-[#6A6A6A] flex gap-[8px] max-w-[420px]">
                <BanIcon /> To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[48px] pt-[48px] border-t border-[#EBEBEB]">
          <h2 className="text-[22px] font-semibold mb-[28px]">Things to know</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] text-[16px]">
            <div>
              <CalendarIcon />
              <div className="font-semibold mt-[12px] mb-[8px]">Cancellation policy</div>
              <p>
                Free cancellation before {listing.cancelBy}. Cancel before check-in on 18 October for a partial refund.
              </p>
              <p className="mt-[8px]">Review this host&apos;s full policy for details.</p>
              <button className="mt-[12px] font-semibold underline">Learn more</button>
            </div>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" strokeLinecap="round" />
              </svg>
              <div className="font-semibold mt-[12px] mb-[8px]">House rules</div>
              <p>Check-in after 2:00 pm</p>
              <p>Checkout before 11:00 am</p>
              <p>3 guests maximum</p>
              <button className="mt-[12px] font-semibold underline">Learn more</button>
            </div>
            <div>
              <ShieldIcon />
              <div className="font-semibold mt-[12px] mb-[8px]">Safety &amp; property</div>
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
              <button className="mt-[12px] font-semibold underline">Learn more</button>
            </div>
          </div>
        </section>

        <section className="mt-[48px] pt-[48px] border-t border-[#EBEBEB] pb-[24px]">
          <div className="flex items-center justify-between mb-[20px]">
            <h2 className="text-[22px] font-semibold">More stays nearby</h2>
            <div className="flex items-center gap-[10px] text-[14px]">
              <span>1 / 2</span>
              <button className="w-[32px] h-[32px] rounded-full border border-[#DDD] flex items-center justify-center">
                <Chevron dir="left" />
              </button>
              <button className="w-[32px] h-[32px] rounded-full border border-[#222] flex items-center justify-center">
                <Chevron dir="right" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-[16px]">
            {nearby.map((n) => (
              <article key={n.title}>
                <div className="rounded-[12px] overflow-hidden h-[176px] bg-[#EEE]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-[8px] text-[15px] font-semibold leading-[20px] line-clamp-2">{n.title}</div>
                <div className="text-[14px] mt-[2px]">
                  {n.price} · <StarIcon className="inline mb-[2px]" /> {n.rating}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {photoTour && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="listing-shell py-[20px]">
            <button onClick={() => setPhotoTour(false)} className="text-[14px] font-semibold px-3 py-2 rounded-lg hover:bg-[#F7F7F7]">
              ✕ Close
            </button>
            <h2 className="text-[22px] font-semibold mt-4 mb-6">Photo tour</h2>
            <div className="grid grid-cols-2 gap-3">
              {photos.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p.src} src={p.src} alt={p.alt} className="w-full h-[280px] object-cover rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
