import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  badge?: string;
};

const PageHero = ({ title, subtitle, imageSrc, badge }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(var(--wheat),0.25),transparent_45%),radial-gradient(circle_at_bottom,hsla(var(--primary),0.18),transparent_55%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      <div className="relative container mx-auto px-4 py-20 md:py-24 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/90 backdrop-blur mb-6">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--wheat))]" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/85 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
