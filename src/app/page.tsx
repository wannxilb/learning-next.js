import BenefitsSection from "@/components/BenefitsSection";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSections from "@/features/offices/sections/FreshSpaceSections";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <CitiesSection/>
      <BenefitsSection/>
      <FreshSpaceSections/>
    </>
  );
}
