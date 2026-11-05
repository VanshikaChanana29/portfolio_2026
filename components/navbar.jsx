"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./theme-toggle";
import { bookingHref, brand, links } from "@/content/site-data";

const nav = [
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/" },
  { label: "Pricing", href: "/services/#pricing" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href) => pathname.replace(/[/]$/, "") === href.replace(/[/]$/, "");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const external = Boolean(links.booking);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <nav aria-label="Main" className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-ink">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-accent-solid text-sm font-bold text-white">
            {brand.initials}
          </span>
          <span className="sr-only sm:not-sr-only">{brand.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={`rounded-lg px-3 py-2 text-sm font-medium hover:text-ink ${isCurrent(item.href) ? "text-ink" : "text-muted"}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href={bookingHref}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="btn-primary hidden sm:inline-flex"
            data-track="book_call"
            data-track-label="nav"
          >
            Book a call
          </a>
          <button
            type="button"
            className="btn-ghost !px-3 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX aria-hidden="true" className="h-6 w-6" /> : <HiMenu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <ul className="container grid gap-1 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface-2">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 grid">
              <a
                href={bookingHref}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                onClick={() => setOpen(false)}
                className="btn-primary"
                data-track="book_call"
                data-track-label="mobile_nav"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
