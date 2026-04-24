import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/components/site-config";
import { services } from "@/data/services";
import hero from "@/assets/hero-1.jpg";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0].title, message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Farawi Events, I would like to inquire about your services.%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${site.whatsappRaw}?text=${msg}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contact — Farawi Events Dubai</title>
        <meta name="description" content="Get in touch with Farawi Events. Call, email or message us on WhatsApp to plan your luxury celebration in Dubai." />
        <meta property="og:title" content="Contact Farawi Events" />
        <meta property="og:description" content="Plan your luxury event in Dubai today." />
      </Helmet>
      <PageHero image={hero} eyebrow="Get In Touch" title="Let's Plan <em class='text-gold-gradient italic'>Together</em>" breadcrumb="Contact" />

      <section className="section-padding container-luxe">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="eyebrow left">Reach Us</div>
              <h2 className="heading-section text-white">Begin the <em className="text-gold-gradient italic font-light">Conversation</em></h2>
              <p className="mt-4 text-white/60 font-light leading-relaxed">
                Whether you're planning an intimate celebration or a landmark gala, our team is ready to bring your vision to life.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneRaw}` },
                { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                { Icon: MapPin, label: "Address", value: site.address },
                { Icon: Clock, label: "Hours", value: `${site.hours.weekdays}\n${site.hours.weekend}` },
              ].map((item) => (
                <div key={item.label} className="flex gap-5 p-5 border border-[var(--gold)]/20 hover:border-[var(--gold)]/60 transition-colors">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)]">
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[var(--gold)] transition-colors whitespace-pre-line">{item.value}</a>
                    ) : (
                      <div className="text-white whitespace-pre-line text-sm font-light">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[{ Icon: Facebook, url: site.social.facebook }, { Icon: Instagram, url: site.social.instagram }, { Icon: Linkedin, url: site.social.linkedin }].map(({ Icon, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noreferrer"
                    className="w-11 h-11 border border-[var(--gold)]/40 text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-black transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-gold w-full">
              Checkout via WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-10 border border-[var(--gold)]/30 bg-black/40 backdrop-blur space-y-6"
          >
            <div>
              <div className="eyebrow left">Enquiry Form</div>
              <h3 className="font-serif text-3xl text-white">Send us a message</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" required>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-luxe" />
              </Field>
              <Field label="Email Address" required>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-luxe" />
              </Field>
              <Field label="Phone Number" required>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-luxe" />
              </Field>
              <Field label="Service" required>
                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input-luxe">
                  {services.map((s) => <option key={s.slug} value={s.title} className="bg-black">{s.title}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Message" required>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-luxe resize-none" />
            </Field>

            <button type="submit" className="btn-gold w-full">Send via WhatsApp</button>
            <p className="text-xs text-white/40 text-center">Submitting will open WhatsApp with your enquiry pre-filled.</p>
          </motion.form>
        </div>
      </section>

      <style>{`
        .input-luxe {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(201,166,70,0.3);
          color: white;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          font-weight: 300;
          letter-spacing: 0.02em;
          transition: all 0.3s;
          outline: none;
        }
        .input-luxe:focus { border-color: var(--gold); box-shadow: 0 0 0 1px var(--gold); }
      `}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] mb-2 block">
        {label} {required && <span className="text-white/40">*</span>}
      </span>
      {children}
    </label>
  );
}
