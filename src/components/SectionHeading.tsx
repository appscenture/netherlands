import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) => {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`max-w-3xl ${alignClasses}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-background border border-accent/20 px-4 py-2 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-serif font-extrabold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
