import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
import hero from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Farawi Events Dubai" },
      { name: "description", content: "Explore Farawi Events services: event management, parties, entertainment and luxury hospitality in Dubai." },
      { property: "og:title", content: "Our Services — Farawi Events" },
      { property: "og:description", content: "Bespoke event production, party design, entertainment and five-star hospitality." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero image={hero} eyebrow="What We Do" title="Our <em class='text-gold-gradient italic'>Services</em>" breadcrumb="Services" />

      <section className="section-padding container-luxe space-y-16">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <Link to="/services/$slug" params={{ slug: s.slug }} className="block overflow-hidden aspect-[4/3] group">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
            </Link>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-3">0{i + 1} — Service</div>
              <h2 className="heading-section text-white mb-4">{s.title}</h2>
              <div className="gold-divider" />
              <p className="text-white/60 italic font-light mb-4">{s.tagline}</p>
              <p className="text-white/70 font-light leading-relaxed">{s.description}</p>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="btn-outline-gold mt-8">
                Discover More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
