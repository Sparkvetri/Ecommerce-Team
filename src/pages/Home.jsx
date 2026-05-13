import React from 'react';
import Banner from "../components/Layout/Banner";
import Category from "../components/Product/Category"
import ExploreProducts from "../components/Product/ExploreProducts";
import MusicBanner from "../components/Layout/MusicBanner";
import Selling from "../components/Product/Selling"
import FlashSale from "../components/Product/FlashSale";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="mb-8 md:mb-16">
        <Banner />
      </section>

      {/* Flash Sale Section */}
      <SectionWrapper className="mb-12 md:mb-20">
        <FlashSale />
      </SectionWrapper>

      {/* Categories Section */}
      <SectionWrapper className="mb-12 md:mb-20">
        <Category />
      </SectionWrapper>

      {/* Best Selling Section */}
      <SectionWrapper className="mb-12 md:mb-20 bg-gray-50/50">
        <Selling />
      </SectionWrapper>

      {/* Promo Banner */}
      <SectionWrapper className="mb-12 md:mb-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <MusicBanner />
        </div>
      </SectionWrapper>

      {/* Featured Products Section */}
      <SectionWrapper className="pb-20 md:pb-32">
        <ExploreProducts />
      </SectionWrapper>
    </main>
  );
};

export default Home;
