import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type CtaBandProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  primaryTo?: string;
  primaryLabel?: string;
  secondaryTo?: string;
  secondaryLabel?: string;
};

const CtaBand = ({
  title = "You’re welcome here",
  subtitle = "Join us for worship, fellowship, and community. Plan your visit today or reach out for prayer and support.",
  imageSrc = "/images/church-last-2.png",
  primaryTo = "/plan-a-visit",
  primaryLabel = "Plan a Visit",
  secondaryTo = "/donate",
  secondaryLabel = "Give",
}: CtaBandProps) => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <img src={imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs text-white/85 backdrop-blur">
              <Heart className="h-4 w-4 text-[hsl(var(--wheat))]" />
              Netherlands Baptist Church
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-extrabold text-white">{title}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{subtitle}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                <Link to={primaryTo}>{primaryLabel}</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="bg-background/95 backdrop-blur border-white/15">
              <CardContent className="p-7">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/Yh472YxXXoBqNGHT9"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      2032 Middelcoopstraat 19, 4102 CE Culemborg, Netherlands
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    <a href="tel:0772263129" className="hover:text-foreground transition-colors">077 226 3129</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
