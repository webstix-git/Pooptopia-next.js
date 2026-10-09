import type { ReactNode } from "react";

type IconProps = { size?: number };

function Svg({ size = 24, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconPeople({ size = 28 }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="8" r="3" />
      <path d="M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6M12.5 15.2c1-.8 2.4-1.2 4-1.2 3 0 5 2.7 5 6" />
    </Svg>
  );
}

export function IconCamera({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </Svg>
  );
}

export function IconDropCheck({ size = 28 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 14.5l1.8 1.8 3.4-3.6" />
    </Svg>
  );
}

export function IconBell({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </Svg>
  );
}

export function IconGrid({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </Svg>
  );
}

export function IconDrop({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </Svg>
  );
}

export function IconHeart({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </Svg>
  );
}

export function IconTruck({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.5" />
      <circle cx="17" cy="17.5" r="1.5" />
    </Svg>
  );
}

export function IconCalendar({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 15h2M14 15h2M8 18h2M14 18h2" />
    </Svg>
  );
}

export function IconCalendarCheck({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.5l2 2 4-4" />
    </Svg>
  );
}

export function IconSpark({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 15l.7 1.8L21.5 18l-1.8.7L19 20.5l-.7-1.8L16.5 18l1.8-.7z" />
    </Svg>
  );
}

export function IconPin({ size = 22 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
  );
}

export function IconPaw({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="7" cy="10" r="1.8" />
      <circle cx="11" cy="6.5" r="1.8" />
      <circle cx="15.5" cy="7" r="1.8" />
      <circle cx="18.5" cy="11" r="1.8" />
      <path d="M8.5 17.5c0-2.5 2-4.5 4.5-4.5s4 2 4 4-1.5 3-3.5 3-2-.8-3-.8-2 .8-2.5.3" />
    </Svg>
  );
}

export function IconWalker({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="5" r="2" />
      <path d="M10 22l1.5-7L9 12l1-4 4 2 2 3M14 22l-1-5" />
    </Svg>
  );
}

export function IconForm({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </Svg>
  );
}

export function IconHouse({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </Svg>
  );
}

export function IconCalendarPlain({ size = 26 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Svg>
  );
}

export function IconPhone({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M8 3h2.5l1.2 3.2-1.7 1a12 12 0 0 0 6.8 6.8l1-1.7L21 13.5V16a2 2 0 0 1-2.2 2A16 16 0 0 1 6 5.2 2 2 0 0 1 8 3z" />
    </Svg>
  );
}

export function IconArrowUp({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 19V6" />
      <path d="M6 11l6-6 6 6" />
    </Svg>
  );
}

export function IconSearch({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </Svg>
  );
}

export function IconMail({ size = 24 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Svg>
  );
}

function SocialBadge({ size = 40, children }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#1d3550" />
      {children}
    </svg>
  );
}

export function IconFacebook({ size = 40 }: IconProps) {
  return (
    <SocialBadge size={size}>
      <path
        fill="#ffffff"
        d="M22.4 16.2h-2.1c-.6 0-.9.4-.9 1.1v1.6h3l-.4 2.8h-2.6V30h-3.2v-8.3H14v-2.8h2.2v-2.1c0-2.4 1.4-4.2 4.2-4.2.9 0 1.8.1 2.4.2v2.4z"
      />
    </SocialBadge>
  );
}

export function IconInstagram({ size = 40 }: IconProps) {
  return (
    <SocialBadge size={size}>
      <rect x="12" y="12" width="16" height="16" rx="4.5" fill="none" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="20" cy="20" r="3.6" fill="none" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="25.4" cy="14.7" r="1.05" fill="#ffffff" />
    </SocialBadge>
  );
}

export function IconX({ size = 40 }: IconProps) {
  return (
    <SocialBadge size={size}>
      <path
        fill="#ffffff"
        d="M13.2 12.6h3.3l3.4 4.6 4-4.6h3.1l-5.6 6.4 6.1 8.4h-3.3l-3.8-5.2-4.5 5.2h-3.2l6.1-7-5.6-7.8z"
      />
    </SocialBadge>
  );
}

export function IconYelp({ size = 40 }: IconProps) {
  return (
    <SocialBadge size={size}>
      <g fill="#ffffff" transform="translate(20 20)">
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(45)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(90)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(135)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(180)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(225)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(270)" />
        <rect x="-1.35" y="-10" width="2.7" height="7.2" rx="1.35" transform="rotate(315)" />
      </g>
    </SocialBadge>
  );
}

export function IconYouTube({ size = 40 }: IconProps) {
  return (
    <SocialBadge size={size}>
      <rect x="11" y="14" width="18" height="12" rx="3.2" fill="#ffffff" />
      <path fill="#1d3550" d="M18 17.2v5.6l5.2-2.8z" />
    </SocialBadge>
  );
}
