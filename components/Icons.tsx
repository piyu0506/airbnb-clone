import type { ReactElement, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AirbnbLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 1000" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M499.7 11.3c-36.4 0-70 14.3-93.2 39.8-23.6 25.8-36.6 61.3-36.6 99.7 0 74.2 43.3 165.4 129.8 271.5 86.5-106.1 129.8-197.3 129.8-271.5 0-38.4-13-73.9-36.6-99.7-23.2-25.5-56.8-39.8-93.2-39.8zm0 978.7C223.9 990 0 766.1 0 490.3 0 351.3 57.2 225.2 150.6 136.2c23.4 41.5 36.4 89.4 36.4 139.6 0 122.6-70.6 247.3-210 371.4 64.3 168.6 226.8 288.1 422.7 288.1s358.4-119.5 422.7-288.1c-139.4-124.1-210-248.8-210-371.4 0-50.2 13-98.1 36.4-139.6C942.8 225.2 1000 351.3 1000 490.3 1000 766.1 776.1 990 499.7 990zM499.7 332.6c-48.7 0-88.2 39.5-88.2 88.2s39.5 88.2 88.2 88.2 88.2-39.5 88.2-88.2-39.5-88.2-88.2-88.2z"
      />
    </svg>
  );
}

export const SearchIcon = (p: P) => (
  <svg viewBox="0 0 32 32" width="12" height="12" {...p}>
    <circle cx="14" cy="14" r="9" {...s} strokeWidth="4" />
    <path d="M21 21l7 7" {...s} strokeWidth="4" />
  </svg>
);

export const GlobeIcon = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...p}>
    <circle cx="8" cy="8" r="7" {...s} strokeWidth="1.2" />
    <path d="M1 8h14M8 1c2.2 2.4 3.3 4.8 3.3 7S10.2 12.6 8 15C5.8 12.6 4.7 10.2 4.7 8S5.8 3.4 8 1z" {...s} strokeWidth="1.2" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 32 32" width="16" height="16" {...p}>
    <path d="M4 10h24M4 16h24M4 22h24" {...s} />
  </svg>
);

export const HeartIcon = (p: P) => (
  <svg viewBox="0 0 32 32" width="16" height="16" {...p}>
    <path d="M16 28s-11-7.2-11-14.4C5 9 8.2 6.5 12 6.5c2.2 0 3.7 1 4 2 0.3-1 1.8-2 4-2 3.8 0 7 2.5 7 7.1C27 20.8 16 28 16 28z" {...s} />
  </svg>
);

export const ShareIcon = (p: P) => (
  <svg viewBox="0 0 32 32" width="16" height="16" {...p}>
    <circle cx="24" cy="8" r="3" {...s} />
    <circle cx="8" cy="16" r="3" {...s} />
    <circle cx="24" cy="24" r="3" {...s} />
    <path d="M11 17.5l10 5M21 9.5l-10 5" {...s} />
  </svg>
);

export const GridIcon = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...p}>
    <path d="M1 1h6v6H1zM9 1h6v6H9zM1 9h6v6H1zM9 9h6v6H9z" {...s} strokeWidth="1.4" />
  </svg>
);

export const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 12" width="10" height="10" className={className} fill="currentColor">
    <path d="M6 0l1.5 3.8H12L8.8 6.2 10.2 10 6 7.8 1.8 10 3.2 6.2 0 3.8h4.5z" />
  </svg>
);

export const FlagIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}>
    <path d="M5 21V4m0 0h11l-1.5 4L16 12H5" {...s} />
  </svg>
);

export const GiftIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <rect x="3" y="10" width="18" height="11" rx="1" {...s} />
    <path d="M12 10v11M3 14h18M12 10c0-3-1.5-5-3.5-5S6 8 7.5 10H12zm0 0c0-3 1.5-5 3.5-5S18 8 16.5 10H12z" {...s} />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg viewBox="0 0 16 16" width="16" height="16" {...p}>
    <path d="M3 6l5 5 5-5" {...s} />
  </svg>
);

export const Chevron = ({ dir = "left", ...p }: P & { dir?: "left" | "right" }) => (
  <svg viewBox="0 0 16 16" width="12" height="12" {...p}>
    {dir === "left" ? <path d="M10 3L5 8l5 5" {...s} /> : <path d="M6 3l5 5-5 5" {...s} />}
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg viewBox="0 0 16 16" width="14" height="14" {...p}>
    <path d="M8 3v10M3 8h10" {...s} />
  </svg>
);

export const MinusIcon = (p: P) => (
  <svg viewBox="0 0 16 16" width="14" height="14" {...p}>
    <path d="M3 8h10" {...s} />
  </svg>
);

export const HomePin = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white" {...p}>
    <path d="M4 11.5L12 5l8 6.5V20H4v-8.5z" />
    <path d="M10 20v-6h4v6" fill="#222" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" {...s} />
    <path d="M3 10h18M8 3v4M16 3v4" {...s} />
  </svg>
);

export const DoorIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...p}>
    <path d="M5 21V5l7-2v18M5 21h14V7l-7-2" {...s} />
    <circle cx="14.5" cy="13" r="0.8" fill="currentColor" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...p}>
    <path d="M12 3l8 3v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" {...s} />
  </svg>
);

export const BanIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}>
    <circle cx="12" cy="12" r="9" {...s} />
    <path d="M6 18L18 6" {...s} />
  </svg>
);

export const MsgIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}>
    <path d="M5 6h14v10H8l-3 3V6z" {...s} />
  </svg>
);

export function AmenityIcon({ name }: { name: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24" };
  switch (name) {
    case "kitchen":
      return (
        <svg {...common}>
          <path d="M6 3v8M6 11c0 3 2 4 2 7v3M10 3v8M10 11c0 3-2 4-2 7M16 3v18M16 8h4v5h-4" {...s} />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common}>
          <path d="M5 10a9 9 0 0114 0M8 13a5 5 0 018 0M12 17h.01" {...s} />
        </svg>
      );
    case "workspace":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="1" {...s} />
          <path d="M8 21h8M12 17v4" {...s} />
        </svg>
      );
    case "parking":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" {...s} />
          <path d="M9 17V7h5a3 3 0 010 6H9" {...s} />
        </svg>
      );
    case "pool":
      return (
        <svg {...common}>
          <path d="M4 16c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M4 20c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M8 6l3 3M14 4v5" {...s} />
        </svg>
      );
    case "hottub":
      return (
        <svg {...common}>
          <path d="M4 14h16v4a3 3 0 01-3 3H7a3 3 0 01-3-3v-4zM8 10c0-2 1.5-3 1.5-5M12 10c0-2 1.5-3 1.5-5M16 10c0-2 1.5-3 1.5-5" {...s} />
        </svg>
      );
    case "pets":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2" {...s} />
          <circle cx="16" cy="8" r="2" {...s} />
          <circle cx="6" cy="13" r="2" {...s} />
          <circle cx="18" cy="13" r="2" {...s} />
          <ellipse cx="12" cy="16" rx="3" ry="3.5" {...s} />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="14" height="10" rx="2" {...s} />
          <path d="M17 10l4-2v8l-4-2" {...s} />
        </svg>
      );
    case "co":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" {...s} />
          <path d="M9 12h.01M15 12h.01M8 15c1.2 1.2 6.8 1.2 8 0" {...s} />
        </svg>
      );
    case "smoke":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="7" {...s} />
          <path d="M9 13h6M10 6V4M14 6V4M12 6V3" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

export function HighlightIcon({ name }: { name: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24" };
  if (name === "outdoor")
    return (
      <svg {...common}>
        <path d="M4 20V10l8-6 8 6v10" {...s} />
        <path d="M9 20v-6h6v6" {...s} />
      </svg>
    );
  if (name === "cool")
    return (
      <svg {...common}>
        <path d="M12 3v18M5 8l14 8M5 16L19 8" {...s} />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="7" y="3" width="10" height="18" rx="1" {...s} />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function RatingIcon({ name }: { name: string }) {
  const common = { width: 32, height: 32, viewBox: "0 0 32 32" };
  const map: Record<string, ReactElement> = {
    clean: (
      <svg {...common}>
        <path d="M8 18c2-6 4-10 8-14 4 4 6 8 8 14v4H8v-4z" {...s} />
        <path d="M12 22v3M16 22v4M20 22v3" {...s} />
      </svg>
    ),
    accuracy: (
      <svg {...common}>
        <circle cx="16" cy="16" r="10" {...s} />
        <path d="M11 16l3 3 7-7" {...s} />
      </svg>
    ),
    checkin: (
      <svg {...common}>
        <circle cx="14" cy="16" r="6" {...s} />
        <path d="M18 16h6M20 13l4 3-4 3" {...s} />
      </svg>
    ),
    comm: (
      <svg {...common}>
        <path d="M8 9h16v10H12l-4 4V9z" {...s} />
      </svg>
    ),
    location: (
      <svg {...common}>
        <path d="M8 8h4v16H8zM16 8h8v3h-8zM16 14h8v3h-8zM16 20h6v4h-6z" {...s} />
      </svg>
    ),
    value: (
      <svg {...common}>
        <path d="M6 14l8-8 12 12-8 8L6 14z" {...s} />
        <circle cx="16" cy="10" r="1.5" {...s} />
      </svg>
    ),
  };
  return map[name];
}
