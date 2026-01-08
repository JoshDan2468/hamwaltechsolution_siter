import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/nav_icon.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   setMobileMenuOpen(false);
  // }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/csr", label: "CSR" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-1'>
            <img
              className='w-10 h-10 sm:w-8 sm:h-8 md:w-15 md:h-15'
              src={logo}
              alt='Hamwal Tech Solution Logo'
            />
            <div>
              <div
                className='text-blue-900 uppercase  tracking-tight
    text-[12px]
    md:text-sm
    lg:text-md
    leading-none
    font-roboto font-black'
                style={{
                  // fontSize: "0.85rem",
                  lineHeight: "1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "900",
                }}
              >
                Hamwal Tech Solution
              </div>
              <div
                className='text-xs text-gray-800  tracking-wide'
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.5",
                  fontFamily: "Dancing Script, cursive",
                  fontWeight: "900",
                }}
              >
                Your Satisfaction Our Priority
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-green-600 ${
                  location.pathname === link.to
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact CTA */}
          <Link
            to='/contact'
            className='hidden lg:flex items-center gap-2 bg-linear-to-r from-blue-900 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow'
          >
            <Mail className='w-4 h-4' />
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-label='Toggle navigation menu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 text-gray-700'
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-white border-t border-gray-200'
          >
            <div className='px-4 py-4 space-y-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    location.pathname === link.to
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to='/contact'
                onClick={() => setMobileMenuOpen(false)}
                className='flex items-center justify-center gap-2 bg-linear-to-r from-blue-900 to-green-600 text-white px-6 py-3 rounded-lg mt-4'
              >
                <Mail className='w-4 h-4' />
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
