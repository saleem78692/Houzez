import React from "react";
import Slider from "../Componants/Slider";
import PropertySlider from "../Componants/PropertySlider";
import KeywordSearch from "../Componants/KeywordSearch";
import FinestProperty from "../Componants/FinestProperty";
import ExploreCity from "../Componants/ExploreCity";
import HouzezChoice from "../Componants/HouzezChoice";
import Residential from "../Componants/Residential";
import Agent from "../Componants/Agent";
import Testomonial from "../Componants/Testomonial";
import Footer from "../Componants/Footer";
function HomeRevolationSlider(){
    return(
        <>
        <PropertySlider/>
        <KeywordSearch/>
        <Slider/>
        <Residential/>
        <FinestProperty/>
        <ExploreCity/>
        <HouzezChoice/>
        <Agent/>
        <Testomonial/>
        <Footer/>
        </>
    )
}
export default HomeRevolationSlider;