import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import hero from "@/assets/hero-1.jpg";
import about1 from "@/assets/about-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import logo from "@/assets/farawi-logo.png";
import { services } from "@/data/services";
import { whatsappLink } from "@/components/site-config";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farawi Events — Luxury Event Management in Dubai" },
      { name: "description", content: "Dubai's premier luxury event company specializing in weddings, parties, corporate events, hospitality and entertainment production." },
      { property: "og:title", content: "Farawi Events — Luxury Event Management in Dubai" },
      { property: "og:description", content: "Crafting cinematic, unforgettable celebrations in the heart of Dubai." },
    ],
  }),
  component: Home,
});

const testimonials = [
  { name: "Aisha Al Mansoori", role: "Bride", text: "Farawi Events transformed our wedding into a fairytale. Every detail was breathtaking — from the floral arches to the live entertainment. Truly world-class." },
  { name: "Khalid Rahman", role: "CEO, Mansour Holdings", text: "Their corporate gala exceeded every expectation. Flawless execution, elegant design, and impeccable hospitality. Our guests are still talking about it." },
  { name: "Sophia Laurent", role: "Private Client", text: "From concept to curtain call, they delivered pure magic. The attention to detail and creative vision is unmatched in Dubai." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }} animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={hero} alt="Luxury event" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)" }} />

        <div className="relative z-10 text-center container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={logo} alt="Farawi Events" className="h-40 md:h-52 mx-auto mb-8 drop-shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4"
          >
            Dubai · United Arab Emirates
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="heading-display text-white max-w-4xl mx-auto"
          >
            Crafting <span className="shimmer-text italic">Timeless</span><br />
            Luxury Celebrations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-8 text-white/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Weddings · Parties · Entertainment · Hospitality. Cinematic events, meticulously designed and flawlessly executed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-gold">Plan Your Event <ArrowRight className="h-4 w-4" /></Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline-gold">Contact via WhatsApp</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--gold)] text-xs uppercase tracking-[0.4em]"
        >
          <div className="flex flex-col items-center gap-3">
            <span>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding container-luxe">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img src={about1} alt="About Farawi" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-black border border-[var(--gold)]/40 px-8 py-6">
              <div className="text-4xl font-serif text-gold-gradient">10+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/60 mt-1">Years of Excellence</div>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="About Farawi"
              title="The Art of <em class='text-gold-gradient italic font-light'>Bespoke</em> Celebrations"
            />
            <p className="mt-6 text-white/70 leading-relaxed font-light">
              Farawi Events is Dubai's destination for cinematic, world-class event production. We blend Arabic heritage with contemporary luxury to create celebrations that feel both timeless and uniquely yours.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed font-light">
              From breathtaking weddings to high-profile galas, our team delivers experiences engineered for emotion. Every flower, every light, every note — composed with intention.
            </p>
            <Link to="/about" className="btn-outline-gold mt-10">Discover Our Story</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-b from-black via-[#0a0805] to-black">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Our Services"
            title="Signature <em class='text-gold-gradient italic font-light'>Experiences</em>"
            subtitle="A curated suite of services for the most discerning hosts. Each crafted with obsessive precision."
            center
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group block relative overflow-hidden h-[460px]">
                  <img src={s.image} alt={s.title} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 border border-[var(--gold)]/0 group-hover:border-[var(--gold)]/60 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-2">0{i + 1}</div>
                    <h3 className="font-serif text-2xl text-white group-hover:text-gold-gradient transition-colors">{s.title}</h3>
                    <p className="text-white/60 text-sm mt-3 font-light line-clamp-2">{s.short}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[var(--gold)] text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Discover <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-padding container-luxe">
        <SectionHeader
          eyebrow="The Gallery"
          title="A Glimpse Into Our <em class='text-gold-gradient italic font-light'>World</em>"
          center
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[g1, g2, g3, g4, g5, g6].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${i === 0 ? "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}
            >
              <img src={img} alt="Gallery" loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/gallery" className="btn-outline-gold">View Full Gallery</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0805]">
        <div className="container-luxe">
          <SectionHeader eyebrow="Testimonials" title="Words From Our <em class='text-gold-gradient italic font-light'>Clients</em>" center />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative p-10 border border-[var(--gold)]/20 bg-black/50 hover:border-[var(--gold)]/60 transition-colors"
              >
                <Quote className="absolute -top-4 left-8 h-8 w-8 text-[var(--gold)] bg-black px-1" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <p className="text-white/70 italic font-light leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-gold-gradient font-serif text-lg">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50 mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative container-luxe text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="eyebrow justify-center">Begin the Journey</div>
            <h2 className="heading-display text-white max-w-3xl mx-auto">
              Let's create something <span className="shimmer-text italic">extraordinary</span> together
            </h2>
            <p className="mt-6 text-white/70 max-w-xl mx-auto font-light">
              Your vision deserves a team that lives and breathes detail. Let's begin.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold">Plan Your Event</Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline-gold">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
