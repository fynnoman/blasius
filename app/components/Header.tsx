"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const NAV = [
  { href: "#im-sterbefall", label: "Im Sterbefall" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#bestattungsarten", label: "Bestattungsarten" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 200], [12, 28]);
  const bgAlpha = useTransform(scrollY, [0, 200], [0.35, 0.75]);
  const borderAlpha = useTransform(scrollY, [0, 200], [0.2, 0.5]);
  const backdropFilter = useMotionTemplate`blur(${blurPx}px) saturate(180%)`;
  const background = useMotionTemplate`rgba(251, 249, 245, ${bgAlpha})`;
  const borderBottomColor = useMotionTemplate`rgba(255, 255, 255, ${borderAlpha})`;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
    >
      <motion.div
        style={{
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          background,
          borderBottomColor,
        }}
        className="border-b"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-4 lg:px-10">
          {/* Wordmark */}
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full glass">
              <span className="display text-[15px] text-ink-900">B</span>
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="display text-[15px] text-ink-900">
                Beerdigungsinstitut Blasius
              </span>
              <span className="eyebrow text-[10px] text-ink-500">
                Saarlouis · seit vielen Jahren
              </span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm text-ink-700 transition-colors hover:text-ink-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+4968313503"
            className="group flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-ink-900 transition active:scale-[0.97]"
          >
            <Phone size={14} className="text-sage-700" />
            <span className="hidden font-medium sm:inline">+49 6831 3503</span>
            <span className="font-medium sm:hidden">Anrufen</span>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
