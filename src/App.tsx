import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Home from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import Services from "./routes/services";
import ServiceDetail from "./routes/services.$slug";
import { Link } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-8xl font-serif text-gold-gradient">404</h1>
        <p className="mt-4 text-white/60 uppercase tracking-[0.3em] text-sm">Page not found</p>
        <Link to="/" className="btn-gold mt-8">Go Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
