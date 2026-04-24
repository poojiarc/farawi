import { Link } from "@tanstack/react-router";
import {
  Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Heart,
  Home, Info, Sparkles, Image as ImageIcon, ChevronRight,
  PartyPopper, Music, UtensilsCrossed, CalendarCheck,
} from "lucide-react";
import logo from "@/assets/farawi-logo.png";
import { site } from "./site-config";
import { services } from "@/data/services";

const quickLinks = [
  { to: "/" as const, label: "Home", Icon: Home },
  { to: "/about" as const, label: "About", Icon: Info },
  { to: "/services" as const, label: "Services", Icon: Sparkles },
  { to: "/gallery" as const, label: "Gallery", Icon: ImageIcon },
  { to: "/contact" as const, label: "Contact", Icon: Mail },
];

const serviceIcons: Record<string, typeof CalendarCheck> = {
  "managing-organizing-events": CalendarCheck,
  "organizing-parties": PartyPopper,
  "entertainments-parties-services": Music,
  "hospitality-services": UtensilsCrossed,
};

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
            {quickLinks.map(({ to, label, Icon }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors group">
                  <Icon className="h-4 w-4 text-[var(--gold)]/70 group-hover:text-[var(--gold)]" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-white/60">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? ChevronRight;
              return (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors group">
                    <Icon className="h-4 w-4 text-[var(--gold)]/70 group-hover:text-[var(--gold)] shrink-0" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              );
            })}
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

      <div className="container-luxe mt-16 pt-8 border-t border-white/10 flex flex-col gap-3 justify-center items-center text-xs text-white/50 text-center">
        <div>© {new Date().getFullYear()} FARAWI events. All rights reserved.</div>
        <div className="flex justify-center items-center gap-1">
          Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:underline ml-1"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
