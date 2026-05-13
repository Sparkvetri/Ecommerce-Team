import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, info, desc }) => (
  <div className="flex gap-6 group">
    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
      <Icon size={24} />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest text-[11px] sm:text-xs opacity-50">{title}</h3>
      <p className="text-xl font-bold text-gray-900">{info}</p>
      <p className="text-gray-400 text-sm font-medium">{desc}</p>
    </div>
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <main className="bg-[#FBFBFB] min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-6 mb-16 md:mb-24 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-4 h-10 bg-red-600 rounded-sm shadow-sm shadow-red-200"></div>
            <span className="text-red-600 font-bold text-sm tracking-[0.3em] uppercase">Connect With Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            We'd Love To Hear <br /> <span className="text-red-600">From You.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col gap-10"
            >
              <ContactInfo 
                icon={Phone} 
                title="Call Us" 
                info="+8801611112222" 
                desc="Available 24/7, 7 days a week." 
              />
              <div className="h-[1px] bg-gray-100 w-full" />
              <ContactInfo 
                icon={Mail} 
                title="Email Us" 
                info="exclusive@shopzy.com" 
                desc="Response within 24 hours." 
              />
              <div className="h-[1px] bg-gray-100 w-full" />
              <ContactInfo 
                icon={MapPin} 
                title="Visit Us" 
                info="Dhaka, Bangladesh" 
                desc="123 Luxury Road, Suite 456" 
              />
            </motion.div>
          </div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name*</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none transition-all" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address*</label>
                      <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none transition-all" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none transition-all" placeholder="Optional" />
                    </div>
                    <div className="md:col-span-3 space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Message*</label>
                      <textarea className="w-full bg-gray-50 border-none rounded-3xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none transition-all min-h-[200px]" placeholder="How can we help you?" required />
                    </div>
                    <div className="md:col-span-3 flex justify-end pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="bg-red-600 text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-3 shadow-2xl shadow-red-200 hover:bg-red-700 transition-all disabled:bg-gray-400 disabled:shadow-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-8">
                      <CheckCircle2 size={56} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-gray-500 text-lg max-w-md">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-12 text-red-600 font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
