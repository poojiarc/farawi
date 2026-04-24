import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-8xl font-serif text-gold-gradient">404</h1>
        <p className="mt-4 text-white/60 uppercase tracking-[0.3em] text-sm">Page not found</p>
        <a href="/" className="btn-gold mt-8">Go Home</a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Farawi Events — Luxury Event Management in Dubai" },
      { name: "description", content: "Farawi Events — Dubai's premier luxury event management company. Weddings, parties, corporate events, hospitality and entertainment." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body><Scripts />{children}</body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white"><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
