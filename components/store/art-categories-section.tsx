'use client';

import { categories } from '@/lib/dummy-data';
import CategoryCard from './category-card';
import { motion } from 'framer-motion';

export default function ArtCategoriesSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Explore Art Categories</h2>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
            {categories.map((category, index) => (
                <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                >
                <CategoryCard {...category} />
                </motion.div>
            ))}
            </motion.div>
      </div>
    </section>
  );
}