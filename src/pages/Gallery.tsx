import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

const items: GalleryItem[] = [
  { src: "/images/inside-the-church.jpg", alt: "Inside the church", caption: "Inside the church" },
  { src: "/images/church-last.webp", alt: "Church gathering", caption: "Church gathering" },
  { src: "/images/church-last-2.webp", alt: "Church fellowship", caption: "Fellowship" },
  { src: "/images/birthday.jpg", alt: "Birthday celebration", caption: "Celebration" },
  { src: "/images/awana.jpg", alt: "Awana ministry", caption: "Children & youth" },
  { src: "/images/491999477_2046229039237092_7845099436024406724_n.jpg", alt: "Church photo", caption: "Moments together" },
  { src: "/images/492071801_2046229112570418_4845446715939399978_n.jpg", alt: "Church photo", caption: "Community" },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="A glimpse of worship, fellowship, and community life at Nketa 8 Baptist Church."
        imageSrc="/images/492071801_2046229112570418_4845446715939399978_n.jpg"
        badge="Worship • Fellowship • Community"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-10">
              <SectionHeading
                align="center"
                eyebrow="Gallery"
                title="Recent moments"
                subtitle="A glimpse of worship, fellowship, and community life."
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
              <ImageIcon className="h-5 w-5 text-accent" />
              <span className="text-sm">Images are served from the public folder.</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it, i) => (
                <motion.div
                  key={it.src}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.05 } } }}
                >
                  <Card className="overflow-hidden border-accent/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img src={it.src} alt={it.alt} className="w-full h-56 object-cover" loading="lazy" />
                      {it.caption && (
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">{it.caption}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Come and worship with us"
        subtitle="We’d love to welcome you in person. Plan your visit and join our church family."
        primaryTo="/contact"
        primaryLabel="Plan a Visit"
        secondaryTo="/events"
        secondaryLabel="See Events"
        imageSrc="/images/inside-the-church.jpg"
      />
    </Layout>
  );
};

export default Gallery;
