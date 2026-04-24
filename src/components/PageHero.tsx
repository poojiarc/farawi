import { motion } from "framer-motion";

export function PageHero({ image, eyebrow, title, breadcrumb }: {
  image: string; eyebrow: string; title: string; breadcrumb: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      <div className="relative z-10 text-center container-luxe pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-6">{eyebrow}</div>
          <h1 className="heading-display text-white" dangerouslySetInnerHTML={{ __html: title }} />
        </motion.div>
      </div>
    </section>
  );
}
