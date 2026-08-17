"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Church,
  Flower2,
  MessageCircleHeart,
  ScrollText,
  Home,
} from "lucide-react";

const SERVICES = [
  {
    icon: FileText,
    title: "Formalitäten & Behörden",
    body:
      "Sterbeurkunde, Ab- und Ummeldungen, Renten- und Versicherungsangelegenheiten — wir übernehmen den Papierweg.",
  },
  {
    icon: Church,
    title: "Trauerfeier & Zeremonie",
    body:
      "Gestaltung der Feier in Kirche, Kapelle oder am Grab — würdevoll und ganz nach den Wünschen der Familie.",
  },
  {
    icon: Flower2,
    title: "Blumen- & Kranzschmuck",
    body:
      "Individueller Sarg- und Kranzschmuck. Wir arbeiten eng mit lokalen Floristen zusammen.",
  },
  {
    icon: MessageCircleHeart,
    title: "Persönliche Beratung",
    body:
      "In Ruhe, in unseren Räumen oder bei Ihnen zuhause. So lange Sie brauchen, ohne Termindruck.",
  },
  {
    icon: ScrollText,
    title: "Trauerdruckerei",
    body:
      "Trauerkarten, Sterbebilder, Danksagungen — persönlich gestaltet und schnell verfügbar.",
  },
  {
    icon: Home,
    title: "Vorsorgeberatung",
    body:
      "Für alle, die zu Lebzeiten Klarheit schaffen möchten — verbindlich, diskret und ohne Verpflichtung.",
  },
];

const BURIAL_TYPES = [
  {
    title: "Erdbestattung",
    body:
      "Die klassische Beisetzung in einem Sarg auf dem Friedhof — mit einer festen, sichtbaren Grabstätte für die Familie.",
    image:
      "https://images.unsplash.com/photo-1602599546533-c4ed7c1af3b7?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Feuerbestattung",
    body:
      "Die Beisetzung der Urne — auf dem Friedhof, im Ruheforst oder als See­bestattung. Vielfältig und persönlich.",
    image:
      "https://images.unsplash.com/photo-1618838614938-f76220e2b813?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Naturbestattung",
    body:
      "Beisetzung in Ruheforst oder auf der See — für alle, deren letzte Ruhe in der Natur ihren Platz finden soll.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Anonyme Bestattung",
    body:
      "Beisetzung ohne Namenstafel auf einer Gemeinschafts­fläche — schlicht, still und ohne Aufwand für Angehörige.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600&q=80&auto=format&fit=crop",
  },
];

export function Leistungen() {
  return (
    <>
      {/* LEISTUNGEN */}
      <section
        id="leistungen"
        className="relative overflow-hidden bg-paper-50 py-32 md:py-40"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6 text-sage-700">Leistungen</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[clamp(2.25rem,5vw,3.75rem)] text-ink-950"
            >
              Alles aus einer Hand.
              <br />
              <em className="not-italic text-ink-700">Vom ersten Gespräch bis zur Beisetzung.</em>
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* BESTATTUNGSARTEN */}
      <BestattungsartenBlock types={BURIAL_TYPES} />
    </>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-tinted group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-0.5"
    >
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-sage-100/70 backdrop-blur">
        <Icon size={18} className="text-sage-800" />
      </div>
      <h3 className="display text-[1.35rem] text-ink-950">{title}</h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{body}</p>
    </motion.div>
  );
}

function BestattungsartenBlock({
  types,
}: {
  types: {
    title: string;
    body: string;
    image: string;
  }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      id="bestattungsarten"
      className="relative overflow-hidden bg-paper-100 py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          style={{ y: headY }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="eyebrow mb-6 text-sage-700">Bestattungsarten</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.25rem,5vw,3.75rem)] text-ink-950"
          >
            Der Abschied,
            <br />
            <em className="not-italic text-ink-700">der zum Leben passt.</em>
          </motion.h2>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-700">
            Jeder Mensch ist einzigartig — jede Bestattung darf es auch sein.
            Wir stellen die vier häufigsten Formen kurz vor und beraten Sie
            gerne persönlich.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {types.map((t, i) => (
            <BurialCard key={t.title} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BurialCard({
  title,
  body,
  image,
  index,
}: {
  title: string;
  body: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[2rem]"
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />

      <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
        <div className="glass rounded-2xl p-6 md:p-7">
          <h3 className="display text-[1.75rem] text-ink-950">{title}</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
            {body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
