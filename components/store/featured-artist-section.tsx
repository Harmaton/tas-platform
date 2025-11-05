'use client';

import { featuredArtists } from '@/lib/dummy-data';
import ArtistCard from './artist-card';


export default function FeaturedArtistsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Our Featured Artists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
}