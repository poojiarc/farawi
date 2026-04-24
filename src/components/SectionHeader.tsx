import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow, title, subtitle, center = false,
}: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={center ? "text-center max-w-3xl mx-auto" : ""}
    >
      <div className={`eyebrow ${!center ? "left" : ""}`}>{eyebrow}</div>
      <h2 className="heading-section text-white">
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h2>
      {subtitle && (
        <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
