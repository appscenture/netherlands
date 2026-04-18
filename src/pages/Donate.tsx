import { motion } from "framer-motion";
import { Landmark, Smartphone, HandHeart, Heart, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Donate = () => {
  return (
    <Layout>
      <PageHero
        title="Give & Support"
        subtitle="Your generous giving helps us serve God's kingdom and our community."
        imageSrc="/images/church-last-2.png"
        badge="Thank you for your generosity"
      />

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 bg-muted">
              <CardContent className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Need help giving?</p>
                  <p className="mt-1 text-lg font-serif font-bold text-foreground">
                    Call the church office for bank details and giving assistance
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Phone: +31 6 5561 0043</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                    <a href="tel:+31655610043">Call Now</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:+31655610043">Call for Bank Details</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
          <p className="text-lg italic text-muted-foreground leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
            for God loves a cheerful giver."
          </p>
          <p className="mt-2 text-accent font-semibold">— 2 Corinthians 9:7 (NIV)</p>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="Giving"
              title="Ways to give"
              subtitle="Your generosity helps us serve the Gospel and support our community."
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Bank Transfer */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="h-full border-accent/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Landmark className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground text-center mb-4">Bank Transfer</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">Bank:</strong> CBZ Bank</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">Account Name:</strong> Netherlands Baptist Church</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">Account Number:</strong> Call +31 6 5561 0043</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">Branch:</strong> Culemborg</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Please use your name as the reference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* EcoCash */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.1 } } }}>
              <Card className="h-full border-accent/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground text-center mb-4">EcoCash / Mobile Money</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">EcoCash Number:</strong> +31 6 5561 0043</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-muted-foreground"><strong className="text-foreground">Name:</strong> Netherlands Baptist Church</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">How to Send:</h4>
                    <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>Dial *151#</li>
                      <li>Select "Send Money"</li>
                      <li>Enter the number above</li>
                      <li>Enter amount and confirm</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cash & Materials */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.2 } } }}>
              <Card className="h-full border-accent/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Package className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground text-center mb-4">Cash & Material Donations</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="bg-muted rounded-lg p-3">
                      <p><strong className="text-foreground">Sunday Offering:</strong> Give during any Sunday service at the church.</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p><strong className="text-foreground">Drop-Off:</strong> Bring cash or material donations to the church office during the week.</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p><strong className="text-foreground">Materials:</strong> Food, clothing, school supplies, building materials — anything that can bless our community.</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Every gift, big or small, makes a difference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-12 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <HandHeart className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold mb-2">Thank You for Your Generosity</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Your support enables us to continue our work in spreading the Gospel and serving the community of Netherlands.
            God bless you abundantly!
          </p>
        </div>
      </section>

      <CtaBand
        title="Partner with us"
        subtitle="Your giving helps us preach the Gospel, care for families, and serve our community with love."
        primaryTo="/donate"
        primaryLabel="Give Now"
        secondaryTo="/contact"
        secondaryLabel="Ask a Question"
        imageSrc="/images/inside-the-church.jpg"
      />
    </Layout>
  );
};

export default Donate;
