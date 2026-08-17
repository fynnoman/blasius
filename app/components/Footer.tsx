export function Footer() {
  return (
    <footer className="relative bg-ink-950 pb-10 pt-16 text-paper-200/70">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="display text-[13px] text-paper-50">B</span>
              </div>
              <div className="leading-tight">
                <div className="display text-[15px] text-paper-50">
                  Beerdigungsinstitut Hans Blasius GmbH
                </div>
                <div className="eyebrow text-[9px] text-paper-200/60">
                  Saarlouis
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed">
              Ihre Unterstützung im Trauerfall — persönlich, würdevoll und rund
              um die Uhr erreichbar.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4 text-paper-200/50">Kontakt</div>
            <ul className="space-y-2 text-[14px]">
              <li>Provinzialstraße 122</li>
              <li>66740 Saarlouis</li>
              <li>
                <a href="tel:+4968313503" className="hover:text-paper-50">
                  +49 6831 3503
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@beerdigungsinstitut-hans-blasius.de"
                  className="break-all hover:text-paper-50"
                >
                  info@beerdigungsinstitut-hans-blasius.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4 text-paper-200/50">Rechtliches</div>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="#" className="hover:text-paper-50">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-paper-50">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-paper-200/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Beerdigungsinstitut Hans Blasius GmbH.
            Alle Rechte vorbehalten.
          </span>
          <span>Mit Sorgfalt gestaltet.</span>
        </div>
      </div>
    </footer>
  );
}
