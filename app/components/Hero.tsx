"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image parallax: pushes slightly down, scales up as we scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  // Text drifts up gently and fades
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2400&q=85&auto=format&fit=crop')",
          }}
        />
        {/* Warm color wash to feel like paper light */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper-50/30 via-paper-100/25 to-paper-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-sage-900/25 via-transparent to-transparent" />
      </motion.div>

      {/* Vignette + fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-b from-transparent to-paper-50" />

      {/* Foreground content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6 text-ink-600"
          >
            Beerdigungsinstitut Hans Blasius · Saarlouis
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              type: "spring",
              bounce: 0,
              duration: 0.9,
            }}
            className="display text-[clamp(2.75rem,7.5vw,6.5rem)] font-light text-ink-950"
          >
            Ihre Unterstützung
            <br />
            <em className="not-italic text-ink-800">im Trauerfall.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-700"
          >
            Wir wissen, wie schwer der Verlust eines geliebten Menschen ist.
            Seit vielen Jahren stehen wir den Familien unserer Gemeinde mit
            Mitgefühl, Würde und Sensibilität zur Seite — bei jedem Schritt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="tel:+4968313503"
              className="glass-dark group flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] text-paper-50 transition active:scale-[0.97]"
            >
              <Phone size={16} />
              <span className="font-medium">Im Trauerfall: +49 6831 3503</span>
            </a>
            <a
              href="#im-sterbefall"
              className="glass group flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] text-ink-900 transition active:scale-[0.97]"
            >
              <span className="font-medium">Was jetzt zu tun ist</span>
              <ArrowDown
                size={16}
                className="text-sage-700 transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] uppercase tracking-[0.24em] text-ink-500"
        >
          scrollen
        </motion.div>
      </motion.div>
    </section>
  );
}
