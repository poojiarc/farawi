import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, Award, Users, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import about1 from "@/assets/about-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";
import hero from "@/assets/hero-1.jpg";

const values = [
  { Icon: Sparkles, title: "Cinematic Vision", text: "Every event is staged like a film — composed for emotion, lit for memory." },
  { Icon: Award, title: "Uncompromising Craft", text: "From floral to lighting, we partner only with the world's finest artisans." },
  { Icon: Users, title: "Bespoke Service", text: "No two events are alike. Every detail is shaped around you." },
  { Icon: Heart, title: "Heritage & Soul", text: "Rooted in Arabic hospitality, refined for a global luxury audience." },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Farawi Events</title>
        <meta name="description" content="Discover the story behind Farawi Events — Dubai's luxury event company defined by craft, culture and unforgettable celebrations." />
        <meta property="og:title" content="About Farawi Events" />
        <meta property="og:description" content="Cinematic events crafted with Arabic heritage and contemporary luxury." />
        <meta property="og:image" content="/favicon.png" />
      </Helmet>
      <PageHero image={hero} eyebrow="Our Story" title="The Soul of <em class='text-gold-gradient italic'>Farawi</em>" breadcrumb="About" />

      <section className="section-padding container-luxe">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            src={about1} alt="About Farawi"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="aspect-[4/5] object-cover w-full"
          />
          <div>
            <SectionHeader eyebrow="Who We Are" title="A Decade of <em class='text-gold-gradient italic font-light'>Luxury</em> Event Design" />
            <p className="mt-6 text-white/70 leading-relaxed font-light">
              Farawi Events was born in Dubai with a singular obsession: to design celebrations that feel cinematic, intimate, and deeply personal. We've spent over a decade earning the trust of discerning families, brands, and visionaries across the Emirates and beyond.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed font-light">
              Our work is a love letter to detail — to the way candlelight flickers across crystal, to the moment a melody meets a memory. We don't just produce events. We compose them.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["500+", "Events"], ["10+", "Years"], ["100%", "Bespoke"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-serif text-gold-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50 mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0805]">
        <div className="container-luxe grid md:grid-cols-2 gap-10">
          {[
            { title: "Our Vision", text: "To be the Middle East's most celebrated luxury event house — defining the future of celebration through artistry, technology, and timeless hospitality." },
            { title: "Our Mission", text: "To craft cinematic, deeply personal events that honor every host's story while delivering production excellence at a world-class standard." },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-12 border border-[var(--gold)]/30 bg-black/40 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">— {b.title}</div>
              <h3 className="font-serif text-3xl text-white mb-6">{b.title === "Our Vision" ? "Defining the Future" : "Composing the Moment"}</h3>
              <p className="text-white/70 font-light leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding container-luxe">
        <SectionHeader eyebrow="Why Farawi" title="What Sets Us <em class='text-gold-gradient italic font-light'>Apart</em>" center />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/5 transition-all duration-500 group"
            >
              <v.Icon className="h-10 w-10 text-[var(--gold)] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="font-serif text-xl text-white mb-3">{v.title}</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image grid */}
      <section className="container-luxe pb-24 grid md:grid-cols-2 gap-6">
        {[g3, g6].map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden aspect-[4/3] group">
            <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>
        ))}
      </section>

      <section className="py-24 bg-black border-t border-[var(--gold)]/20 text-center">
        <div className="container-luxe">
          <h3 className="heading-section text-white">Ready to begin?</h3>
          <Link to="/contact" className="btn-gold mt-8">Plan Your Event</Link>
        </div>
      </section>
    </>
  );
}
