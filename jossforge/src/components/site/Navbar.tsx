import { useEffect, useState } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-black/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="size-10 bg-brand-fire grid place-items-center font-heading font-black text-xl italic text-brand-black transition-transform group-hover:rotate-3">
            JF
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter uppercase">
            Joss<span className="text-brand-fire">Forge</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-steel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-brand-fire after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cotizacion"
          className="hidden md:inline-flex items-center gap-2 bg-brand-fire px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-black hover:bg-foreground transition-colors"
        >
          Cotizar →
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
          className="md:hidden size-10 grid place-items-center border border-border"
        >
          <span className="font-heading font-bold">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-brand-black/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-brand-steel hover:text-brand-fire"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cotizacion"
              onClick={() => setOpen(false)}
              className="bg-brand-fire text-brand-black px-5 py-3 text-center font-bold"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
