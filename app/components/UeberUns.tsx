"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function UeberUns() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Big image parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <section
      ref={ref}
      id="ueber-uns"
      className="relative overflow-hidden bg-paper-100 py-32 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Sticky text column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-6 text-sage-700">Über uns</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[clamp(2.25rem,5vw,3.75rem)] text-ink-950"
            >
              Ein vertrauter Name
              <br />
              <em className="not-italic text-ink-700">in Saarlouis.</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 space-y-6 text-[16.5px] leading-relaxed text-ink-700"
            >
              <p>
                Seit vielen Jahren begleitet Beerdigungsinstitut Hans Blasius die
                Familien der Gemeinde in ihrer schwersten Zeit. Was uns
                auszeichnet, ist keine Broschüre — es ist der Umgang miteinander,
                Nacht wie Tag.
              </p>
              <p>
                Wir nehmen uns die Zeit, die es braucht. Wir hören zu, bevor wir
                planen. Und wir tragen die Last der Organisation, damit für Sie
                Raum bleibt für Abschied und Erinnerung.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ink-200/60 pt-8">
              <div>
                <div className="display text-4xl text-ink-950">24 / 7</div>
                <p className="mt-1 text-sm text-ink-600">
                  Für Sie erreichbar — auch nachts und am Wochenende.
                </p>
              </div>
              <div>
                <div className="display text-4xl text-ink-950">Persönlich</div>
                <p className="mt-1 text-sm text-ink-600">
                  Feste Ansprechpartner. Kein Callcenter, keine Warteschleifen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Moving image column */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-[3/4]">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0 will-change-transform"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=2000&q=80&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.35, type: "spring", bounce: 0.15, duration: 0.9 }}
              className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-6 md:bottom-8 md:left-8 md:right-auto md:max-w-sm md:p-7"
            >
              <p className="eyebrow mb-3 text-sage-700">Unsere Haltung</p>
              <p className="display text-[1.35rem] leading-snug text-ink-950 md:text-[1.5rem]">
                „Würde ist keine Leistung, die man buchen kann — sie ist unsere
                selbstverständliche Grundhaltung."
              </p>
            </motion.div>
          </div>

          {/* Small second image below - creates depth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 hidden aspect-[16/9] overflow-hidden rounded-[1.5rem] md:block"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=80&auto=format&fit=crop')",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
