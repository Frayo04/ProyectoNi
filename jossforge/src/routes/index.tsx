import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-welder.jpg";
import gateImg from "@/assets/service-gate.jpg";
import stairsImg from "@/assets/service-stairs.jpg";
import weldingImg from "@/assets/service-welding.jpg";
import railingImg from "@/assets/gallery-railing.jpg";
import structureImg from "@/assets/gallery-structure.jpg";
import gateGalleryImg from "@/assets/gallery-gate.jpg";
import canopyImg from "@/assets/gallery-canopy.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const stats = [
  { value: "+500", label: "Proyectos realizados" },
  { value: "+10", label: "Años de maestría" },
  { value: "100%", label: "Acero certificado" },
  { value: "24/7", label: "Soporte técnico" },
];

const services = [
  { n: "01", title: "Portones Elite", desc: "Automatización y diseño personalizado en acero corten y negro mate.", img: gateImg },
  { n: "02", title: "Escaleras Loft", desc: "Estructuras voladas y diseños industriales para espacios modernos.", img: stairsImg },
  { n: "03", title: "Soldadura Pro", desc: "TIG/MIG especializada para proyectos industriales certificados.", img: weldingImg },
  { n: "04", title: "Barandas Premium", desc: "Diseños minimalistas en hierro forjado y acero inoxidable.", img: railingImg },
  { n: "05", title: "Marquesinas", desc: "Cubiertas estructurales para entradas residenciales y comerciales.", img: canopyImg },
  { n: "06", title: "Estructuras Industriales", desc: "Naves, soportes y esqueletos metálicos de gran envergadura.", img: structureImg },
];

type Cat = "Todos" | "Portones" | "Escaleras" | "Barandas" | "Estructuras" | "Marquesinas";
const catalog: { title: string; cat: Exclude<Cat, "Todos">; img: string; tag: string }[] = [
  { title: "Portón residencial automatizado", cat: "Portones", img: gateImg, tag: "Acero negro mate" },
  { title: "Escalera flotante industrial", cat: "Escaleras", img: stairsImg, tag: "Acero & vidrio" },
  { title: "Baranda minimalista de balcón", cat: "Barandas", img: railingImg, tag: "Hierro forjado" },
  { title: "Estructura nave comercial", cat: "Estructuras", img: structureImg, tag: "Acero certificado" },
  { title: "Portón de finca premium", cat: "Portones", img: gateGalleryImg, tag: "Diseño exclusivo" },
  { title: "Marquesina arquitectónica", cat: "Marquesinas", img: canopyImg, tag: "Estructura volada" },
];

const testimonials = [
  { name: "Marcus Bell", role: "Arquitecto, Filadelfia", text: "JossForge entregó una escalera flotante que se convirtió en la pieza central del proyecto. Precisión absoluta." },
  { name: "Laura Hines", role: "Constructora, Pittsburgh", text: "El portón automatizado lleva tres años funcionando sin un solo ajuste. Acabados de showroom." },
  { name: "Daniel Ortiz", role: "Director industrial", text: "Soldadura impecable y plazos cumplidos. El equipo entiende lo que significa una obra crítica." },
];

function LandingPage() {
  const [cat, setCat] = useState<Cat>("Todos");
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "Portones", desc: "" });
  const [sent, setSent] = useState(false);

  const filtered = useMemo(
    () => (cat === "Todos" ? catalog : catalog.filter((c) => c.cat === cat)),
    [cat],
  );

  const cats: Cat[] = ["Todos", "Portones", "Escaleras", "Barandas", "Estructuras", "Marquesinas"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="top" className="min-h-screen bg-brand-black text-foreground font-body overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60 pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-40 -right-40 size-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.21 40 / 0.5), transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-fire/10 border border-brand-fire/30 text-brand-fire text-[10px] font-bold tracking-[0.25em] uppercase mb-8">
              <span className="size-1.5 bg-brand-fire rounded-full animate-pulse" />
              Pensilvania · USA · Desde 2014
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.88] tracking-tighter mb-8">
              Diseño, fuerza
              <br />
              <span className="text-fire-gradient">y precisión</span>
              <br />
              <span className="text-brand-steel">en cada</span> proyecto.
            </h1>

            <p className="text-brand-steel text-lg max-w-xl mb-10 leading-relaxed">
              Elevamos la herrería tradicional al lujo industrial. Estructuras
              metálicas de alta gama para residencias y espacios comerciales
              exigentes — fabricadas pieza por pieza con soldadura certificada.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="group relative overflow-hidden px-8 py-4 bg-foreground text-brand-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-fire hover:text-foreground transition-colors"
              >
                Ver Catálogo →
              </a>
              <a
                href="#cotizacion"
                className="px-8 py-4 border border-border font-bold uppercase tracking-[0.2em] text-xs hover:border-brand-fire hover:text-brand-fire transition-colors"
              >
                Solicitar Cotización
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-border animate-shimmer">
              <img
                src={heroImg}
                alt="Soldador profesional trabajando en estructura metálica con chispas"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-fire p-6 lg:p-8 hidden md:block shadow-fire">
              <div className="text-4xl lg:text-5xl font-heading font-black text-brand-black leading-none">+10</div>
              <div className="text-[10px] mt-2 font-bold uppercase tracking-[0.2em] text-brand-black/80">Años de maestría</div>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-brand-graphite/90 backdrop-blur border border-border px-4 py-2">
              <span className="size-2 bg-brand-fire rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-steel">En taller · Now</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* STATS */}
      <section className="bg-brand-graphite border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-6 ${i !== 0 ? "md:border-l border-border" : ""} ${i % 2 !== 0 ? "border-l md:border-l border-border" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-heading font-black text-foreground">{s.value}</div>
              <div className="text-[10px] text-brand-steel uppercase tracking-[0.25em] mt-2 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Lo que forjamos</div>
              <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                Servicios <span className="text-brand-steel">especializados</span>
              </h2>
            </div>
            <p className="text-brand-steel max-w-sm text-sm leading-relaxed">
              Desde puertas residenciales automatizadas hasta estructuras industriales
              de gran envergadura — cada proyecto, una pieza única.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative bg-brand-graphite p-8 lg:p-10 h-full transition-all duration-500 hover:bg-brand-fire">
                <div className="flex items-center justify-between mb-8">
                  <div className="size-12 border border-border grid place-items-center text-xs font-bold tracking-widest group-hover:border-brand-black group-hover:bg-brand-black/10">
                    {s.n}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-steel group-hover:text-brand-black/70">
                    Servicio
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold uppercase mb-3 tracking-tight">{s.title}</h3>
                <p className="text-brand-steel group-hover:text-brand-black/80 text-sm leading-relaxed mb-8">{s.desc}</p>

                <div className="aspect-video overflow-hidden border border-border group-hover:border-brand-black/20 mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                <button className="text-[10px] font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 text-brand-fire group-hover:text-brand-black">
                  Ver más <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalogo" className="py-24 md:py-32 bg-brand-graphite border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Catálogo profesional</div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-10">
              Proyectos <span className="text-brand-steel">selectos</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-12">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                    cat === c
                      ? "bg-brand-fire border-brand-fire text-brand-black"
                      : "border-border text-brand-steel hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group relative aspect-[4/5] overflow-hidden border border-border bg-brand-black">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.25em] mb-2">{p.cat} · {p.tag}</div>
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-3">{p.title}</h3>
                    <button className="text-[10px] font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      Ver proyecto <span>→</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="cotizacion" className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 size-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.21 40 / 0.6), transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Cotización automática</div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
              Forjemos tu próximo <span className="text-brand-steel">proyecto.</span>
            </h2>
            <p className="text-brand-steel mb-10 leading-relaxed max-w-md">
              Cuéntanos sobre tu proyecto. Recibirás una cotización técnica
              detallada en menos de 24 horas hábiles.
            </p>
            <ul className="space-y-4">
              {[
                "Respuesta en menos de 24 horas",
                "Visita técnica sin costo en Pensilvania",
                "Garantía estructural escrita",
                "Materiales certificados",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 bg-brand-fire" />
                  <span className="text-brand-steel">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="bg-brand-graphite border border-border p-8 md:p-10 space-y-5 relative"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Tu nombre" />
                </Field>
                <Field label="Teléfono">
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="+1 (215)..." />
                </Field>
              </div>
              <Field label="Email">
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="tucorreo@email.com" />
              </Field>
              <Field label="Tipo de proyecto">
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="input">
                  {["Portones", "Escaleras", "Barandas", "Estructuras industriales", "Marquesinas", "Soldadura especializada", "Diseño personalizado"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Descripción">
                <textarea required rows={4} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="input resize-none" placeholder="Cuéntanos medidas, ubicación y referencias..." />
              </Field>

              <button
                type="submit"
                className="w-full py-4 bg-brand-fire text-brand-black font-bold uppercase tracking-[0.25em] text-xs hover:bg-foreground transition-colors"
              >
                Enviar Solicitud →
              </button>

              {sent && (
                <div className="absolute inset-x-0 -bottom-4 mx-auto w-fit bg-brand-fire text-brand-black px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] animate-reveal">
                  ✓ Solicitud enviada. Te contactamos pronto.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="bg-brand-graphite border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Reveal>
            <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Showroom visual</div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Obra reciente
            </h2>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[gateImg, stairsImg, railingImg, weldingImg, structureImg, gateGalleryImg, canopyImg, heroImg].map((img, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="group relative aspect-square overflow-hidden border border-border">
                <img src={img} alt="Obra JossForge" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-brand-fire/0 group-hover:bg-brand-fire/10 transition-colors" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Confianza forjada</div>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-16">
            Clientes que <span className="text-brand-steel">vuelven.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-brand-graphite p-8 lg:p-10 h-full">
                <div className="text-brand-fire mb-4 tracking-widest">★★★★★</div>
                <p className="text-foreground/90 leading-relaxed mb-8">"{t.text}"</p>
                <div className="pt-6 border-t border-border">
                  <div className="font-heading font-bold uppercase tracking-tight">{t.name}</div>
                  <div className="text-[10px] text-brand-steel uppercase tracking-[0.2em] mt-1">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="bg-brand-graphite border-y border-border py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-border">
              <img src={weldingImg} alt="Taller JossForge" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Nosotros</div>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
              Una década forjando <span className="text-brand-steel">acero con identidad.</span>
            </h2>
            <p className="text-brand-steel mb-6 leading-relaxed">
              JossForge nació en un taller de Filadelfia con una idea simple:
              tratar cada estructura metálica como una pieza de arquitectura.
              Diez años después seguimos firmando cada soldadura.
            </p>
            <div className="grid sm:grid-cols-3 gap-px bg-border mt-10">
              {[
                { t: "Misión", d: "Convertir el acero en arquitectura funcional y duradera." },
                { t: "Visión", d: "Ser la referencia en herrería de lujo industrial en el noreste de USA." },
                { t: "Valores", d: "Precisión, transparencia y garantía estructural escrita." },
              ].map((v) => (
                <div key={v.t} className="bg-brand-black p-6">
                  <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.25em] mb-3">{v.t}</div>
                  <p className="text-sm text-brand-steel leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.3em] mb-4">/ Visítanos</div>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
            Hablemos.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          <Reveal>
            <div className="bg-brand-graphite p-10 h-full space-y-8">
              <ContactRow label="Dirección" value="1250 Industrial Way, Philadelphia, PA 19104" />
              <ContactRow label="Teléfono" value="+1 (849) 478-2248" />
              <ContactRow label="Correo" value="contacto@jossforge.com" />
              <ContactRow label="Horario" value="Lun – Vie · 7:00 – 18:00" />
              <div>
                <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.25em] mb-3">Redes</div>
                <div className="flex gap-2">
                  {["IG", "FB", "LI", "YT"].map((s) => (
                    <a key={s} href="#" className="size-10 border border-border grid place-items-center text-xs font-bold hover:bg-brand-fire hover:text-brand-black hover:border-brand-fire transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-square lg:aspect-auto lg:min-h-full bg-brand-graphite overflow-hidden">
              <iframe
                title="Ubicación JossForge"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.20%2C39.94%2C-75.15%2C39.97&layer=mapnik"
                className="w-full h-full grayscale invert opacity-80"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-graphite border-t border-border pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 bg-brand-fire grid place-items-center font-heading font-black text-sm italic text-brand-black">JF</div>
              <span className="font-heading font-bold text-xl tracking-tighter uppercase">JossForge</span>
            </div>
            <p className="text-brand-steel text-sm max-w-sm leading-relaxed">
              Transformando el metal en piezas de arte industrial. Durabilidad
              garantizada por una década de experiencia en Pensilvania.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-bold uppercase text-[10px] tracking-[0.25em] mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-brand-steel">
              <li><a href="#nosotros" className="hover:text-brand-fire">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-brand-fire">Servicios</a></li>
              <li><a href="#catalogo" className="hover:text-brand-fire">Catálogo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-bold uppercase text-[10px] tracking-[0.25em] mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-brand-steel">
              <li>+1 (849) 478-2248</li>
              <li>contacto@jossforge.com</li>
              <li>Philadelphia, PA</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-brand-steel uppercase tracking-[0.25em]">© {new Date().getFullYear()} JossForge Steel Works. Todos los derechos reservados.</p>
          <p className="text-[10px] text-brand-steel uppercase tracking-[0.25em]">Forjado en Pensilvania</p>
        </div>
      </footer>

      <WhatsAppFab />

      <style>{`
        .input {
          width: 100%;
          background: var(--brand-black);
          border: 1px solid var(--border);
          padding: 0.85rem 1rem;
          color: var(--foreground);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus { border-color: var(--brand-fire); }
        .input::placeholder { color: oklch(0.5 0.01 250); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-steel mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-brand-fire font-bold uppercase tracking-[0.25em] mb-2">{label}</div>
      <div className="font-heading font-semibold text-lg">{value}</div>
    </div>
  );
}
