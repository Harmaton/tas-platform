'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  image: string;
  color: string;
}

export default function CategoryCard({ name, image, color }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
      </div>

      {/* Title */}
      <div className="p-4 text-center">
        <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}