import React, { useState } from "react";
import { NavLink } from "react-router";
import Slider from "./Slider";
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import SearchProperty from "./SearchProperty";
import Residential from "./Residential";
import HouzezChoice from "./HouzezChoice";
import FinestProperty from "./FinestProperty";
import ExploreCity from "./ExploreCity";
import Agent from "./Agent";
import Testomonial from "./Testomonial";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <SearchProperty />
      <Slider />
      <Residential />
      <HouzezChoice />
      <FinestProperty />
      <ExploreCity />
      <Agent />
      <Testomonial />
      <Footer />
    </>
  );
}

export default Home;
