import Navbar from "@/components/Navbar";
import GradientBackground from "@/components/GradientBackground";
import HeroSection from "@/components/HeroSection";
import ToggleButton from "@/components/ToggleButton";
import URLshortInput from "@/components/URLshortInput";
export default function Home() {
  return (
    <div className="relative">
      <GradientBackground/>
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-full min-w-[800px] ">
        <Navbar/>
        <HeroSection/>
        <ToggleButton/>
        <URLshortInput/>
      </div>
    </div>
  );
}
