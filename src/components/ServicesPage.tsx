import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
// import { image } from "framer-motion/client";

const services = [
  {
    image: "./cylinder.jpg",
    title: "Energy & Gas Solutions",
    description:
      "Comprehensive LPG, CNG, and clean energy solutions for sustainable operations.",
    features: [
      "LPG retailing and distribution",
      "CNG distribution and infrastructure",
      "Gas infrastructure development",
      "Clean and renewable energy solutions",
    ],
  },
  {
    image: "./auto.jpg",
    title: "Engineering & Construction",
    description:
      "Full-scale engineering and construction services for industrial and commercial projects.",
    features: [
      "Building construction",
      "Civil engineering works",
      "Mechanical & electrical services",
      "Project management and maintenance",
    ],
  },
  {
    image: "./pipeline.jpg",
    title: "Asset Integrity & Reliability Engineering",
    description:
      "Advanced asset integrity management ensuring safety and operational efficiency.",
    features: [
      "Corrosion control",
      "Valve and pipeline management",
      "Inspection and condition monitoring",
      "Digital integrity management systems",
    ],
  },
  {
    image: "./ai.jpg",
    title: "Digital Technology & Artificial Intelligence",
    description:
      "Cutting-edge digital solutions and AI-driven systems for modern enterprises.",
    features: [
      "Digital twins",
      "Automation and smart systems",
      "Enterprise software development",
      "Data analytics & AI solutions",
    ],
  },
  {
    image: "./tower.jpg",
    title: "Oil & Gas Support Services",
    description: "Comprehensive support services for oil and gas operations.",
    features: [
      "Procurement and logistics",
      "Facility maintenance",
      "Technical manpower supply",
      "Equipment rental and supply",
    ],
  },
  {
    image: "./safety.jpg",
    title: "Infrastructure & Industrial Services",
    description:
      "Infrastructure development and industrial support for public and private sectors.",
    features: [
      "Manufacturing support services",
      "Utilities and public sector projects",
      "Industrial infrastructure development",
      "Facility management",
    ],
  },
  {
    image: "./engineering.jpg",
    title: "Business Advisory & Project Development",
    description:
      "Strategic advisory services for business growth and project success.",
    features: [
      "Feasibility studies",
      "Market entry strategies",
      "Investment advisory",
      "Project structuring and development",
    ],
  },
  {
    image: "./pipeline.jpg",
    title: "General Trading & Supply Chain Solutions",
    description:
      "Efficient trading and supply chain management for industrial operations.",
    features: [
      "Import & export services",
      "Distribution and logistics",
      "Supply of industrial goods",
      "Inventory management",
    ],
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your needs and assess project requirements.",
    gif: "/gifs/idea.gif",
  },
  {
    title: "Technical Assessment",
    description:
      "Our experts conduct detailed technical and feasibility studies.",
    gif: "/gifs/secure.gif",
  },
  {
    title: "Solution Design",
    description:
      "Custom solutions designed to meet your specific requirements.",
    gif: "/gifs/design.gif",
  },
  {
    title: "Implementation",
    description:
      "Professional execution with safety and quality as top priorities.",
    gif: "/gifs/implimentation.gif",
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance and support for long-term success.",
    gif: "/gifs/operator.gif",
  },
];

export function ServicesPage() {
  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='relative min-h-125 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src='/pipeline2.jpg'
            alt='Infrastructure'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-r from-blue-900/60 to-green-700/60'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20'>
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 text-white'
            style={{
              perspective: 1000,
              fontSize: "2.5rem",
              lineHeight: "1.1",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
            }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-gray-200 max-w-3xl mx-auto'
          >
            Integrated solutions across energy, engineering, technology, and
            industrial sectors
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
                fontSize: "1.5rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Comprehensive Service Portfolio
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Eight specialized service lines delivering end-to-end solutions
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className='bg-linear-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='flex items-center justify-center mb-4 overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='h-80 relative  w-full object-cover rounded-md '
                  />
                </div>
                <h3 className='mb-3'>{service.title}</h3>
                <p className='text-gray-600 mb-6'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-gray-700'
                    >
                      <CheckCircle className='w-5 h-5 text-green-600 shrink-0 mt-0.5' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Energy & Gas Section */}
      <section className='py-20 bg-linear-to-br from-green-50 to-blue-50'>
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
                fontSize: "1.5rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Energy & Gas Solutions in Detail
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Leading the clean energy transition with LPG, CNG, and renewable
              solutions
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className='mb-4'
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                }}
              >
                Clean & Sustainable Energy
              </h3>
              <p className='text-gray-600 mb-4'>
                Our Energy & Gas Solutions division provides comprehensive
                services in LPG and CNG distribution, helping businesses and
                communities transition to cleaner, more efficient energy
                sources.
              </p>
              <p className='text-gray-600 mb-6'>
                We develop gas infrastructure, establish distribution networks,
                and provide end-to-end support for retail operations. Our
                solutions reduce environmental impact while delivering reliable,
                cost-effective energy for industrial and residential
                applications.
              </p>
              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0'>
                    <CheckCircle className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h4 className='mb-1'>LPG Distribution Network</h4>
                    <p className='text-gray-600 text-sm'>
                      Retail outlets, bulk distribution, and cylinder exchange
                      services
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0'>
                    <CheckCircle className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h4 className='mb-1'>CNG Infrastructure</h4>
                    <p className='text-gray-600 text-sm'>
                      Fueling stations, conversion services, and fleet
                      management
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0'>
                    <CheckCircle className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h4 className='mb-1'>Renewable Energy</h4>
                    <p className='text-gray-600 text-sm'>
                      Solar, hybrid systems, and sustainable power solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative h-125 rounded-xl overflow-hidden shadow-xl'
            >
              <img
                src='/oil.jpg'
                alt='Gas infrastructure'
                className='w-full h-full object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2
              className='mb-4'
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Our Service Delivery Process
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              A structured approach ensuring quality, safety, and client
              satisfaction
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative'
              >
                <div className='text-center'>
                  <div className='w-16 h-16 bg-linear-to-br from-blue-900 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10'>
                    <img
                      src={item.gif}
                      alt={item.title}
                      className='w-full h-32 object-contain rounded-full mb-4 '
                    />
                  </div>
                  <h3 className='mb-2'>{item.title}</h3>
                  <p className='text-gray-600 text-sm'>{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-blue-900 to-green-600'></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='mb-4'>Why Choose Our Services</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Benefits that drive operational efficiency and long-term value
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: "Cost Efficiency",
                description:
                  "Optimized solutions that reduce operational costs while maintaining quality and safety standards.",
              },
              {
                title: "Environmental Impact",
                description:
                  "Sustainable practices and clean energy solutions that minimize environmental footprint.",
              },
              {
                title: "Compliance & Safety",
                description:
                  "Full regulatory compliance with unwavering commitment to safety in all operations.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-lg text-center'
              >
                <div className='w-16 h-16 bg-linear-to-br from-blue-900 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto'>
                  <CheckCircle className='w-8 h-8 text-white' />
                </div>
                <h3 className='mb-3'>{benefit.title}</h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-linear-to-r from-blue-900 to-green-700 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='mb-6 text-white'>Ready to Get Started?</h2>
            <p className='text-xl text-green-100 mb-8 max-w-2xl mx-auto'>
              Let us help you overcome your energy, engineering, and operational
              challenges with reliable, efficient, and sustainable solutions.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors'
            >
              Request a Proposal
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
