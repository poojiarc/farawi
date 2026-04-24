import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import w from "@/assets/service-wedding.jpg";
import p from "@/assets/service-party.jpg";
import e from "@/assets/service-entertainment.jpg";
import h from "@/assets/service-hospitality.jpg";
import hero from "@/assets/hero-1.jpg";
import about1 from "@/assets/about-1.jpg";

const items = [
  { src: g3, cat: "Weddings" }, { src: w, cat: "Weddings" },
  { src: g4, cat: "Parties" }, { src: p, cat: "Parties" },
  { src: g1, cat: "Corporate" }, { src: g5, cat: "Corporate" },
  { src: g2, cat: "Weddings" }, { src: g6, cat: "Weddings" },
  { src: e, cat: "Parties" }, { src: h, cat: "Corporate" },
  { src: about1, cat: "Corporate" }, { src: hero, cat: "Weddings" },
];
const cats = ["All", "Weddings", "Parties", "Corporate"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <Helmet>
        <title>Gallery — Farawi Events Dubai</title>
        <meta name="description" content="A curated portfolio of luxury weddings, parties and corporate events crafted by Farawi Events." />
        <meta property="og:title" content="Gallery — Farawi Events" />
        <meta property="og:description" content="Discover cinematic moments from our recent celebrations." />
        <meta property="og:image" content={hero} />
      </Helmet>
      <PageHero image={hero} eyebrow="Portfolio" title="Our <em class='text-gold-gradient italic'>Gallery</em>" breadcrumb="Gallery" />

      <section className="section-padding container-luxe">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.3em] border transition-all duration-300 ${
                filter === c ? "bg-gold-gradient text-black border-transparent" : "border-[var(--gold)]/40 text-white/70 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              layout key={item.src + i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid overflow-hidden group cursor-pointer relative"
              onClick={() => setLightbox(item.src)}
            >
              <img src={item.src} alt={item.cat} loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-6">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">{item.cat}</div>
                  <div className="text-white font-serif text-lg mt-1">View larger</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-[var(--gold)] hover:scale-110 transition-transform" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={lightbox} alt="Preview" className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
