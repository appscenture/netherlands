import { motion } from "framer-motion";
import { Users, Heart, Shield, Baby, Music, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ministries = [
  {
    icon: Users,
    title: "Youth Ministry",
    desc: "Empowering young people to grow in faith and become leaders. Weekly fellowships, Bible studies, and youth events designed to build strong foundations in Christ.",
  },
  {
    icon: Heart,
    title: "Women's Ministry",
    desc: "A sisterhood of faith, prayer, and support. Our women come together to study God's Word, encourage one another, and serve the community with love.",
  },
  {
    icon: Shield,
    title: "Men's Ministry",
    desc: "Building godly men through fellowship, accountability, and service. We equip men to lead in their homes, church, and community.",
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    desc: "Nurturing the faith of our youngest members through fun, interactive Bible lessons, songs, and activities that plant seeds of God's love.",
  },
  {
    icon: Music,
    title: "Worship Ministry",
    desc: "Leading our congregation in praise and worship. Our choir and musicians create an atmosphere where hearts are lifted to God through song.",
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    desc: "Serving the people of Netherlands and beyond. From food drives to home visits, we extend the love of Christ to those in need.",
  },
];

const Ministries = () => {
  return (
    <Layout>
      <PageHero
        title="Our Ministries"
        subtitle="Discover where God is calling you to serve and grow."
        imageSrc="/images/awana.jpg"
        badge="Serve • Grow • Belong"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <SectionHeading
              align="center"
              eyebrow="Ministry areas"
              title="Find your place to serve"
              subtitle="Every ministry is a doorway to growth, fellowship, and impact."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministries.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <Card className="h-full border-accent/20 hover:shadow-xl transition-shadow hover:border-accent/50">
                  <CardContent className="p-8">
                    <m.icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Want to get involved?</p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Contact Us to Join a Ministry</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Want to get involved?"
        subtitle="We’ll help you connect with a ministry, find community, and start serving in a way that fits your gifts."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/events"
        secondaryLabel="See Events"
        imageSrc="/images/church-last.webp"
      />
    </Layout>
  );
};

export default Ministries;
