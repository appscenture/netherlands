import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Phone, Mail, Calendar, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Ministry = {
  title: string;
  desc: string;
};

type Leader = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

type Sermon = {
  title: string;
  scripture: string;
  speaker: string;
  date: string;
};

const ministries: Ministry[] = [
  {
    title: "Youth Ministry",
    desc: "Empowering young people to grow in faith and become leaders through fellowship and discipleship.",
  },
  {
    title: "Women's Ministry",
    desc: "A sisterhood of faith, prayer, and support—encouraging one another and serving together.",
  },
  {
    title: "Men's Ministry",
    desc: "Building godly men through fellowship, accountability, and service in the home and church.",
  },
  {
    title: "Children's Ministry",
    desc: "Nurturing the faith of our youngest members with age-appropriate Bible lessons and activities.",
  },
  {
    title: "Worship Ministry",
    desc: "Leading the church in praise and worship—creating an atmosphere where hearts are lifted to God.",
  },
  {
    title: "Community Outreach",
    desc: "Serving Netherlands and beyond through practical acts of love, care, and encouragement.",
  },
];

const leaders: Leader[] = [
  { name: "Pastor Netherlands", role: "Senior Pastor" },
  { name: "Church Office", role: "Administration", phone: "263-9-480776" },
  { name: "Outreach Team", role: "Community Outreach", phone: "077 226 3129" },
];

const sermons: Sermon[] = [
  { title: "Walking in God's Purpose", scripture: "Jeremiah 29:11", speaker: "Pastor Netherlands", date: "February 9, 2026" },
  { title: "The Power of Faith", scripture: "Hebrews 11:1-6", speaker: "Pastor Netherlands", date: "February 2, 2026" },
  { title: "Love One Another", scripture: "John 13:34-35", speaker: "Pastor Netherlands", date: "January 26, 2026" },
];

const ChurchLife = () => {
  return (
    <Layout>
      <PageHero
        title="Church Life"
        subtitle="Discover our ministries, meet leadership, and stay encouraged by the Word."
        badge="Ministries • Leadership • Sermons"
        imageSrc="/images/inside-the-church.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Ministries"
              title="Find your place to serve"
              subtitle="Every ministry is a doorway to growth, fellowship, and impact."
            />

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.06 } } }}
                >
                  <Card className="h-full border-accent/20">
                    <CardContent className="p-7">
                      <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mt-4 text-lg font-serif font-bold text-foreground">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                <Link to="/contact">Join a Ministry</Link>
              </Button>
              <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                <Link to="/events">See Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Leadership"
              title="Meet our leadership & staff"
              subtitle="Servant leaders who help guide, care, and support our church family."
            />

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders.map((l, i) => (
                <motion.div
                  key={`${l.name}-${l.role}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.06 } } }}
                >
                  <Card className="h-full border-accent/20">
                    <CardContent className="p-7">
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
                        {!l.phone && !l.email && <p>Please contact the church office for more details.</p>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Sermons"
              title="Be encouraged by the Word"
              subtitle="Recent sermon highlights and weekly gathering schedule."
            />

            <div className="mt-8 grid lg:grid-cols-5 gap-6 items-start">
              <Card className="lg:col-span-2 border-accent/20">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    Weekly schedule
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    {[
                      { day: "Sunday", time: "9:00 AM – 12:30 PM", label: "Sunday Service" },
                      { day: "Wednesday", time: "6:00 PM", label: "Bible Study" },
                      { day: "Friday", time: "6:00 PM", label: "Prayer Meeting" },
                    ].map((s) => (
                      <div key={s.day} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-foreground">{s.day}</p>
                          <p className="text-muted-foreground text-xs">{s.label}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 text-accent font-semibold">
                          <Clock className="h-4 w-4" />
                          {s.time}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-6 w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                    <Link to="/contact">Plan a Visit</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="lg:col-span-3 space-y-4">
                {sermons.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.55, delay: i * 0.06 } } }}
                  >
                    <Card className="border-accent/20">
                      <CardContent className="p-7 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                          <BookOpen className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-foreground text-lg">{s.title}</h3>
                          <p className="text-accent text-sm font-medium">{s.scripture}</p>
                        </div>
                        <div className="text-sm text-muted-foreground sm:text-right">
                          <p>{s.speaker}</p>
                          <p>{s.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                  <Link to="/events">See weekly schedule</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to connect?"
        subtitle="Join a ministry, meet our leaders, and grow through worship and the Word."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/donate"
        secondaryLabel="Give"
        imageSrc="/images/church-last.webp"
      />
    </Layout>
  );
};

export default ChurchLife;
