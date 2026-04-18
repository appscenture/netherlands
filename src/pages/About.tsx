import { motion } from "framer-motion";
import { Target, BookOpen, Gift, Users, Heart, Shield, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const goals = [
  { icon: Shield, title: "Strengthening Our Faith", desc: "Building a strong foundation through prayer, worship, and fellowship." },
  { icon: BookOpen, title: "Teaching of God's Word", desc: "Studying the Bible as our guide to faith and practice." },
  { icon: Gift, title: "Offering of Our Talent(s)", desc: "Using our God-given gifts to serve the church and community." },
  { icon: Users, title: "Nurturing Our Families", desc: "Raising children and youth into a committed relationship with Jesus Christ." },
  { icon: Heart, title: "Empowering Our Community", desc: "Helping persons in need and working for God's peace and healing everywhere." },
];

const pastorImage = "/images/inside-the-church.jpg";
const communityImage = "/images/church-last-2.png";

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Our Church"
        subtitle="Learn about our mission, vision, and the heart behind Netherlands Baptist Church."
        imageSrc="/images/inside-the-church.jpg"
        badge="Welcome to our church family"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading
                align="center"
                eyebrow="Who we are"
                title="A Bible-believing church family in Netherlands"
                subtitle="We’re here to worship Jesus, grow in His Word, and serve Culemborg with love and faith." 
              />
            </motion.div>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2">
                <Card className="border-accent/20">
                  <CardContent className="p-7">
                    <p className="text-muted-foreground leading-relaxed">
                      Netherlands Baptist Church is a community of believers committed to the Gospel of Jesus Christ. We gather every
                      week to worship, to learn from Scripture, and to build one another up through prayer and fellowship. Whether
                      you are exploring faith or looking for a church home, you are welcome here.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Our heart is to see lives transformed by the grace of God, families strengthened, and the whole community
                      served with compassion. We aim to be a church that is warm, grounded in the Bible, and active in love.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <Card className="border-accent/20 bg-muted">
                  <CardContent className="p-7">
                    <p className="text-sm text-muted-foreground">Join us in person</p>
                    <p className="mt-2 text-xl font-serif font-bold text-foreground">Sunday Service</p>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                        <span>9:00 AM – 12:30 PM</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                        <a
                          href="https://maps.app.goo.gl/Yh472YxXXoBqNGHT9"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          2032 Middelcoopstraat 19, 4102 CE Culemborg
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex justify-center mb-8">
              <SectionHeading align="center" eyebrow="Our purpose" title="Our mission" />
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>• To worship God and celebrate life together.</p>
              <p>• To study the Bible as our guide to faith and practice.</p>
              <p>• To love one another as Christ loves us.</p>
              <p>• To raise our children and youth into a commitment relationship with Jesus Christ and the Church.</p>
              <p>• To provide opportunities for persons of all ages, abilities, and backgrounds to grow spiritually with one another in Christ.</p>
              <p>• To welcome newcomers into our circles of relationship.</p>
              <p>• To help persons in need as we are able.</p>
              <p>• To pray and work for God's peace and healing everywhere.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <SectionHeading
                align="center"
                eyebrow="What to expect"
                title="A welcoming service, a clear message, a caring community"
                subtitle="Here’s what a typical Sunday looks like when you visit us."
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Warm welcome",
                  desc: "From the moment you arrive, you’ll be greeted with kindness and helped to feel at home.",
                },
                {
                  icon: BookOpen,
                  title: "Bible-centered preaching",
                  desc: "We preach the Word of God in a way that is clear, practical, and faithful to Scripture.",
                },
                {
                  icon: Users,
                  title: "Fellowship & prayer",
                  desc: "We believe spiritual growth happens together—through prayer, friendships, and serving.",
                },
              ].map((it, i) => (
                <motion.div
                  key={it.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
                >
                  <Card className="h-full border-accent/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-7">
                      <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center">
                        <it.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mt-4 text-lg font-serif font-bold text-foreground">{it.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-6">Our Vision</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed italic">
              To transform sinners into a holy people who find fulfillment for their hunger for beauty, meaning, 
              and eternal satisfaction in the glory of Christ alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="Our goals"
              title="Growing together in Christ"
              subtitle="Core areas we focus on as we serve God and our community."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {goals.map((goal, i) => (
              <motion.div key={goal.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <Card className="h-full border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <goal.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h3 className="font-serif font-bold text-foreground mb-2">{goal.title}</h3>
                    <p className="text-muted-foreground text-sm">{goal.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              src={pastorImage} alt="Pastor Nxumalo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent shadow-xl shrink-0"
            />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Pastor Netherlands</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pastor Netherlands leads our congregation with passion, wisdom, and a deep love for God's Word. 
                Under his guidance, Netherlands Baptist Church continues to grow as a beacon of hope and faith in our community. 
                His heart for the people of Netherlands and beyond shines through every sermon, visit, and prayer.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our leadership team is committed to caring for people, strengthening families, and equipping every believer to
                serve in their gifts. If you need prayer or support, we’ll gladly walk with you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="relative py-16">
        <img src={communityImage} alt="Community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-primary-foreground max-w-2xl mx-auto leading-relaxed">
            "If the LORD delights in a man's way, he makes his steps firm; though he stumble, he will not fall, 
            for the LORD upholds him with his hand."
          </p>
          <p className="mt-4 text-accent font-semibold">Psalm 37:23-24 (NIV)</p>
        </div>
      </section>

      <CtaBand
        title="Plan your visit"
        subtitle="We’d love to welcome you in person. Come as you are and worship with us this Sunday."
        primaryTo="/contact"
        primaryLabel="Plan a Visit"
        secondaryTo="/events"
        secondaryLabel="Service Times"
        imageSrc="/images/church-last.png"
      />
    </Layout>
  );
};

export default About;
