import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Heart } from "lucide-react";
import logo from "@/assets/farawi-logo.png";
import { site } from "./site-config";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-[var(--gold)]/20 pt-20 pb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="container-luxe grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="Farawi Events" className="h-32 w-auto mb-6" />
          <p className="text-sm text-white/60 leading-relaxed">
            Dubai's premier luxury event company — crafting unforgettable celebrations with elegance, precision, and an obsession for detail.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Facebook, url: site.social.facebook },
              { Icon: Instagram, url: site.social.instagram },
              { Icon: Linkedin, url: site.social.linkedin },
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--gold)] transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[var(--gold)] transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-white/60">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[var(--gold)] transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" /> {site.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" /> <a href={`tel:${site.phoneRaw}`} className="hover:text-[var(--gold)]">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" /> <a href={`mailto:${site.email}`} className="hover:text-[var(--gold)]">{site.email}</a></li>
          </ul>
          <div className="mt-6 text-xs text-white/50 leading-relaxed">
            <div>{site.hours.weekdays}</div>
            <div>{site.hours.weekend}</div>
          </div>
        </div>
      </div>

      <div className="container-luxe mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-white/50">
        <div>© {new Date().getFullYear()} FARAWI events. All rights reserved.</div>
        <div className="flex items-center gap-2">
          Made with <Heart className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" /> by{" "}
          <a href="https://staffarc.com" target="_blank" rel="noreferrer" className="text-[var(--gold)] hover:underline">StaffArc</a>
        </div>
      </div>
    </footer>
  );
}
