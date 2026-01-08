// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// interface HeroProps {
//   title: string;
//   subtitle: string;
//   ctaText?: string;
//   ctaLink?: string;
//   backgroundImage: string;
//   features?: string[];
// }

// export function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage, features }: HeroProps) {
//   return (
//     <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={backgroundImage}
//           alt="Solar panels"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-white mb-6">
//               {title}
//             </h1>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl text-gray-200 mb-8"
//           >
//             {subtitle}
//           </motion.p>

//           {features && features.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-wrap gap-4 mb-8"
//             >
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-2 text-white">
//                   <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                   <span className="text-sm md:text-base">{feature}</span>
//                 </div>
//               ))}
//             </motion.div>
//           )}

//           {ctaText && ctaLink && (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               {ctaLink.startsWith('#') ? (
//                 <a
//                   href={ctaLink}
//                   className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
//                 >
//                   <span>{ctaText}</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </a>
//               ) : (
//                 <Link
//                   to={ctaLink}
//                   className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
//                 >
//                   <span>{ctaText}</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
//     </div>
//   );
// }
