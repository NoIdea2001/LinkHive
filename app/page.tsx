"use client"

import Navbar from "@/components/Navbar";
import GradientBackground from "@/components/GradientBackground";
import HeroSection from "@/components/HeroSection";
import ToggleButton from "@/components/ToggleButton";
import URLshortInput from "@/components/URLshortInput";
import QRgenInput from "@/components/QRgenInput";
import {useState } from "react";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [isQrMode, setIsQrMode] = useState(false);
  return (
    <div className="relative w-[100vw]">
      <GradientBackground/>
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-[100vw] text-white flex flex-col items-center">
        <Navbar/>
        <HeroSection/>
        <ToggleButton isQrMode={isQrMode} setIsQrMode={setIsQrMode}/>
        {isQrMode?<QRgenInput/>:<URLshortInput/>}
        <Dashboard/>
      </div>
    </div>
  );
}
