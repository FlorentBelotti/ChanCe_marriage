import Navigation from "@/components/Navigation";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import ProgramSection from "@/components/sections/ProgramSection";
import RSVPSection from "@/components/sections/RSVPSection";
import StorySection from "@/components/sections/StorySection";
import VenueSection from "@/components/sections/VenueSection";

export default function Home() {
  return (
    <main className="bg-cream text-body">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProgramSection />
      <VenueSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}
