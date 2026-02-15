import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Calendar, HandHeart, ArrowRight, Clock, MapPin, Sparkles, Church, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const heroImage = "/images/church-last.webp";
const pastorImage = "/images/inside-the-church.jpg";
const communityImage = "/images/church-last-2.webp";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen min-h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/65" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[hsl(var(--wheat))]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/25 blur-3xl" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          {/* <div className="flex items-center justify-center mb-5">
            <img
              src="/nketa-logo.png"
              alt="Nketa Baptist Church"
              className="h-16 w-16 object-contain"
              loading="eager"
            />
          </div> */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--wheat))]" />
            Sunday Service 9:00 AM – 12:30 PM
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-4 leading-tight">
            Welcome to<br />
            <span className="text-[hsl(var(--wheat))]">Nketa 8 Baptist Church</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-light">
            A place of worship, love, and community in Bulawayo, Zimbabwe
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95 text-base px-8">
              <Link to="/about">Join Us This Sunday</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 text-base px-8">
              <Link to="/contact">Visit Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="relative -mt-10 md:-mt-14 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: "Service Times", desc: "Sunday 9:00 AM – 12:30 PM" },
              { icon: MapPin, title: "Our Location", desc: "Nketa 8, Bulawayo" },
              { icon: HandHeart, title: "Need Prayer?", desc: "We’re here for you" },
            ].map((it) => (
              <Card key={it.title} className="border-accent/20 bg-background shadow-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <it.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground leading-tight">{it.title}</p>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We proclaim and teach the liberating Gospel of Jesus Christ, for the purpose of gaining followers for Christ, 
              who will share His redeeming love & power with all they meet.
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Church, title: "Worship", desc: "Gather in praise and prayer." },
              { icon: BookOpen, title: "Discipleship", desc: "Grow in God's Word together." },
              { icon: Users, title: "Community", desc: "Belong to a caring family." },
              { icon: HandHeart, title: "Outreach", desc: "Serve with compassion and faith." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.06 } } }}
              >
                <Card className="h-full border-accent/20">
                  <CardContent className="p-7">
                    <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center">
                      <f.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mt-4 text-lg font-serif font-bold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="inline-flex items-center gap-2 rounded-full bg-background border border-accent/20 px-4 py-2 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                Welcome home
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-extrabold text-foreground">
                A vibrant community built on
                <span className="text-[hsl(var(--primary))]"> faith</span>,
                <span className="text-[hsl(var(--wheat))]"> love</span> and hope.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you’re visiting for the first time or looking for a church family, there’s a place for you at Nketa 8
                Baptist Church. Join us for worship, Bible study, and fellowship.
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                {[
                  { day: "Sunday", time: "9:00 AM – 12:30 PM", label: "Sunday Service" },
                  { day: "Wednesday", time: "6:00 PM", label: "Bible Study" },
                  { day: "Friday", time: "6:00 PM", label: "Prayer" },
                ].map((s) => (
                  <Card key={s.day} className="border-accent/20">
                    <CardContent className="p-5">
                      <p className="text-xs text-muted-foreground">{s.day}</p>
                      <p className="mt-1 font-serif font-bold text-foreground">{s.time}</p>
                      <p className="mt-0.5 text-xs text-accent font-medium">{s.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                  <Link to="/contact">Plan Your Visit</Link>
                </Button>
                <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="overflow-hidden border-accent/20">
                <CardContent className="p-0">
                  <img src={pastorImage} alt="Inside the church" className="w-full h-[420px] object-cover" loading="lazy" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Scripture */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="h-full border-accent/30 bg-card">
                <CardContent className="p-8">
                  <BookOpen className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To transform sinners into a holy people who find fulfillment for their hunger for beauty, meaning, 
                    and eternal satisfaction in the glory of Christ alone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="h-full border-accent/30 bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <Heart className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-2xl font-serif font-bold mb-4">Psalm 37:23-24</h3>
                  <p className="text-primary-foreground/80 leading-relaxed italic">
                    "If the LORD delights in a man's way, he makes his steps firm; though he stumble, he will not fall, 
                    for the LORD upholds him with his hand."
                  </p>
                  <p className="mt-2 text-sm text-accent">— NIV</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[hsl(var(--wheat))] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "9:00 AM", label: "Sunday Service" },
              { value: "Midweek", label: "Bible Study" },
              { value: "Prayer", label: "Friday Meeting" },
              { value: "Community", label: "Outreach & Care" },
            ].map((s) => (
              <Card key={s.label} className="bg-white/10 border-white/15 text-white">
                <CardContent className="p-7 text-center">
                  <p className="text-2xl font-serif font-extrabold">{s.value}</p>
                  <p className="mt-1 text-xs text-white/75">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Get Involved</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, title: "Ministries", desc: "Find your place in our church family", to: "/ministries" },
              { icon: Calendar, title: "Events", desc: "Join our upcoming gatherings", to: "/events" },
              { icon: HandHeart, title: "Donate", desc: "Support God's work in our community", to: "/donate" },
            ].map((item) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <Link to={item.to}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/50 group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                      <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Featured Sermons & Events</h2>
                <p className="text-muted-foreground mt-1">Stay connected with weekly preaching and upcoming gatherings.</p>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                  <Link to="/sermons">View Sermons</Link>
                </Button>
                <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                  <Link to="/events">View Events</Link>
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-accent/20">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center">
                      <Mic className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Latest sermon</p>
                      <p className="font-serif font-bold text-foreground">Walking in God's Purpose</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Speaker:</span> Pastor Nxumalo</p>
                    <p><span className="text-foreground font-medium">Scripture:</span> Jeremiah 29:11</p>
                    <p><span className="text-foreground font-medium">When:</span> Sunday 9:00 AM – 12:30 PM</p>
                    <p><span className="text-foreground font-medium">Where:</span> Main Sanctuary</p>
                  </div>
                  <Button asChild className="mt-6 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                    <Link to="/sermons">Explore Sermons</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img src="/images/birthday.jpg" alt="Event" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs text-white/75">Upcoming event</p>
                      <p className="font-serif font-extrabold text-lg">Community Outreach Day</p>
                      <p className="text-sm text-white/85">Last Saturday of the Month • 9:00 AM</p>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Serving Nketa 8 through practical acts of love and kindness. Join us as we share hope, help, and the love of Christ.
                    </p>
                    <Button asChild variant="outline" className="mt-6 border-accent/40 text-foreground hover:bg-accent/10">
                      <Link to="/events">See All Events</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Recent Moments</h2>
                <p className="text-muted-foreground mt-1">See highlights from our church life and fellowship.</p>
              </div>
              <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/images/inside-the-church.jpg", alt: "Inside the church" },
                { src: "/images/church-last.webp", alt: "Church gathering" },
                { src: "/images/birthday.jpg", alt: "Birthday celebration" },
              ].map((img) => (
                <Link key={img.src} to="/gallery" className="block">
                  <Card className="overflow-hidden border-accent/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" loading="lazy" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={communityImage} alt="Community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs text-white/85 backdrop-blur">
                <Heart className="h-4 w-4 text-[hsl(var(--wheat))]" />
                You're welcome here
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-extrabold text-white">
                Plan your first visit to Nketa 8 Baptist Church
              </h2>
              <p className="mt-3 text-white/80 leading-relaxed">
                Come as you are. We’ll help you find your way, meet our family, and feel at home from the moment you arrive.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2">
              <Card className="bg-background/95 backdrop-blur border-white/15">
                <CardContent className="p-7">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      <span>2032 Nketa 8, P.O Box 5066 Nkulumane, Bulawayo, Zimbabwe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent shrink-0" />
                      <span>Sunday Service 9:00 AM – 12:30 PM</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                      <Link to="/contact">Get Directions</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10">
                      <Link to="/events">See Events</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="shrink-0">
              <img
                src={pastorImage}
                alt="Nketa 8 Baptist Church"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent shadow-xl"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Welcome from Pastor Nxumalo</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are so glad you are here! At Nketa 8 Baptist Church, we believe in the power of community, worship, 
                and the transforming love of Jesus Christ. Whether you are visiting for the first time or have been walking 
                with us for years, you are part of our family. Come as you are — let us worship together and grow in faith.
              </p>
              <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
