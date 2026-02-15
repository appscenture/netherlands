import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsOfUse = () => {
  return (
    <Layout>
      <PageHero
        title="Terms of Use"
        subtitle="General terms for using this website."
        imageSrc="/images/church-last-2.webp"
        badge="Website terms"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              eyebrow="Policies"
              title="Terms of use"
              subtitle="General terms for using this website and its content."
            />
            <p className="text-muted-foreground leading-relaxed">
              By using this website, you agree to use it respectfully and lawfully.
            </p>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Content on this website is provided for church information and community communication. Service times and
                events may change; please confirm details with the church office if needed.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">No Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided on an "as is" basis without warranties of any kind.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-foreground">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact the church office using the Contact page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title="Need clarification?"
        subtitle="If you have questions about these terms, contact the church office and we’ll assist you."
        primaryTo="/contact"
        primaryLabel="Contact Us"
        secondaryTo="/privacy"
        secondaryLabel="Privacy Policy"
        imageSrc="/images/church-last-2.webp"
      />
    </Layout>
  );
};

export default TermsOfUse;
