import { motion } from "framer-motion";
// import { image } from "framer-motion/client";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// import { image } from "framer-motion/client";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/factory2.jpg",
  "/hero7.jpg",
];
const products = [
  {
    image: "./integrity.jpg",
    title: "Integrity & Compliance",
    description:
      "Operating with transparency, honesty, and adherence to regulatory standards.",
  },
  {
    image: "./safety.jpg",
    title: "Safety & Quality Excellence",
    description:
      "Prioritizing workplace safety and delivering exceptional quality in every project.",
  },
  {
    image: "./tech.jpg",
    title: "Innovation & Technology Leadership",
    description:
      "Leveraging cutting-edge technology and innovative solutions for optimal results.",
  },
  {
    image: "./sustainability.jpg",
    title: "Sustainability & Environmental Responsibility",
    description:
      "Committed to environmentally responsible practices and sustainable development.",
  },
  {
    image: "./colab.jpg",
    title: "Partnership & Collaboration",
    description:
      "Building strong relationships with clients, partners, and stakeholders.",
  },
];

// const team = [
//   {
//     image: "./ceo.jpg",
//     name: "Engr. Hameed Waliu",
//     role: "Managing Director/CEO",
//     description:
//       "Over 15 years of experience in energy, engineering, and technology solutions.",
//   },
//   {
//     image: "./engineering.jpg",
//     name: "Dr. Oluwaseun Adebayo",
//     role: "Technical Director",
//     description:
//       "Expert in asset integrity, corrosion control, and reliability engineering.",
//   },
//   {
//     image: "./coo.jpg",
//     name: "Mrs. Fatima Ibrahim",
//     role: "Operations Manager",
//     description:
//       "Specialized in project management, logistics, and operational excellence.",
//   },
// ];

export function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='relative min-h-120 sm:min-h-130 flex items-center justify-center overflow-hidden '>
        <div className='absolute inset-0 z-0 overflow-hidden'>
          {heroImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt='Industrial background'
              className='absolute w-full h-full object-cover'
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
          ))}

          {/* Overlay */}
          <div className='absolute inset-0 bg-linear-to-r from-blue-950 to-green-700 opacity-50' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20'>
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 50 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            className='mb-6 text-white'
            style={{
              perspective: 1000,
              fontSize: "3.0rem",
              lineHeight: "1.1",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
            }}
          >
            About Hamwal Tech Solution Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-green-100 max-w-3xl mx-auto'
          >
            A trusted partner in technology, energy, and engineering excellence
            since 2013
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
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
                  perspective: 1000,
                  fontSize: "2.5rem",
                  lineHeight: "1.1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                }}
              >
                Our Story
              </h2>
              <p className='text-gray-600 mb-4 font-roboto'>
                HAMWAL TECH SOLUTION LIMITED was established in 2013 as a
                multi-sectoral solutions company to support the evolving needs
                of the energy, engineering, industrial, and digital economy.
              </p>
              <p className='text-gray-600 mb-4'>
                We recognized the growing demand for integrated,
                technology-driven solutions that combine technical expertise
                with strategic partnerships to deliver compliant, safe, and
                scalable results.
              </p>
              <p className='text-gray-600 mb-4'>
                Today, we serve clients across Nigeria and international
                markets, providing comprehensive solutions in asset integrity,
                oil & gas support, energy infrastructure, engineering &
                construction, digital technology, and business advisory
                services.
              </p>
              <p className='text-gray-600'>
                Our mission is clear: deliver reliable, innovative, and
                sustainable solutions that drive industrial growth, operational
                efficiency, and long-term value creation for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative
  h-68
  sm:h-64
  md:h-80
  lg:h-112 rounded-xl overflow-hidden shadow-xl'
            >
              <img
                src='about1.jpg'
                alt='Professional team'
                className='w-full h-full object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-white p-8 rounded-xl shadow-lg'
            >
              <div>
                <img
                  src='/target.jpg'
                  alt='mission'
                  className='max-w-full max-h-full object-contain w-40 h-40 mb-6'
                />
              </div>
              <h2
                className='mb-4'
                style={{
                  perspective: 1000,
                  fontSize: "1.5rem",
                  lineHeight: "1.1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                }}
              >
                Our Mission
              </h2>
              <p className='text-gray-600'>
                To deliver reliable, innovative, and sustainable engineering,
                energy, and digital solutions that drive industrial growth,
                operational efficiency, and long-term value creation for our
                clients and stakeholders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white p-8 rounded-xl shadow-lg'
            >
              <div>
                <img
                  src={"/Vision.jpg"}
                  alt='vision'
                  className='max-w-80 max-h-40 object-contain rounded-xl'
                />
              </div>
              <h2
                className='mb-4 mt-3'
                style={{
                  perspective: 1000,
                  fontSize: "1.5rem",
                  lineHeight: "1.1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                }}
              >
                Our Vision
              </h2>
              <p className='text-gray-600'>
                To become a trusted African and global solutions partner in
                energy, engineering, and digital transformation, recognized for
                excellence, innovation, and sustainable impact across all
                sectors we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-20 bg-white'>
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
                perspective: 1000,
                fontSize: "2.0rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Our Core Values
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              The principles that guide our operations and define our commitment
              to excellence
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-linear-to-br from-blue-50 to-green-50 p-6 rounded-xl'
              >
                <div className='mb-7 mt-2 flex justify-center items-center h-50 w-50 mx-auto'>
                  <img
                    src={value.image}
                    alt={value.title}
                    className='max-w-90 max-h-80 object-cover inset-0 z-0 rounded-xl'
                  />
                </div>
                <h3 className='mb-3'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* <section className='py-20 bg-linear-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='mb-4'>Our Leadership Team</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Experienced professionals driving innovation and excellence
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-lg overflow-hidden'
              >
                <div>
                  <img
                    src={team.image}
                    alt={team.title}
                    className='max-w-80 max-h-40 object-contain rounded-xl'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='mb-1'>{member.name}</h3>
                  <p className='text-green-600 mb-3'>{member.role}</p>
                  <p className='text-gray-600 text-sm'>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className='py-20 bg-linear-to-r from-blue-900 to-green-700 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2
              className='mb-4 text-white'
              style={{
                perspective: 1000,
                fontSize: "1.5rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Why Choose Hamwal Tech?
            </h2>
            <p className='text-xl text-green-100 max-w-3xl mx-auto font-roboto'>
              We combine technical expertise, technology-driven execution, and
              strategic partnerships to deliver compliant, safe, and scalable
              solutions
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins'>
            {[
              {
                title: "Technical Expertise",
                description:
                  "Highly skilled professionals across all service lines",
              },
              {
                title: "Integrated Solutions",
                description: "Comprehensive end-to-end project delivery",
              },
              {
                title: "Safety First",
                description: "Unwavering commitment to safety and compliance",
              },
              {
                title: "Innovation Driven",
                description: "Leveraging latest technology and best practices",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white/10 backdrop-blur-sm p-6 rounded-xl'
              >
                <h3 className='mb-2 text-white'>{item.title}</h3>
                <p className='text-green-100 text-sm'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='mb-6'>Partner With Us</h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Experience the Hamwal Tech difference. Let's work together to
              deliver innovative solutions for your business.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 bg-linear-to-r from-blue-900 to-green-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-shadow'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
