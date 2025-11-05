import ArtCategoriesSection from "@/components/store/art-categories-section";
import ArtworksSection from "@/components/store/art-works-section";
import FeaturedArtistsSection from "@/components/store/featured-artist-section";
import { Footer } from "@/components/store/footer";
import { StorefrontNavbar } from "@/components/store/navbar";
import StoreCarousel from "@/components/store/store-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
     <StorefrontNavbar />
     <StoreCarousel />
     <ArtCategoriesSection />
     <ArtworksSection />
      <FeaturedArtistsSection />
     <Footer />
    </div>
  );
}
