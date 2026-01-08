// import { motion } from "framer-motion";
// import { Star, Phone, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Joshua Webb",
//     location: "Dallas, TX",
//     rating: 5,
//     text: "Professional, knowledgeable, and transparent throughout the entire process. The team at Renew Capital Group made going solar incredibly easy. They answered all my questions and the installation was flawless. Highly recommend!",
//     date: "December 2025",
//   },
//   {
//     name: "Jennifer Cervantes",
//     location: "Fort Worth, TX",
//     rating: 5,
//     text: 'Amazing customer service! They answered all my questions and made the solar transition so easy. I was skeptical about the "no upfront cost" claim, but they delivered exactly what they promised. My energy bills have dropped significantly!',
//     date: "November 2025",
//   },
//   {
//     name: "Monica Gonzalez",
//     location: "Arlington, TX",
//     rating: 5,
//     text: "Best decision we ever made! Our energy bills have dropped significantly and installation was seamless. The battery system is amazing – we had power during the last outage while our neighbors didn't. Thank you Renew Capital Group!",
//     date: "October 2025",
//   },
//   {
//     name: "David Martinez",
//     location: "Plano, TX",
//     rating: 5,
//     text: "The team was incredibly professional and the process was completely transparent. No hidden fees, no surprises. They explained everything clearly and the installation crew was respectful and efficient.",
//     date: "September 2025",
//   },
//   {
//     name: "Sarah Thompson",
//     location: "Irving, TX",
//     rating: 5,
//     text: "I called Renew Capital Group after getting quotes from three other companies. Not only was their offer the best, but their customer service was outstanding. They made me feel valued, not just like another sale.",
//     date: "September 2025",
//   },
//   {
//     name: "Carlos Rodriguez",
//     location: "Garland, TX",
//     rating: 5,
//     text: "Fantastic experience from start to finish! The solar panels look great on our roof and we're already seeing savings. The free maintenance gives us peace of mind. Couldn't be happier with our decision.",
//     date: "August 2025",
//   },
//   {
//     name: "Emily Chen",
//     location: "Frisco, TX",
//     rating: 5,
//     text: "Renew Capital Group exceeded all expectations. They were patient with all our questions, professional during installation, and the system works perfectly. Our neighbors are now asking about solar too!",
//     date: "August 2025",
//   },
//   {
//     name: "Robert Johnson",
//     location: "McKinney, TX",
//     rating: 5,
//     text: "As someone who researches everything, I was impressed by their transparency and knowledge. No pushy sales tactics, just honest information. The installation was quick and our system has been running flawlessly.",
//     date: "July 2025",
//   },
//   {
//     name: "Lisa Patel",
//     location: "Richardson, TX",
//     rating: 5,
//     text: "We've been wanting to go solar for years but couldn't afford the upfront costs. Renew Capital Group made it possible! Zero out of pocket and we're saving money every month. Truly grateful for their service.",
//     date: "July 2025",
//   },
//   {
//     name: "Michael Brown",
//     location: "Denton, TX",
//     rating: 5,
//     text: "Excellent service from consultation to installation. The team was professional, on time, and cleaned up everything perfectly. The battery backup has already proven its worth. Highly recommend!",
//     date: "June 2025",
//   },
//   {
//     name: "Amanda Garcia",
//     location: "Mesquite, TX",
//     rating: 5,
//     text: "I can't say enough good things about this company. They made the whole process stress-free and have been wonderful with follow-up support. Our solar panels are performing even better than expected!",
//     date: "June 2025",
//   },
//   {
//     name: "Kevin Nguyen",
//     location: "Carrollton, TX",
//     rating: 5,
//     text: "Top-notch professionalism and customer care. They walked us through every step, helped with all the paperwork, and the installation was completed faster than expected. Very satisfied customers!",
//     date: "May 2025",
//   },
// ];

// export function TestimonialsPage() {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative min-h-100 flex items-center justify-center overflow-hidden bg-linear-to-r from-green-600 to-blue-700">
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="mb-6 text-white">Customer Testimonials</h1>
//             <p className="text-xl text-green-100 max-w-3xl mx-auto">
//               Read what our satisfied customers have to say about their
//               experience with Renew Capital Group
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-green-600 mb-2">⭐⭐⭐⭐⭐</div>
//               <div className="text-gray-600">Average Rating</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               <div className="text-gray-600">500+ Happy Customers</div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="text-gray-600">100% Satisfaction Rate</div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-20 bg-linear-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative"
//               >
//                 <Quote className="absolute top-6 right-6 w-8 h-8 text-green-200" />

//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-700 mb-6 relative z-10">
//                   "{testimonial.text}"
//                 </p>

//                 <div className="border-t border-gray-200 pt-4">
//                   <p className="text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-500">
//                     {testimonial.location}
//                   </p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     {testimonial.date}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Review */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-linear-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center"
//           >
//             <Quote className="w-12 h-12 text-green-600 mx-auto mb-6" />
//             <p className="text-2xl text-gray-800 mb-6 italic">
//               "Renew Capital Group has been absolutely amazing. From the initial
//               consultation to the final installation, everything was handled
//               with professionalism and care. They truly care about their
//               customers and it shows in every interaction. Our solar system has
//               exceeded our expectations!"
//             </p>
//             <div className="flex gap-1 justify-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 fill-yellow-400 text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-900">Jennifer Cervantes</p>
//             <p className="text-gray-600">Fort Worth, TX</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Customers Love Us */}
//       <section className="py-20 bg-linear-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="mb-4">Why Customers Love Us</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Common themes from our 5-star reviews
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: "Professionalism", emoji: "👔" },
//               { title: "Transparency", emoji: "✨" },
//               { title: "Knowledge", emoji: "🧠" },
//               { title: "Customer Care", emoji: "❤️" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-md text-center"
//               >
//                 <div className="text-4xl mb-3">{item.emoji}</div>
//                 <h3 className="text-gray-900">{item.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-linear-to-r from-green-600 to-blue-700 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="mb-6 text-white">
//               Join Our Growing Family of Satisfied Customers
//             </h2>
//             <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
//               Experience the same exceptional service that has earned us
//               hundreds of 5-star reviews
//             </p>
//             <a
//               href="tel:2145557652"
//               className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               <Phone className="w-5 h-5" />
//               Call (214) 555-SOLAR Today
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
