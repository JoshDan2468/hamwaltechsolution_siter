import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import logo from "/nav_icon.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className='bg-blue-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Newsletter Section
        <div className="mb-12 pb-12 border-b border-blue-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3">Stay Informed</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to receive updates on our services and industry insights
            </p>
            <NewsletterSignup />
          </div>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='col-span-1 md:col-span-2'>
            <div className='inline-flex items-center gap-2 mb-4 bg-white p-2 py-1 rounded'>
              <img
                className=' w-10 h-10 sm:w-8 sm:h-8 md:w-15 md:h-15 '
                src={logo}
                alt='Hamwal Tech Solution Logo'
              />
              <div>
                <div
                  className='text-blue-900 uppercase  tracking-tight text-[12px] md:text-sm lg:text-md leading-none
    font-roboto font-black'
                  style={{
                    lineHeight: "1",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "900",
                  }}
                >
                  Hamwal Tech Solution
                </div>
                <div
                  className='text-[10px]
    sm:text-xs
    md:text-sm
    text-gray-800
    italic
    tracking-wide
    leading-relaxed
    font-black'
                  style={{
                    // fontSize: "0.75rem",
                    lineHeight: "1.5",
                    fontFamily: "Dancing Script, cursive",
                    fontWeight: "900",
                  }}
                >
                  Your Satisfaction Is Our Priority
                </div>
              </div>
            </div>
            <p className='text-gray-400 mb-4 max-w-md font-roboto'>
              Delivering integrated technology, energy, and engineering
              solutions for sustainable industrial growth and operational
              excellence.
            </p>
            <div className='space-y-2 font-roboto text-sm'>
              <a
                href='tel:+2348012345678'
                className='flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-roboto'
              >
                <Phone className='w-4 h-4' />
                +2348078932729
              </a>
              <a
                href='mailto:info@hamwaltechsolution.com'
                className='flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors'
              >
                <Mail className='w-4 h-4' />
                info@hamwaltechsolution.com
              </a>
              <a
                href='https://wa.me/2348144208770'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors'
              >
                <MessageCircle className='w-4 h-4' />
                WhatsApp
              </a>
              <div className='flex items-start gap-2'>
                <MapPin className='w-4 h-4 mt-1 shrink-0' />
                <span>
                  Head Office: No 34 Adegoke Street, Via Alh Masha Road,
                  Surulere, Lagos, Nigeria. <br />
                </span>
              </div>
              <div className='flex items-start gap-2 ml-6'>
                <span>
                  Operational Office: 25,Shoremekun Street, Via Mushin Olosha
                  bustop, Mushin,Lagos, Nigeria. <br />
                </span>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className='mt-6'>
            <p className='text-white mb-3 font-roboto text-sm'>Follow Us</p>

            <div className='space-y-3'>
              {/* Facebook */}
              <a
                href='https://www.facebook.com/hamwaltechsolution'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors'
              >
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-900'>
                  <FaFacebookF size={14} />
                </span>
                <span className='text-sm font-roboto'>Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/company/hamwal-tech-solution'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors'
              >
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-900'>
                  <FaLinkedinIn size={14} />
                </span>
                <span className='text-sm font-roboto'>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white mb-4 font-roboto'>Quick Links</h3>
            <ul className='space-y-2 font-roboto text-sm'>
              <li>
                <Link to='/' className='hover:text-green-400 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='hover:text-green-400 transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='hover:text-green-400 transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/csr'
                  className='hover:text-green-400 transition-colors'
                >
                  CSR
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-green-400 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white mb-4'>Our Services</h3>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li>Energy & Gas Solutions</li>
              <li>Engineering & Construction</li>
              <li>Asset Integrity</li>
              <li>Digital Technology & AI</li>
              <li>Oil & Gas Support</li>
              <li>Business Advisory</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-blue-800 mt-8 pt-8 text-center text-gray-400 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} Hamwal Tech Solution Limited. All
            rights reserved.
          </p>
          <p className='mt-2'>Integrated Solutions for a Sustainable Future</p>
        </div>
      </div>
    </footer>
  );
}
