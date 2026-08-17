"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, Users, PhoneCall } from "lucide-react";

const STEPS = [
  {
    icon: Stethoscope,
    number: "01",
    title: "Rufen Sie einen Arzt.",
    body:
      "Der Arzt stellt den Tod fest und stellt den Totenschein aus. In einem Krankenhaus, Alten- oder Pflegeheim geschieht dies automatisch — Sie müssen sich um nichts kümmern.",
  },
  {
    icon: Users,
    number: "02",
    title: "Verständigen Sie die engsten Angehörigen.",
    body:
      "Rufen Sie Familienmitglieder oder Vertraute an, die Sie beim Beratungsgespräch begleiten oder mitbestimmen sollen. Sie müssen diesen Weg nicht allein gehen.",
  },
  {
    icon: PhoneCall,
    number: "03",
    title: "Kontaktieren Sie uns.",
    body:
      "Wir sind rund um die Uhr für Sie erreichbar. Ab dem ersten Anruf übernehmen wir alle organisatorischen Schritte und geben Ihnen Raum für das Wesentliche.",
  },
];

export function ImSterbefall() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background image drifts opposite scroll direction (parallax)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      id="im-sterbefall"
      className="relative overflow-hidden bg-paper-50 pt-32"
    >
      {/* Section anchor image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] opacity-[0.15] will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=2000&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper-50" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-6 text-sage-700">Aktueller Trauerfall</p>
              <h2 className="display text-[clamp(2.25rem,5vw,3.75rem)] text-ink-950">
                Drei Schritte,
                <br />
                <em className="not-italic text-ink-700">wenn Sie uns brauchen.</em>
              </h2>
              <p className="mt-8 max-w-md text-[16px] leading-relaxed text-ink-700">
                Im Ausnahmezustand hilft Klarheit. Diese drei Schritte führen
                Sie sicher durch die ersten Stunden — den Rest übernehmen wir.
              </p>
              <a
                href="tel:+4968313503"
                className="glass-dark mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] text-paper-50 transition active:scale-[0.97]"
              >
                <PhoneCall size={16} />
                <span className="font-medium">Jetzt anrufen</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StepProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  number: string;
  title: string;
  body: string;
  index: number;
};

function Step({ icon: Icon, number, title, body, index }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.9, 1], [0, 1, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="glass-tinted relative overflow-hidden rounded-3xl p-8 md:p-10"
    >
      <div className="flex items-start gap-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-100/70 backdrop-blur">
          <Icon size={20} className="text-sage-800" />
        </div>
        <div className="flex-1">
          <div className="mb-3 flex items-baseline gap-3">
            <span className="eyebrow text-sage-700">Schritt {number}</span>
          </div>
          <h3 className="display text-[clamp(1.5rem,2.5vw,2rem)] text-ink-950">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-700">
            {body}
          </p>
        </div>
      </div>

      {/* Decorative faint number in the corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-6 select-none display text-[9rem] leading-none text-ink-950/[0.04]"
      >
        {number}
      </div>
    </motion.div>
  );
}
