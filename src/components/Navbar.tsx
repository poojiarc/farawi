import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Info, Sparkles, Image as ImageIcon, Mail, type LucideIcon } from "lucide-react";
import icon from "@/assets/farawi-icon.png";
import { services } from "@/data/services";

type NavItem = {
  to: "/" | "/about" | "/services" | "/gallery" | "/contact";
  label: string;
  Icon: LucideIcon;
  dropdown?: boolean;
};

const nav: NavItem[] = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: Info },
  { to: "/services", label: "Services", Icon: Sparkles, dropdown: true },
  { to: "/gallery", label: "Gallery", Icon: ImageIcon },
  { to: "/contact", label: "Contact", Icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-black/90 backdrop-blur-xl border-b border-[var(--gold)]/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={icon} alt="Farawi Events" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-gold-gradient tracking-wider">FARAWI</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-dark)]">Events</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <div key={item.to} className="relative group">
              {item.dropdown ? (
                <>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-white/80 hover:text-[var(--gold)] transition-colors"
                    activeProps={{ className: "text-[var(--gold)]" }}
                  >
                    <item.Icon className="h-3.5 w-3.5" />
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-300">
                    <div className="bg-black/95 backdrop-blur-xl border border-[var(--gold)]/30 py-3 shadow-gold-lg">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[var(--gold)] hover:bg-[var(--gold)]/5 transition-colors border-l-2 border-transparent hover:border-[var(--gold)]"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-white/80 hover:text-[var(--gold)] transition-colors"
                  activeProps={{ className: "text-[var(--gold)]" }}
                  activeOptions={{ exact: true }}
                >
                  <item.Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-outline-gold !py-2.5 !px-6 !text-[10px]">
          Plan Your Event
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-[var(--gold)] p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden container-luxe mt-6 pb-6 space-y-1">
          {nav.map((item) => (
            <div key={item.to}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex justify-between items-center py-3 text-xs uppercase tracking-[0.25em] text-white/80 border-b border-white/10"
                  >
                    <span className="flex items-center gap-2"><item.Icon className="h-3.5 w-3.5" />{item.label}</span>
                    <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      {services.map((s) => (
                        <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="block py-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-[var(--gold)]">
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.to} className="flex items-center gap-2 py-3 text-xs uppercase tracking-[0.25em] text-white/80 border-b border-white/10 hover:text-[var(--gold)]">
                  <item.Icon className="h-3.5 w-3.5" />{item.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-gold w-full mt-6">Plan Your Event</Link>
        </div>
      )}
    </header>
  );
}
