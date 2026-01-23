import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
// import { SMTPClient } from 'emailjs';
import emailjs from "emailjs-com";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail("");

      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1000);
  };
  

  

//   const client = new SMTPClient({
//     user: '714c18a4f0eb4c',
//     password: '2af0a267661dd0',
//     host: 'sandbox.smtp.mailtrap.io',
//     ssl: true, // Use SSL for secure connection
// });

async function sendMyEmail() {
  try {
      const message = await emailjs.send(
        "service_9hxr48m",
        "template_30khyy7",
        formData,
         "HO-JV7axuMWHZuAtT"
      );
      
      
      console.log('Email sent successfully:', message);
  } catch (err) {
      console.error('Failed to send email:', err);
  } finally {
    console.error('Failed to send email:');
      // client.smtp.close(); // Don't forget to close the connection!
  }
}


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // In a real application, this would send data to a backend
  //   console.log("Form submitted:", formData);
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  //   }, 3000);
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='relative min-h-125 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src='/beep_us.jpg'
            alt='Industrial plant'
            className='w-full h-full object-cover  md:opacity-100'
          />
          <div
            className={`absolute w-full inset-0 bg-linear-to-r from-blue-900/60 to-green-700/60`}
          />
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 text-white'
            style={{
              // perspective: 1000,
              fontSize: "2.0rem",
              lineHeight: "1.1",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
            }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-2xl text-green-100 max-w-3xl mx-auto'
          >
            Ready to start your project?
            <br /> Contact us today for a free consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-5 gap-12'>
            {/* Contact Information */}
            <div className='lg:col-span-2'>
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
                    fontSize: "2.0rem",
                    lineHeight: "1.1",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Contact Information
                </h2>
                <p className='text-gray-600 mb-8'>
                  Reach out to us through any of these channels. Our team is
                  ready to assist you with your energy, engineering, and
                  technology needs.
                </p>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-linear-to-br from-blue-900 to-green-600 rounded-lg flex items-center justify-center shrink-0'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='mb-1'>Phone</h3>
                      <a
                        href='tel:+2348012345678'
                        className='text-gray-600 hover:text-green-600 transition-colors'
                      >
                        +234 807 893 2729
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-linear-to-br from-blue-900 to-green-600 rounded-lg flex items-center justify-center shrink-0'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='mb-1'>Email</h3>
                      <a
                        href='mailto:info@hamwaltech.com'
                        className='text-gray-600 hover:text-green-600 transition-colors'
                      >
                        info@hamwaltechsolution.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-linear-to-br from-blue-900 to-green-600 rounded-lg flex items-center justify-center shrink-0'>
                      <MessageCircle className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='mb-1'>WhatsApp</h3>
                      <a
                        href='https://wa.me/2348144208770'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-green-600 transition-colors'
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-linear-to-br from-blue-900 to-green-600 rounded-lg flex items-center justify-center shrink-0'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='mb-1'>Head Office Address</h3>
                      <p className='text-gray-600'>
                        No 34 Adegoke Street, Via Alh Masha Road, Surulere,
                        Lagos, Nigeria.
                        <br />
                      </p>
                      <h3 className='mb-1'>Operational Address</h3>
                      <p className='text-gray-600'>
                        25,Shoremekun Street, Via Mushin Olosha bustop,
                        Mushin,Lagos, Nigeria
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className='mt-8 p-6 bg-linear-to-br from-blue-50 to-green-50 rounded-xl'>
                  <h3 className='mb-3'>Business Hours</h3>
                  <div className='space-y-2 text-gray-600'>
                    <div className='flex justify-between'>
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    {/* <div className='flex justify-between'>
                      <span>Saturday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div> */}
                    {/* <div className='flex justify-between'>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-3'>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-linear-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg'
              >
                <h2 className='mb-2'>Request a Proposal</h2>
                <p className='text-gray-600 mb-6'>
                  Fill out the form below and our team will get back to you
                  within 24 hours
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2 text-green-800'
                  >
                    <CheckCircle className='w-5 h-5' />
                    <span>Thank you! Your message has been received.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label htmlFor='name' className='block mb-2 text-gray-700'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block mb-2 text-gray-700'
                      >
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all'
                        placeholder='your@email.com'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block mb-2 text-gray-700'
                      >
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all'
                        placeholder='+234 xxx xxx xxxx'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='address'
                      className='block mb-2 text-gray-700'
                    >
                      Company/Address
                    </label>
                    <input
                      type='text'
                      id='address'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all'
                      placeholder='Your company or location'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block mb-2 text-gray-700'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all resize-none'
                      placeholder='Tell us about your project requirements...'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={submitted}
                    className='w-full bg-linear-to-r from-blue-900 to-green-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-50'
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className='w-5 h-5' />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5' />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20 bg-linear-to-br from-blue-50 to-green-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='mb-4'>Our Service Area</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Proudly serving clients across Nigeria, and international markets
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-white rounded-xl shadow-lg overflow-hidden h-112.5'
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295315744!3d6.515398195342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnNTUuNCJOIDPCsDIyJzMzLjEiRQ!5e0!3m2!1sen!2sng!4v1234567890'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Office Location'
            />
          </motion.div>
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
            <h2 className='mb-6 text-white'>Prefer to Call?</h2>
            <p className='text-xl text-green-100 mb-8 max-w-2xl mx-auto'>
              Our team is available during business hours to discuss your
              project needs
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+2348012345678'
                className='inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors'
              >
                <Phone className='w-5 h-5' />
                +234 807 893 2729
              </a>
              <a
                href='https://wa.me/2348144208770'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors'
              >
                <MessageCircle className='w-5 h-5' />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
