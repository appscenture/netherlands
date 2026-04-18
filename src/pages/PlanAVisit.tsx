import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Mail, MapPin, Phone, User, Users } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type VisitForm = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  visitDate: string;
  service: string;
  partySize: string;
  childrenCount: string;
  firstTime: string;
  howDidYouHear: string;
  prayerRequests: string;
  specialRequests: string;
  tellUsMore: string;
};

const PlanAVisit = () => {
  const { toast } = useToast();

  const initialForm: VisitForm = useMemo(
    () => ({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      visitDate: "",
      service: "Sunday Service (9:00 AM – 12:30 PM)",
      partySize: "",
      childrenCount: "",
      firstTime: "Yes",
      howDidYouHear: "",
      prayerRequests: "",
      specialRequests: "",
      tellUsMore: "",
    }),
    [],
  );

  const [form, setForm] = useState<VisitForm>(initialForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!form.fullName || !form.phone || !form.tellUsMore) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Format the message for WhatsApp with bold labels
    const message = `*VISIT REQUEST FORM*

*Full Name:*
${form.fullName}

*Phone Number:*
${form.phone}

*Email Address:*
${form.email || "Not provided"}

*City / Suburb:*
${form.city || "Not provided"}

*Home Address:*
${form.address || "Not provided"}

*When are you planning to visit?*
${form.visitDate || "Not specified"}

*Service:*
${form.service}

*How many people are coming?*
${form.partySize || "Not specified"}

*Children (if any):*
${form.childrenCount || "None"}

*Is this your first time visiting?*
${form.firstTime}

*How did you hear about us?*
${form.howDidYouHear || "Not provided"}

*Any requests for your visit?*
${form.specialRequests || "None"}

*Prayer requests (optional):*
${form.prayerRequests || "None"}

*Tell us more about you:*
${form.tellUsMore}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/628810374905908?text=${encodedMessage}`;

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please complete your message on WhatsApp.",
    });

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

    setForm(initialForm);
  };

  return (
    <Layout>
      <PageHero
        title="Plan a Visit"
        subtitle="Tell us about your visit so we can prepare a warm welcome for you and your family."
        imageSrc="/images/church-last-2.png"
        badge="We can’t wait to meet you"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-3">
              <SectionHeading
                eyebrow="Visitor form"
                title="Share your details & any requests"
                subtitle="Fill in as much as you can—this helps us serve you better."
              />

              <Card className="mt-6 border-accent/20">
                <CardContent className="p-7">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full name</Label>
                        <Input
                          id="fullName"
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input
                          id="phone"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+31 6 5561 0043"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City / Suburb</Label>
                        <Input
                          id="city"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          placeholder="Culemborg"
                        />
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address">Home address (optional)</Label>
                        <Input
                          id="address"
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          placeholder="Street / Area"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="visitDate">When are you planning to visit?</Label>
                        <Input
                          id="visitDate"
                          type="date"
                          value={form.visitDate}
                          onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service</Label>
                        <Input
                          id="service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partySize">How many people are coming?</Label>
                        <Input
                          id="partySize"
                          value={form.partySize}
                          onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                          placeholder="e.g. 2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childrenCount">Children (if any)</Label>
                        <Input
                          id="childrenCount"
                          value={form.childrenCount}
                          onChange={(e) => setForm({ ...form, childrenCount: e.target.value })}
                          placeholder="e.g. 1"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="firstTime">Is this your first time visiting?</Label>
                        <Input
                          id="firstTime"
                          value={form.firstTime}
                          onChange={(e) => setForm({ ...form, firstTime: e.target.value })}
                          placeholder="Yes / No"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                        <Input
                          id="howDidYouHear"
                          value={form.howDidYouHear}
                          onChange={(e) => setForm({ ...form, howDidYouHear: e.target.value })}
                          placeholder="Friend, family, social media..."
                        />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Any requests for your visit?</Label>
                        <Textarea
                          id="specialRequests"
                          value={form.specialRequests}
                          onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                          placeholder="E.g. accessibility needs, direction help, seating request, children’s ministry questions..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="prayerRequests">Prayer requests (optional)</Label>
                        <Textarea
                          id="prayerRequests"
                          value={form.prayerRequests}
                          onChange={(e) => setForm({ ...form, prayerRequests: e.target.value })}
                          placeholder="If you’d like us to pray with you, share your request here."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tellUsMore">Tell us more about you</Label>
                        <Textarea
                          id="tellUsMore"
                          value={form.tellUsMore}
                          onChange={(e) => setForm({ ...form, tellUsMore: e.target.value })}
                          placeholder="What are you hoping for? How can we serve you?"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                      <Button type="submit" className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
                        Submit visit request
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        This form doesn’t charge anything. We use your details only to assist with your visit.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-2">
              <Card className="border-accent/20 bg-muted">
                <CardContent className="p-7">
                  <p className="text-sm text-muted-foreground">Need help before you visit?</p>
                  <h3 className="mt-2 text-xl font-serif font-bold text-foreground">Contact the church</h3>

                  <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      <a
                        href="https://maps.app.goo.gl/Yh472YxXXoBqNGHT9"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        2032 Middelcoopstraat 19, 4102 CE Culemborg, Netherlands
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent shrink-0" />
                      <a href="tel:+31655610043" className="hover:text-foreground transition-colors">+31 6 5561 0043</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent shrink-0" />
                      <a href="mailto:netherlands@netherlandschurch.com" className="hover:text-foreground transition-colors">netherlands@netherlandschurch.com</a>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-background p-4">
                      <CalendarDays className="h-5 w-5 text-accent shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Sunday Service</p>
                        <p className="text-xs text-muted-foreground">9:00 AM – 12:30 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-background p-4">
                      <Users className="h-5 w-5 text-accent shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Bring the whole family</p>
                        <p className="text-xs text-muted-foreground">We welcome visitors of all ages and backgrounds.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-background p-4">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Come as you are</p>
                        <p className="text-xs text-muted-foreground">No special dress code—just come ready to worship.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-accent/20 bg-background p-4">
                      <User className="h-5 w-5 text-accent shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">New to faith?</p>
                        <p className="text-xs text-muted-foreground">You’re welcome to ask questions—we’d love to talk with you.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand
        title="We’re ready to welcome you"
        subtitle="If you have questions before you come, please contact us. We would love to help you plan your visit."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/donate"
        secondaryLabel="Give"
      />
    </Layout>
  );
};

export default PlanAVisit;
