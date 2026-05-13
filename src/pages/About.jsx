import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, DollarSign, Users, Briefcase } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col items-center gap-4 text-center group transition-all duration-500 hover:border-red-100 hover:shadow-red-50"
  >
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 tabular-nums">{value}</h3>
    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">{label}</p>
  </motion.div>
);

const About = () => {
  return (
    <main className="bg-white overflow-hidden">
      {/* --- HERO SECTION: OUR STORY --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-10 bg-red-600 rounded-sm shadow-sm shadow-red-200"></div>
              <span className="text-red-600 font-bold text-sm tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Redefining Modern <br /> <span className="text-red-600">Shopping</span> Experience.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Launched in 2024, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. 
              Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands 
              and serves 3 million customers across the region.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment 
              in categories ranging from consumer electronics to household goods, beauty, fashion, sports equipment, and groceries.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-red-50 rounded-[3rem] -z-10 rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop&q=80" 
              alt="Our Story" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="bg-gray-50/50 py-24 md:py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={Briefcase} value="10.5k" label="Sellers Active" color="bg-gray-900" />
            <StatCard icon={DollarSign} value="33k" label="Monthly Sales" color="bg-red-600" />
            <StatCard icon={ShoppingBag} value="45.5k" label="Active Customers" color="bg-gray-900" />
            <StatCard icon={Users} value="25k" label="Annual Gross Sales" color="bg-gray-900" />
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Why Choose Exclusive?</h2>
          <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Innovation • Quality • Integrity</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Premium Quality", desc: "Every product in our collection is meticulously curated for its superior quality and timeless design." },
            { title: "Fast Delivery", desc: "Experience the thrill of rapid fulfillment with our global logistics network ensuring on-time delivery." },
            { title: "24/7 Support", desc: "Our dedicated concierge team is always available to provide you with a seamless shopping journey." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col gap-4 text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
