"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Kontakt() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <section
      ref={ref}
      id="kontakt"
      className="relative overflow-hidden bg-ink-950 py-32 md:py-40"
    >
      {/* Background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519683384663-1a24bb62b03d?w=2400&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6 text-sage-400">Kontakt</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[clamp(2.25rem,5vw,3.75rem)] text-paper-50"
            >
              Wir sind für Sie da —
              <br />
              <em className="not-italic text-paper-200/80">
                jederzeit.
              </em>
            </motion.h2>
            <p className="mt-8 max-w-lg text-[16.5px] leading-relaxed text-paper-200/80">
              Rufen Sie uns an oder kommen Sie in Ruhe bei uns vorbei. Im
              Trauerfall reagieren wir sofort — und begleiten Sie so lange, wie
              Sie es brauchen.
            </p>
          </div>

          {/* Right - contact card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-dark rounded-[2rem] p-8 md:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <ContactItem
                  icon={Phone}
                  label="Telefon (24 h)"
                  value="+49 6831 3503"
                  href="tel:+4968313503"
                />
                <ContactItem
                  icon={Mail}
                  label="E-Mail"
                  value="info@beerdigungsinstitut-hans-blasius.de"
                  href="mailto:info@beerdigungsinstitut-hans-blasius.de"
                  small
                />
                <ContactItem
                  icon={MapPin}
                  label="Adresse"
                  value={"Provinzialstraße 122\n66740 Saarlouis"}
                  href="https://maps.google.com/?q=Provinzialstra%C3%9Fe+122+66740+Saarlouis"
                />
                <ContactItem
                  icon={Clock}
                  label="Erreichbarkeit"
                  value={"Rund um die Uhr\nfür den Trauerfall"}
                />
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <a
                  href="tel:+4968313503"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-paper-50 px-8 py-4 text-[15px] font-medium text-ink-950 transition active:scale-[0.98]"
                >
                  <Phone size={16} />
                  Jetzt anrufen · +49 6831 3503
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  small,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  small?: boolean;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group block"
    >
      <div className="mb-3 flex items-center gap-2 text-sage-400">
        <Icon size={14} />
        <span className="eyebrow text-[10px]">{label}</span>
      </div>
      <div
        className={`whitespace-pre-line text-paper-50 ${
          small ? "text-[14px] break-all" : "display text-[1.35rem] leading-tight"
        }`}
      >
        {value}
      </div>
    </Wrapper>
  );
}
