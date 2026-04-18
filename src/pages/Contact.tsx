import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you soon. God bless!",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for inquiries, prayer requests, or to plan a visit."
        imageSrc="/images/church-last.png"
        badge="We’re here to help"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading
                eyebrow="Contact"
                title="Find us"
                subtitle="Reach out for inquiries, prayer requests, or to plan a visit."
              />

              <div className="space-y-6">
                <Card className="border-accent/20">
                  <CardContent className="p-5 flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Church Address</h3>
                      <a
                        href="https://maps.app.goo.gl/Yh472YxXXoBqNGHT9"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        2032 Middelcoopstraat 19<br />4102 CE Culemborg<br />Netherlands
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardContent className="p-5 flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:0772263129" className="text-muted-foreground text-sm hover:text-foreground transition-colors">077 226 3129</a>
                      <a href="tel:2639480776" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Office: 263-9-480776</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardContent className="p-5 flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Service Times</h3>
                      <p className="text-muted-foreground text-sm">Sunday Service: 9:00 AM – 12:30 PM</p>
                      <p className="text-muted-foreground text-sm">Bible Study: Wednesday 6:00 PM</p>
                      <p className="text-muted-foreground text-sm">Prayer: Friday 6:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading
                eyebrow="Message"
                title="Send us a message"
                subtitle="We’ll get back to you as soon as possible."
              />
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required placeholder="Prayer Request / Inquiry" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Your message..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need prayer or support?"
        subtitle="You’re not alone. Reach out and we’ll stand with you in prayer."
        primaryTo="/contact"
        primaryLabel="Send a Message"
        secondaryTo="/events"
        secondaryLabel="See Service Times"
        imageSrc="/images/church-last.png"
      />
    </Layout>
  );
};

export default Contact;
