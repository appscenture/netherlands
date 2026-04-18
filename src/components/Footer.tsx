import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/15">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-accent text-xs font-semibold tracking-wide">WORSHIP WITH US</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-serif font-extrabold">Join us this Sunday 9:00 AM – 12:30 PM</h3>
              <p className="mt-2 text-primary-foreground/70 text-sm max-w-2xl">
                Come as you are. Experience worship, fellowship, and the preaching of God's Word at Netherlands Baptist Church.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/plan-a-visit">Plan a Visit</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/donate">Give</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/nketa-logo.png"
                alt="Netherlands Baptist Church"
                className="h-7 w-7 shrink-0 object-contain"
                loading="lazy"
              />
              <h3 className="text-lg font-serif font-bold">Netherlands Baptist Church</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A place of worship, fellowship, and community in the heart of Netherlands, Culemborg, Netherlands.
            </p>
            <div className="mt-5 space-y-2 text-sm text-primary-foreground/75">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2032%20Netherlands%20Culemborg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  2032 Middelcoopstraat 19, 4102 CE Culemborg, Netherlands
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+31655610043" className="hover:text-accent transition-colors">+31 6 5561 0043</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/ministries", label: "Ministries" },
                { to: "/leadership", label: "Leadership" },
                { to: "/sermons", label: "Sermons" },
                { to: "/events", label: "Events" },
                { to: "/gallery", label: "Gallery" },
                { to: "/donate", label: "Donate" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Use" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-accent mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2032%20Netherlands%20Culemborg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  2032 Middelcoopstraat 19, 4102 CE Culemborg, Netherlands
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+31655610043" className="hover:text-accent transition-colors">+31 6 5561 0043</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+31655610043" className="hover:text-accent transition-colors">+31 6 5561 0043</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:netherlands@netherlandschurch.com" className="hover:text-accent transition-colors">netherlands@netherlandschurch.com</a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-semibold text-accent mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><strong className="text-primary-foreground">Sunday Service:</strong> 9:00 AM – 12:30 PM</li>
              <li><strong className="text-primary-foreground">Bible Study:</strong> Wednesday 6:00 PM</li>
              <li><strong className="text-primary-foreground">Prayer Meeting:</strong> Friday 6:00 PM</li>
            </ul>
            <div className="mt-5">
              <Button asChild variant="outline" className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/events">See Full Calendar</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <span>© {new Date().getFullYear()} Netherlands Baptist Church. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
