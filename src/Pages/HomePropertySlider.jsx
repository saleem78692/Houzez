import React from "react";
import PropertySlider from "../Componants/PropertySlider";
import Footer from "../Componants/Footer";
import Slider from "../Componants/Slider";
import FinestProperty from "../Componants/FinestProperty";
import HouzezChoice from "../Componants/HouzezChoice";
import ExploreCity from "../Componants/ExploreCity";
import Agent from "../Componants/Agent";
import Testomonial from "../Componants/Testomonial";
import KeywordSearch from "../Componants/KeywordSearch";
function HomePropertySlider() {
    return (
        <>
        <KeywordSearch/>
        <PropertySlider/>
        <Slider/>
        <FinestProperty/>
        <HouzezChoice/>
        <ExploreCity/>
        <Agent/>
        <Testomonial/>
        <Footer/>
        </>
    )
}
export default HomePropertySlider;