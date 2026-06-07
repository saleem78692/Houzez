import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import Slider from "../Componants/Slider";
import Residential from "../Componants/Residential";
import HouzezChoice from "../Componants/HouzezChoice";
import FinestProperty from "../Componants/FinestProperty";
import ExploreCity from "../Componants/ExploreCity";
import Agent from "../Componants/Agent";
import Testomonial from "../Componants/Testomonial";
import Footer from "../Componants/Footer";

function HomeImageBanner() {
    return (
       <>
       <KeywordSearch/>
       <Slider/>
       <Residential/>
       <HouzezChoice/>
       <FinestProperty/>
       <ExploreCity/>
       <Agent/>
       <Testomonial/>
       <Footer/>
       </>
    );
}

export default HomeImageBanner;
