// components/ArtworkCard.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ArtworkCardProps {
  title: string;
  year: number;
  artist: string;
  gallery: string;
  price: string;
  image: string;
  increasedInterest?: boolean;
  isFavorite?: boolean;
}

export default function ArtworkCard({
  title,
  year,
  artist,
  gallery,
  price,
  image,
  increasedInterest = false,
  isFavorite = false
}: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-sm bg-white/90 backdrop-blur-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-emerald-200"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image
        width={100}
        height={100}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Increased Interest Badge */}
        {increasedInterest && (
          <span className="absolute top-2 left-2 text-xs font-medium px-2 py-1 bg-black/80 text-white rounded-md">
            Increased Interest
          </span>
        )}
        {/* Heart Icon */}
        <button
          className={`absolute top-2 right-2 p-1.5 rounded-full transition-colors ${
            isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.09-4.5-4.688-4.5H5.688C3.097 3.75 1 5.765 1 8.25v12c0 2.485 2.097 4.5 4.688 4.5h12.624c2.588 0 4.688-2.015 4.688-4.5V8.25ZM12 15.75l-3-3 3-3 3 3-3 3Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {title}, {year}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{artist}</p>
        <p className="text-xs text-gray-500 mt-1">{gallery}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-emerald-600">{price}</span>
          <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* Subtle Glow on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/10 to-blue-100/10 pointer-events-none" />
      )}
    </motion.div>
  );
}