import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className='max-w-md mx-auto'>
      {subscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='bg-green-100 border border-green-300 rounded-lg p-6 flex items-center gap-3 text-green-800'
        >
          <CheckCircle className='w-6 h-6 shrink-0' />
          <div>
            <p className='text-left'>Thank you for subscribing!</p>
            <p className='text-sm text-left'>
              Check your email to confirm your subscription.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className='relative'>
          <div className='relative'>
            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              required
              className='w-full pl-12 pr-32 py-4 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 outline-none transition-all'
              style={{
                fontSize: "1rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            />
            <button
              type='submit'
              disabled={loading}
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-blue-900 to-green-600 text-white px-6 py-2 rounded-md hover:shadow-lg transition-shadow disabled:opacity-50 flex items-center gap-2'
              style={{
                fontSize: "1rem",
                lineHeight: "1.4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              {loading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className='w-4 h-4' />
                </>
              )}
            </button>
          </div>
          <p
            className='text-sm text-gray-500 mt-3 text-center'
            style={{
              fontSize: "1rem",
              lineHeight: "1.4",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
            }}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
