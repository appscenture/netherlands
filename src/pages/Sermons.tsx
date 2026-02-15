import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sermons = [
  { title: "Walking in God's Purpose", scripture: "Jeremiah 29:11", speaker: "Pastor Nxumalo", date: "February 9, 2026" },
  { title: "The Power of Faith", scripture: "Hebrews 11:1-6", speaker: "Pastor Nxumalo", date: "February 2, 2026" },
  { title: "Love One Another", scripture: "John 13:34-35", speaker: "Pastor Nxumalo", date: "January 26, 2026" },
  { title: "Standing Firm in Trials", scripture: "James 1:2-4", speaker: "Pastor Nxumalo", date: "January 19, 2026" },
  { title: "The Good Shepherd", scripture: "Psalm 23", speaker: "Pastor Nxumalo", date: "January 12, 2026" },
  { title: "New Year, New Mercies", scripture: "Lamentations 3:22-23", speaker: "Pastor Nxumalo", date: "January 5, 2026" },
];

const Sermons = () => {
  return (
    <Layout>
      <PageHero
        title="Sermons"
        subtitle="Be encouraged by God's Word preached at Nketa 8 Baptist Church."
        imageSrc="/images/church-last.webp"
        badge="Weekly preaching and teaching"
      />

      {/* Weekly Schedule */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <SectionHeading
              align="center"
              eyebrow="Weekly gatherings"
              title="Weekly sermon schedule"
              subtitle="Join us in person for worship, Bible study, and prayer."
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { day: "Sunday", time: "9:00 AM – 12:30 PM", type: "Sunday Service" },
              { day: "Wednesday", time: "6:00 PM", type: "Midweek Bible Study" },
              { day: "Friday", time: "6:00 PM", type: "Prayer & Devotion" },
            ].map((s) => (
              <Card key={s.day} className="border-accent/20">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-serif font-bold text-foreground">{s.day}</h3>
                  <p className="text-accent font-semibold flex items-center justify-center gap-1 mt-1">
                    <Clock className="h-4 w-4" /> {s.time}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{s.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <SectionHeading
              align="center"
              eyebrow="Sermon archive"
              title="Recent sermons"
              subtitle="Be encouraged by messages grounded in Scripture."
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {sermons.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}>
                <Card className="border-accent/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <BookOpen className="h-8 w-8 text-accent shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-foreground text-lg">{s.title}</h3>
                      <p className="text-accent text-sm font-medium">{s.scripture}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{s.speaker}</p>
                      <p>{s.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Join us this Sunday"
        subtitle="Come for service 9:00 AM – 12:30 PM and experience a warm, welcoming church family."
        primaryTo="/contact"
        primaryLabel="Plan a Visit"
        secondaryTo="/events"
        secondaryLabel="See Events"
        imageSrc="/images/inside-the-church.jpg"
      />
    </Layout>
  );
};

export default Sermons;
