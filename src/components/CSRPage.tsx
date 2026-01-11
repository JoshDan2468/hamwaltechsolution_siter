import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Shield,
  Users,
  Scale,
  Handshake,
  Target,
  ArrowRight,
} from "lucide-react";

const csrFocus = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Committed to reducing environmental impact through sustainable practices.",
    initiatives: [
      "Supporting clean energy initiatives (LPG, CNG, solar)",
      "Safe handling of gas and industrial operations",
      "Waste reduction and environmental protection programs",
      "Promoting energy efficiency solutions",
    ],
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description:
      "Prioritizing workplace safety and well-being in all operations.",
    initiatives: [
      "Comprehensive workplace safety programs",
      "Compliance with industry safety standards",
      "Regular safety training for staff and partners",
      "Emergency response preparedness",
    ],
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "Supporting local communities and empowering future generations.",
    initiatives: [
      "Skills development and job creation programs",
      "Educational and empowerment initiatives",
      "Support for local businesses and suppliers",
      "Community infrastructure projects",
    ],
  },
  {
    icon: Scale,
    title: "Ethics & Governance",
    description: "Operating with integrity, transparency, and accountability.",
    initiatives: [
      "Ethical business practices and anti-corruption policies",
      "Transparent financial and operational reporting",
      "Compliance with laws and industry regulations",
      "Fair labor practices and equal opportunity",
    ],
  },
  {
    icon: Handshake,
    title: "Partnerships & Sustainability",
    description: "Collaborating for sustainable growth and shared value.",
    initiatives: [
      "Working with partners to promote sustainable development",
      "Long-term value creation for all stakeholders",
      "Supporting industry best practices",
      "Knowledge sharing and capacity building",
    ],
  },
];

const sdgAlignments = [
  {
    goal: "Clean Energy Access",
    description:
      "Supporting transition to affordable and clean energy through LPG and CNG solutions.",
  },
  {
    goal: "Sustainable Development",
    description:
      "Building resilient infrastructure and promoting sustainable industrialization.",
  },
  {
    goal: "Environmental Protection",
    description:
      "Taking action to combat climate change and protect natural resources.",
  },
  {
    goal: "Responsible Operations",
    description:
      "Ensuring responsible production and consumption in all business activities.",
  },
];

export function CSRPage() {
  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='relative min-h-125 flex items-center justify-center  overflow-hidden '>
        <div className='absolute inset-0 z-0'>
          <img
            src='/csr.jpg'
            alt='Industrial plant'
            className='w-full h-full object-cover  md:opacity-100'
          />
          <div
            className={`absolute w-full inset-0 bg-linear-to-r from-blue-900/50 to-green-700/50`}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20'>
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 text-white'
            style={{
              perspective: 1000,
              fontSize: "2.0rem",
              lineHeight: "1.1",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
            }}
          >
            Corporate Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-green-100 max-w-3xl mx-auto'
          >
            Operating responsibly while contributing positively to society and
            the environment
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className='mb-6'
              style={{
                perspective: 1000,
                fontSize: "1.5rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Our Commitment to Responsible Business
            </h2>
            <p className='text-lg text-gray-600 mb-4'>
              At Hamwal Tech Solution Limited, we are committed to operating
              responsibly, protecting the environment, supporting communities,
              and ensuring safety and ethical practices in all our operations.
            </p>
            <p className='text-lg text-gray-600'>
              Our CSR initiatives reflect our dedication to creating sustainable
              value for all stakeholders while contributing to the social and
              economic development of the communities we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CSR Focus Areas */}
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
                perspective: 1000,
                fontSize: "2.0rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Our CSR Focus Areas
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Five key pillars guiding our corporate social responsibility
              efforts
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {csrFocus.map((focus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-lg'
              >
                <div className='w-14 h-14 bg-linear-to-br from-blue-900 to-green-600 rounded-lg flex items-center justify-center mb-4'>
                  <focus.icon className='w-7 h-7 text-white' />
                </div>
                <h3 className='mb-3'>{focus.title}</h3>
                <p className='text-gray-600 mb-6'>{focus.description}</p>
                <ul className='space-y-2'>
                  {focus.initiatives.map((initiative, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-gray-700 text-sm'
                    >
                      <span className='text-green-600 mt-1'>•</span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Activities */}
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
              Our CSR Initiatives
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Ongoing commitments to social and environmental impact
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-linear-to-br from-green-50 to-blue-50 p-8 rounded-xl'
            >
              <h3 className='mb-4 flex items-center gap-2'>
                <Leaf className='w-6 h-6 text-green-600' />
                Environmental Programs
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Environmental awareness and education programs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Clean energy adoption support initiatives</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Waste management and recycling programs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Carbon footprint reduction efforts</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-linear-to-br from-blue-50 to-green-50 p-8 rounded-xl'
            >
              <h3 className='mb-4 flex items-center gap-2'>
                <Shield className='w-6 h-6 text-blue-900' />
                Safety & Training
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Comprehensive safety training initiatives</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Health and safety awareness campaigns</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Technical skills development programs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Emergency response training</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-linear-to-br from-green-50 to-blue-50 p-8 rounded-xl'
            >
              <h3 className='mb-4 flex items-center gap-2'>
                <Users className='w-6 h-6 text-green-600' />
                Community Engagement
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Local employment and job creation</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Youth empowerment and skills training</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Support for local suppliers and businesses</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Community infrastructure support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-linear-to-br from-blue-50 to-green-50 p-8 rounded-xl'
            >
              <h3 className='mb-4 flex items-center gap-2'>
                <Scale className='w-6 h-6 text-blue-900' />
                Ethical Practices
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Zero-tolerance anti-corruption policy</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Fair and transparent procurement processes</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Equal opportunity and diversity initiatives</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-1'>✓</span>
                  <span>Ethical supply chain management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
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
                perspective: 1000,
                fontSize: "2.0rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Alignment with Sustainability Goals
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Contributing to global sustainable development through responsible
              industrial practices
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {sdgAlignments.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-6 rounded-xl shadow-md text-center'
              >
                <div className='w-12 h-12 bg-linear-to-br from-blue-900 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Target className='w-6 h-6 text-white' />
                </div>
                <h3 className='mb-2'>{sdg.goal}</h3>
                <p className='text-gray-600 text-sm'>{sdg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative h-100 rounded-xl overflow-hidden shadow-xl'
            >
              <img
                src='/home1.jpg'
                alt='Community development'
                className='w-full h-full object-cover'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className='mb-6'
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.1",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                }}
              >
                Making a Positive Impact
              </h2>
              <p className='text-gray-600 mb-4'>
                Our CSR initiatives are designed to create lasting positive
                impact in the communities where we operate. We believe that
                business success and social responsibility go hand in hand.
              </p>
              <p className='text-gray-600 mb-4'>
                Through our various programs, we are contributing to sustainable
                development, environmental protection, and community empowerment
                across Nigeria and beyond.
              </p>
              <p className='text-gray-600'>
                We remain committed to continuous improvement in our CSR
                efforts, measuring our impact and working collaboratively with
                stakeholders to achieve meaningful and sustainable outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className='py-20 bg-linear-to-r from-blue-900 to-green-700 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className='mb-6 text-white'
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.1",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
              }}
            >
              Our Commitment
            </h2>
            <p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
              HAMWAL Tech Solution Limited remains committed to conducting
              business responsibly while contributing positively to society and
              the environment. We will continue to integrate sustainable
              practices into our operations and work towards creating shared
              value for all stakeholders.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors'
            >
              Partner With Us
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
