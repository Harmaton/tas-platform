// components/ArtistCard.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ArtistCardProps {
  name: string;
  bio: string;
  avatar: string;
  isFollowing?: boolean;
}

export default function ArtistCard({ name, bio, avatar, isFollowing = false }: ArtistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [following, setFollowing] = useState(isFollowing);

  const toggleFollow = () => {
    setFollowing(!following);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-sm bg-white/90 backdrop-blur-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-emerald-200"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800">{name}</h3>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 line-clamp-3">
          {bio}
        </p>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <button
          onClick={toggleFollow}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
            following
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {following ? 'Following' : 'Follow'}
        </button>
        <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors">
          View Profile
        </button>
      </div>

      {/* Glow on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/10 to-blue-100/10 pointer-events-none" />
      )}
    </motion.div>
  );
}