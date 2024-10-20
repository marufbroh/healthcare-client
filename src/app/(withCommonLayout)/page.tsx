import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import Specialties from "@/components/UI/HomePage/Specialties/Specialties";
import { Button } from "@mui/material";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Specialties/>
      <TopRatedDoctors/>
      <WhyUs/>
    </>
  )
}