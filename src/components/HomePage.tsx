import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { NewsletterSignup } from "./NewsletterSignup";
import { ArrowRight } from "lucide-react";
// import type { image } from "framer-motion/client";

const benefits = [
  {
    image: "./cylinder.jpg",
    title: "Energy & Gas Solutions",
    description:
      "LPG, CNG distribution, gas infrastructure, and clean renewable energy solutions.",
  },
  {
    image: "./auto.jpg",
    title: "Engineering Excellence",
    description:
      "Comprehensive engineering, construction, and project management services.",
  },
  {
    image: "./pipeline.jpg",
    title: "Asset Integrity",
    description:
      "Advanced corrosion control, pipeline management, and digital integrity systems.",
  },
  {
    image: "./ai.jpg",
    title: "Digital Technology & AI",
    description:
      "Digital twins, automation, enterprise software, and AI-driven solutions.",
  },
  {
    image: "./tower.jpg",
    title: "Oil & Gas Support",
    description:
      "Procurement, logistics, facility maintenance, and technical manpower supply.",
  },
  {
    image: "./environment.jpg",
    title: "Sustainable Solutions",
    description:
      "Environmentally responsible practices driving long-term value creation.",
  },
];

const partners = [
  { name: "acetop", image: "./partners/acetop.png" },
  { name: "fedfae", image: "./partners/fadfae.png" },
  { name: "agpc", image: "./partners/agpc.png" },
  { name: "arid", image: "./partners/arid.png" },
  { name: "daptem", image: "./partners/daptem.png" },
  { name: "doveheights", image: "./partners/dovaheights.png" },
  { name: "gexperts", image: "./partners/gexperts.png" },
  { name: "russel", image: "./partners/russel.png" },
  { name: "oau", image: "./partners/oau.png" },
];

const clients = [
  { name: "candid", image: "./clients/candidoil.png" },
  { name: "fedfae", image: "./clients/fadfae.png" },
  { name: "mdj", image: "./clients/mdj.png" },
  { name: "meme", image: "./clients/meme.png" },
  { name: "oak", image: "./clients/oak.png" },
  { name: "smart", image: "./clients/smart.png" },
];

export function HomePage() {
  // const [changeColor, setChangeColor] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <section className='relative min-h-200 sm:min-h-150 flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32'>
        <div className='absolute inset-0 z-0'>
          <img
            src='/home1.jpg'
            alt='Industrial plant'
            className='w-full h-full object-cover'
          />
          <div className={`absolute w-full inset-0 bg-blue-900/60`} />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ perspective: 1000 }}
          >
            <h1
              className='mb-6 max-w-5xl mx-auto text-white text-3xl sm:text-2xl md:text-4xl lg:text-20xl leading-tight font-bold font-poppins'
              style={{
                // fontSize: "3rem",
                lineHeight: "1.1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "700",
              }}
            >
              Delivering Integrated Technology, Energy & Engineering Solutions
              for a Sustainable Future
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-xl text-gray-200 mb-8 max-w-3xl mx-auto'
            style={{
              fontSize: "1rem",
              lineHeight: "1.4",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
            }}
          >
            A diversified technology, energy, and engineering company providing
            integrated solutions across asset integrity, oil & gas, gas
            solutions, digital technology, and infrastructure development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col mb-16 sm:mb-20 sm:flex-row gap-4 justify-center'
          >
            <Link
              to='/contact'
              className='inline-flex items-center justify-center gap-2 hover:bg-linear-to-r from-white-600 to-white-500 bg-linear-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-shadow  '
              style={{
                fontSize: "1rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Request a Proposal
              <ArrowRight className='w-5 h-5' />
            </Link>

            <Link
              // onClick={() => {
              //   setChangeColor(!changeColor);
              // }}
              to='/services'
              className='inline-flex items-center justify-center bg-white border-radius-50 text-blue-900 px-8 py-5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors '
              style={{
                fontSize: "1rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className='py-12 bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-8'
          >
            <p
              className='text-gray-600'
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Clients we have worked with
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center'>
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex items-center justify-center'
              >
                <div className='w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 flex items-center justify-center p-4'>
                  <img
                    src={client.image}
                    alt={client.name}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className='mb-6'
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                  color: "gray-600",
                }}
              >
                Integrated Energy, Engineering & Digital Solutions
              </h2>
              <div className='text-justify'>
                <p className='text-gray-600 mb-4 text-justify'>
                  HAMWAL TECH SOLUTION LIMITED is a multi-sectoral solutions
                  company established in 2013 to support the evolving needs of
                  the energy, engineering, industrial, and digital economy.
                  <br />
                  We combine technical expertise, technology-driven execution,
                  and strategic partnerships to deliver compliant, safe, and
                  scalable solutions across Nigeria and international markets.{" "}
                  <br />
                  Our integrated approach helps businesses overcome energy,
                  engineering, and operational challenges by providing reliable,
                  efficient, and sustainable solutions across oil & gas, gas
                  supply, infrastructure, and digital technology.
                </p>
              </div>
              <Link
                to='/about'
                className='inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors'
              >
                Learn More About Us
                <ArrowRight className='w-4 h-4' />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative h-112.5 rounded-xl overflow-hidden shadow-xl'
            >
              <img
                src='/home2.jpg'
                alt='Engineering construction'
                className='w-full h-full object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2
              className='mb-4'
              style={{
                fontSize: "1.8rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "700",
              }}
            >
              Our Core Capabilities
            </h2>
            <p
              className='text-xl text-gray-600 max-w-3xl mx-auto'
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Delivering integrated energy, engineering, asset integrity, and
              digital transformation services to industrial, public sector, and
              energy clients
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1'
              >
                <div className='flex items-center justify-center mb-4'>
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className='h-60 relative  w-full object-cover rounded-md'
                  />
                </div>
                <h3
                  className='mb-3'
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.1",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className='text-gray-600'
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.1",
                    // fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-center mt-12'
          >
            <Link
              to='/services'
              className='inline-flex items-center gap-2 bg-linear-to-r from-blue-900 to-green-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-shadow hover:transition-transform hover:transform hover:scale-105'
              style={{
                fontSize: "1rem",
                lineHeight: "1.1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              View All Services
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}

      <section className='py-12 bg-white border-b border-gray-200 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Title */}
          <div className='text-center mb-8'>
            <p
              className='text-gray-600'
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Our Trusted Partners
            </p>
          </div>

          {/* Marquee Wrapper */}
          <div className='relative overflow-hidden'>
            <motion.div
              className='flex gap-10 items-center w-max'
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center min-w-35'
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className='h-15 md:h-15 lg:h-20 object-contain'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-linear-to-r from-blue-900 to-green-700 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className='text-4xl md:text-5xl mb-2'>2+</div>
              <div
                className='text-green-200'
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Service Lines
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className='text-4xl md:text-5xl mb-2'>50+</div>
              <div
                className='text-green-200'
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Projects Delivered
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className='text-4xl md:text-5xl mb-2'>20+</div>
              <div
                className='text-green-200'
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Satisfied Clients
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className='text-4xl md:text-5xl mb-2'>24/7</div>
              <div
                className='text-green-200'
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Support Available
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='mb-6'>Ready to Transform Your Operations?</h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Partner with us to deliver reliable, innovative, and sustainable
              solutions that drive industrial growth and operational efficiency.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-green-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-shadow'
            >
              Request a Proposal Today
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Newsletter Signup Section */}
      <section className='py-12 sm:py-16 lg:py-20 bg-gray-100'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className='
          mb-4
          text-base
          sm:text-lg
          md:text-xl
          font-poppins
          font-medium
        '
            >
              Stay Updated with Our Latest News
            </h2>

            <p
              className='
          mb-6
          text-sm
          sm:text-base
          md:text-lg
          text-gray-600
          max-w-xl
          mx-auto
          leading-relaxed
          font-poppins
          font-medium
        '
            >
              Subscribe to our newsletter to receive the latest updates on our
              services, projects, and industry insights.
            </p>

            <div className='max-w-md mx-auto'>
              <NewsletterSignup />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
