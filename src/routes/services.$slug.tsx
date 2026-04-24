import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
import { whatsappLink } from "@/components/site-config";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Service"} — Farawi Events` },
        { name: "description", content: s?.short ?? "" },
        { property: "og:title", content: `${s?.title} — Farawi Events` },
        { property: "og:description", content: s?.short ?? "" },
        { property: "og:image", content: s?.image ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-display text-gold-gradient">Service Not Found</h1>
        <Link to="/services" className="btn-gold mt-8">View All Services</Link>
      </div>
    </div>
  ),
  component: ServicePage,
});

const galleryImages = [g1, g2, g3, g6];

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: (typeof services)[number] };

  return (
    <>
      <PageHero image={service.image} eyebrow="Our Services" title={service.title} breadcrumb={service.title} />

      <section className="section-padding container-luxe">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="eyebrow left">Overview</div>
            <h2 className="heading-section text-white">{service.tagline}</h2>
            <div className="gold-divider" />
            <p className="text-white/70 leading-relaxed font-light text-lg mt-6">{service.description}</p>
            <p className="text-white/60 leading-relaxed font-light mt-4">
              At Farawi Events, every project begins with a conversation — about your vision, your guests, your story.
              From there, our team translates ambition into atmosphere, ensuring every element feels intentional, every moment cinematic.
            </p>

            <h3 className="font-serif text-2xl text-white mt-12 mb-6">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f: string, i: number) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 border border-[var(--gold)]/20 hover:border-[var(--gold)]/60 transition-colors"
                >
                  <Check className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-light">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="p-8 border border-[var(--gold)]/40 bg-[var(--gold)]/5">
              <h4 className="font-serif text-2xl text-gold-gradient mb-3">Ready to begin?</h4>
              <p className="text-white/70 text-sm font-light mb-6">
                Let's design something extraordinary. Speak with our team to begin planning.
              </p>
              <a href={whatsappLink(`Hello Farawi Events, I'm interested in ${service.title}.`)} target="_blank" rel="noreferrer" className="btn-gold w-full">
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline-gold w-full mt-3">Send Enquiry</Link>
            </div>

            <div className="p-8 border border-white/10">
              <h5 className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Other Services</h5>
              <div className="space-y-2">
                {services.filter((x) => x.slug !== service.slug).map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-0 text-sm text-white/70 hover:text-[var(--gold)] transition-colors group">
                    {s.title}
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">Gallery</div>
            <h3 className="heading-section text-white">A Visual <em className="text-gold-gradient italic font-light">Journey</em></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="overflow-hidden aspect-square group">
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
