import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/church-life", label: "Church Life" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const isOpenRef = useRef(false);
  const openedAtRef = useRef(0);
  const location = useLocation();
  const isChurchLife = ["/church-life", "/ministries", "/leadership", "/sermons"].includes(location.pathname);

  const toggleMenu = () => {
    setIsHidden(false);
    lastScrollYRef.current = window.scrollY;
    const next = !isOpenRef.current;
    if (next) openedAtRef.current = Date.now();
    setIsOpen(next);
  };

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const lastY = lastScrollYRef.current;
        const delta = currentY - lastY;

        if (isOpenRef.current && Date.now() - openedAtRef.current < 700) {
          lastScrollYRef.current = currentY;
          tickingRef.current = false;
          return;
        }

        if (currentY < 24) {
          setIsHidden(false);
        }

        if (Math.abs(delta) > 8) {
          if (delta > 0 && currentY > 80) {
            setIsHidden(true);
            setIsOpen(false);
          } else {
            setIsHidden(false);
          }
        }

        lastScrollYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="hidden md:block bg-[hsl(var(--church-blue))] text-white">
        <div className="container mx-auto px-4">
          <div className="h-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-5">
              <a
                href="https://maps.app.goo.gl/Yh472YxXXoBqNGHT9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[hsl(var(--wheat))]" />
                2032 Middelcoopstraat 19, 4102 CE Culemborg
              </a>
              <a
                href="tel:+31655610043"
                className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[hsl(var(--wheat))]" />
                +31 6 5561 0043
              </a>
              <span className="hidden lg:inline-flex items-center gap-2 text-white/85">
                <Clock className="h-3.5 w-3.5 text-[hsl(var(--wheat))]" />
                Sunday Service: 9:00 AM – 12:30 PM
              </span>
            </div>

            <a
              href="https://netherlandschurch.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors"
            >
              Netherlands Church
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-background/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-[hsl(var(--church-blue))]">
              <img
                src="/nketa-logo.png"
                alt="Netherlands Baptist Church"
                className="h-9 w-9 shrink-0 object-contain"
                loading="eager"
              />
              <div>
                <span className="text-lg md:text-xl font-serif font-bold">Netherlands Baptist Church</span>
                <span className="hidden md:block text-xs text-[hsl(var(--church-blue))] opacity-70">Culemborg, Netherlands</span>
              </div>
            </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  (link.to === "/church-life" ? isChurchLife : location.pathname === link.to)
                    ? "bg-[hsl(var(--church-blue))] text-white"
                    : "text-[hsl(var(--church-blue))]/80 hover:text-[hsl(var(--church-blue))] hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95">
              <Link to="/plan-a-visit">Plan a Visit</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[hsl(var(--church-blue))] hover:bg-muted"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
            <div className="relative z-50 pb-4 space-y-1 animate-fade-in-up bg-background/95 backdrop-blur-md border-b border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    (link.to === "/church-life" ? isChurchLife : location.pathname === link.to)
                      ? "bg-[hsl(var(--church-blue))] text-white"
                      : "text-[hsl(var(--church-blue))]/80 hover:text-[hsl(var(--church-blue))] hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Button
                  asChild
                  className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95"
                >
                  <Link to="/plan-a-visit" onClick={() => setIsOpen(false)}>
                    Plan a Visit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
