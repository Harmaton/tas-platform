import { Footer } from "@/components/store/footer";
import { StorefrontNavbar } from "@/components/store/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
     <StorefrontNavbar />
     <Footer />
    </div>
  );
}
