"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconPhone } from "@/components/Icons";
import { headerNav, REQUEST_URL, type NavItem } from "@/lib/site";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsCurrent(item: NavItem, pathname: string, exact = false) {
  if (!item.href || item.href.startsWith("http")) return false;
  if (exact) return pathname === item.href;
  if (isCurrent(item.href, pathname)) return true;
  return (
    item.children?.some(
      (child) => child.href && !child.href.startsWith("http") && isCurrent(child.href, pathname),
    ) ?? false
  );
}

function NavAnchor({
  item,
  pathname,
  onNavigate,
  exact = false,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
  exact?: boolean;
}) {
  if (!item.href) {
    return (
      <button type="button">
        {item.label}
      </button>
    );
  }

  if (item.href.startsWith("http")) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={itemIsCurrent(item, pathname, exact) ? "page" : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

function NavLinks({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return items.map((item) => (
    <div key={item.href ?? item.label} className={item.children ? "nav-group" : undefined}>
      <NavAnchor item={item} pathname={pathname} onNavigate={onNavigate} />
      {item.children ? (
        <div className="nav-sub">
          {item.children.map((child) => (
            <NavAnchor
              key={child.href ?? child.label}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              exact
            />
          ))}
        </div>
      ) : null}
    </div>
  ));
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="logo-link" onClick={close}>
          <img src="/images/logo-mark.png" alt="" className="logo-mark" />
          <img src="/images/logo-wordmark.png" alt="Pooptopia" className="logo-wordmark" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          <NavLinks items={headerNav} pathname={pathname} />
        </nav>
        <div className="header-end">
          <a className="header-phone" href="tel:2623512147">
            <IconPhone size={26} />
            (262) 351-2147
          </a>
          <a className="nav-cta" href={REQUEST_URL}>
            Request Service
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          <NavLinks items={headerNav} pathname={pathname} onNavigate={close} />
          <a className="header-phone" href="tel:2623512147" onClick={close}>
            <IconPhone size={26} />
            (262) 351-2147
          </a>
          <a className="mobile-cta" href={REQUEST_URL}>
            Request Service
          </a>
        </nav>
      ) : null}
    </header>
  );
}
