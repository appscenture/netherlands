import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const events = [
  { title: "Sunday Service", date: "Every Sunday", time: "9:00 AM – 12:30 PM", location: "Main Sanctuary", desc: "Join us for a powerful time of praise, worship, and the preaching of God's Word." },
  { title: "Midweek Bible Study", date: "Every Wednesday", time: "6:00 PM", location: "Fellowship Hall", desc: "Dive deeper into scripture with our midweek Bible study group." },
  { title: "Prayer Meeting", date: "Every Friday", time: "6:00 PM", location: "Prayer Room", desc: "Come together to pray for our church, community, and the nations." },
  { title: "Youth Fellowship", date: "Every Saturday", time: "2:00 PM", location: "Youth Hall", desc: "Fun, fellowship, and faith-building activities for our young people." },
  { title: "Women's Prayer Breakfast", date: "First Saturday of the Month", time: "8:00 AM", location: "Fellowship Hall", desc: "A morning of prayer, fellowship, and encouragement for women of all ages." },
  { title: "Community Outreach Day", date: "Last Saturday of the Month", time: "9:00 AM", location: "Various Locations", desc: "Serving the community of Netherlands through practical acts of love and kindness." },
];

const Events = () => {
  return (
    <Layout>
      <PageHero
        title="Events & Services"
        subtitle="There's always something happening at Netherlands Baptist Church."
        imageSrc="/images/birthday.jpg"
        badge="Worship • Fellowship • Outreach"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <SectionHeading
              align="center"
              eyebrow="Calendar"
              title="Upcoming events & weekly services"
              subtitle="There’s always something happening. Come and be part of it."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((e, i) => (
              <motion.div key={e.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <Card className="h-full border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3">{e.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {e.date}</p>
                      <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> {e.time}</p>
                      <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {e.location}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come worship with us"
        subtitle="Join a service, bring a friend, and experience community rooted in Christ."
        primaryTo="/contact"
        primaryLabel="Plan a Visit"
        secondaryTo="/ministries"
        secondaryLabel="Explore Ministries"
        imageSrc="/images/church-last-2.webp"
      />
    </Layout>
  );
};

export default Events;
