import { Eye, Heart, Palette, Sparkles, TrendingUp, Users } from "lucide-react";

export const heroSlides = [
  {
    title: "Abstract Dreamscape",
    subtitle: "By Aurora Skye",
    description: "Discover unique artworks from independent artists worldwide",
    cta: "Discover Artworks",
    ctaIcon: Sparkles,
    bgImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop",
    particles: [
      { color: "bg-pink-400", size: "w-3 h-3", delay: "0s", duration: "15s" },
      { color: "bg-yellow-300", size: "w-2 h-2", delay: "2s", duration: "20s" },
      { color: "bg-purple-400", size: "w-4 h-4", delay: "4s", duration: "18s" },
      { color: "bg-blue-300", size: "w-2 h-2", delay: "1s", duration: "22s" },
      { color: "bg-red-400", size: "w-3 h-3", delay: "3s", duration: "17s" },
    ]
  },
  {
    title: "Stories in Color",
    subtitle: "By Marcus Chen",
    description: "Every piece tells a story. Connect directly with the artists behind the canvas",
    cta: "Meet the Artists",
    ctaIcon: Users,
    bgImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&h=1080&fit=crop",
    particles: [
      { color: "bg-cyan-400", size: "w-3 h-3", delay: "0.5s", duration: "16s" },
      { color: "bg-green-300", size: "w-4 h-4", delay: "2.5s", duration: "19s" },
      { color: "bg-teal-400", size: "w-2 h-2", delay: "1.5s", duration: "21s" },
      { color: "bg-blue-500", size: "w-3 h-3", delay: "3.5s", duration: "18s" },
    ]
  },
  {
    title: "Digital Dreams",
    subtitle: "By Stella Rodriguez",
    description: "Supporting creators through transparent, peer-to-peer transactions",
    cta: "Start Collecting",
    ctaIcon: Heart,
    bgImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1920&h=1080&fit=crop",
    particles: [
      { color: "bg-orange-400", size: "w-2 h-2", delay: "1s", duration: "20s" },
      { color: "bg-pink-500", size: "w-3 h-3", delay: "3s", duration: "17s" },
      { color: "bg-yellow-400", size: "w-4 h-4", delay: "0s", duration: "22s" },
      { color: "bg-red-300", size: "w-2 h-2", delay: "2s", duration: "19s" },
    ]
  },
  {
    title: "Urban Poetry",
    subtitle: "By Jordan Blake",
    description: "Your art deserves to be seen. Join thousands of artists sharing their vision",
    cta: "Browse Gallery",
    ctaIcon: Eye,
    bgImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&h=1080&fit=crop",
    particles: [
      { color: "bg-violet-400", size: "w-3 h-3", delay: "0s", duration: "18s" },
      { color: "bg-fuchsia-400", size: "w-2 h-2", delay: "2s", duration: "21s" },
      { color: "bg-indigo-400", size: "w-4 h-4", delay: "1s", duration: "16s" },
      { color: "bg-purple-300", size: "w-2 h-2", delay: "3s", duration: "19s" },
    ]
  }
];

export const stats = [
  {
    icon: Palette,
    number: "10K+",
    title: "Artworks",
  },
  {
    icon: Users,
    number: "5K+",
    title: "Artists",
  },
  {
    icon: Heart,
    number: "50K+",
    title: "Collectors",
  },
  {
    icon: TrendingUp,
    number: "$2M+",
    title: "To Artists",
  }
];

// lib/dummy-data.ts

export const categories = [
  {
    id: "abstract",
    name: "Abstract Art",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "landscape",
    name: "Landscape Paintings",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "portrait",
    name: "Portraiture",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
    color: "from-gray-500 to-blue-600"
  },
  {
    id: "sculpture",
    name: "Sculptures",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    color: "from-slate-500 to-gray-600"
  },
  {
    id: "digital",
    name: "Digital Art",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    color: "from-cyan-500 to-indigo-600"
  },
  {
    id: "photography",
    name: "Photography",
    image: "https://images.unsplash.com/photo-1506744038136-44e414978c5a?w=800&h=600&fit=crop",
    color: "from-green-500 to-teal-600"
  }
];

// lib/dummy-data.ts

// lib/dummy-data.ts

export const artworks = [
  {
    id: "stanley-whitney-2024",
    title: "Untitled",
    year: 2024,
    artist: "Stanley Whitney",
    gallery: "Two Palms",
    price: "US$85,000",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop",
    increasedInterest: false,
    isFavorite: false
  },
  {
    id: "abstract-blue",
    title: "Blue Horizon",
    year: 2025,
    artist: "Elena Rossi",
    gallery: "Gallery Moderna",
    price: "US$12,500",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    increasedInterest: true,
    isFavorite: false
  },
  {
    id: "jordy-kerwick",
    title: "Untitled (two sided work on paper)",
    year: 2022,
    artist: "Jordy Kerwick",
    gallery: "The BlackWood Gallery",
    price: "US$3,500",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
    increasedInterest: false,
    isFavorite: true
  },
  {
    id: "stanley-whitney-2025",
    title: "Untitled",
    year: 2025,
    artist: "Stanley Whitney",
    gallery: "Two Palms",
    price: "US$7,000",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    increasedInterest: true,
    isFavorite: false
  },
  {
    id: "babs-bleeker",
    title: "Fragmented Light",
    year: 2023,
    artist: "Babs Bleeker",
    gallery: "Urban Canvas",
    price: "US$4,200",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    increasedInterest: true,
    isFavorite: false
  },
  {
    id: "ocean-sunset",
    title: "Desert Sunset",
    year: 2024,
    artist: "Maria Rodriguez",
    gallery: "Coastal Gallery",
    price: "US$1,350",
    image: "https://images.unsplash.com/photo-1506744038136-44e414978c5a?w=800&h=600&fit=crop",
    increasedInterest: false,
    isFavorite: true
  },
  {
    id: "cosmic-dance",
    title: "Cosmic Dance",
    year: 2025,
    artist: "Samira Khan",
    gallery: "Galaxy Arts",
    price: "US$1,600",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop",
    increasedInterest: true,
    isFavorite: false
  },
  {
    id: "geometric-harmony",
    title: "Geometric Harmony",
    year: 2024,
    artist: "Alex Turner",
    gallery: "Minimalist Studio",
    price: "US$820",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop",
    increasedInterest: false,
    isFavorite: true
  }
];

// lib/dummy-data.ts

export const featuredArtists = [
  {
    id: "arthur-sterling",
    name: "Arthur Sterling",
    bio: "A master of contemporary abstraction, Arthur Sterling's work explores the interplay of light and shadow, creating emotional landscapes.",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44b0ed87?w=200&h=200&fit=crop&crop=faces",
    isFollowing: false
  },
  {
    id: "lena-morales",
    name: "Lena Morales",
    bio: "Lena Morales captures the essence of urban life through her vibrant street photography and evocative portraits, telling stories of everyday moments.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    isFollowing: true
  },
  {
    id: "caleb-vance",
    name: "Caleb Vance",
    bio: "Known for his surrealist digital art, Caleb Vance blends fantasy and reality, inviting viewers into dreamlike worlds filled with intricate details.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    isFollowing: false
  },
  {
    id: "sarah-connor",
    name: "Sarah Connor",
    bio: "Sarah Connor’s oceanic abstracts evoke calm and wonder, using layered textures and blues to mirror the depth of the sea and soul.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56c1f2820a70?w=200&h=200&fit=crop&crop=faces",
    isFollowing: true
  },
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    bio: "Maria’s desert sunsets are meditative — capturing stillness in vast horizons, where color and silence speak louder than words.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    isFollowing: false
  },
  {
    id: "samira-khan",
    name: "Samira Khan",
    bio: "Samira’s cosmic works fuse astronomy and emotion — galaxies become metaphors for inner journeys, painted with radiant hues and celestial geometry.",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44b0ed87?w=200&h=200&fit=crop&crop=faces",
    isFollowing: true
  }
];