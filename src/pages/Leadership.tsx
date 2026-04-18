import { motion } from "framer-motion";
import { Mail, Phone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Leader = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

const leaders: Leader[] = [
  { name: "Pastor Netherlands", role: "Senior Pastor" },
  { name: "Church Office", role: "Administration", phone: "263-9-480776" },
  { name: "Outreach Team", role: "Community Outreach", phone: "077 226 3129" },
];

const Leadership = () => {
  return (
    <Layout>
      <PageHero
        title="Leadership & Staff"
        subtitle="Meet the servants who help guide and care for our church family."
        imageSrc="/images/inside-the-church.jpg"
        badge="Servant leadership"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <SectionHeading
                align="center"
                eyebrow="Leadership"
                title="Meet our leadership & staff"
                subtitle="Servant leaders who help guide, care, and support our church family."
              />
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm">
                  If you need help or prayer, feel free to contact us using the details below.
                </span>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders.map((l, i) => (
                <motion.div
                  key={`${l.name}-${l.role}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
                >
                  <Card className="h-full border-accent/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-serif font-bold text-foreground">{l.name}</h3>
                      <p className="text-accent font-medium text-sm mt-1">{l.role}</p>

                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {l.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-accent" />
                            <a
                              href={`tel:${l.phone.replace(/\s/g, "")}`}
                              className="hover:text-foreground transition-colors"
                            >
                              {l.phone}
                            </a>
                          </div>
                        )}
                        {l.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-accent" />
                            <a
                              href={`mailto:${l.email}`}
                              className="hover:text-foreground transition-colors"
                            >
                              {l.email}
                            </a>
                          </div>
                        )}
                        {!l.phone && !l.email && (
                          <p className="text-sm text-muted-foreground">
                            Please contact the church office for more details.
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center mt-12"
            >
              <p className="text-muted-foreground">
                To keep information accurate, leadership details can be updated at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help or prayer?"
        subtitle="Reach out and we’ll connect you with the right person to support you."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/events"
        secondaryLabel="Service Times"
        imageSrc="/images/church-last.png"
      />
    </Layout>
  );
};

export default Leadership;
