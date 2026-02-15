import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle information you share with us."
        imageSrc="/images/church-last.webp"
        badge="Your privacy matters"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              eyebrow="Policies"
              title="Privacy policy"
              subtitle="A simple explanation of how we handle information you share with us."
            />
            <p className="text-muted-foreground leading-relaxed">
              This website is provided by Nketa 8 Baptist Church. We respect your privacy and aim to be transparent about any
              information we collect.
            </p>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Information You Provide</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you contact us using the contact form, you may provide your name, email address, subject, and message.
                This information is used only to respond to your inquiry.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Cookies & Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not intentionally collect personal data through cookies on this site. If analytics are added in the
                future, this policy will be updated to describe what is collected and why.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This site may contain links to third-party websites. We are not responsible for the privacy practices of
                those sites.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy questions, please contact the church office using the details on the Contact page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Questions about privacy?"
        subtitle="If you have concerns about information shared through our contact form, please reach out to the church office."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/terms"
        secondaryLabel="Terms of Use"
        imageSrc="/images/church-last.webp"
      />
    </Layout>
  );
};

export default PrivacyPolicy;
