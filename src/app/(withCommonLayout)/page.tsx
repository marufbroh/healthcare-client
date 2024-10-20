import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import Specialties from "@/components/UI/Specialties/Specialties";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Specialties/>
      <TopRatedDoctors/>
    </>
  )
}