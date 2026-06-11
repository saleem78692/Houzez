import { Route, Routes } from "react-router";
import Navbar from "./Componants/Navbar";
import Home from "./Componants/Home";
import CaptionForm from "./Pages/CaptionForm";
import DummyNav from "./Pages/DummyNav";
import HomeSideSearch from "./Pages/HomeSideSearch";
import Map from "./Pages/Map";
import HomeImageBanner from "./Pages/HomeImageBanner";
import HomePropertySlider from "./Pages/HomePropertySlider";
import ErrorPage from "./Componants/ErrorPage";
import HomeRevolationSlider from "./Pages/HomeRevolationSlider";
import HomeVideo from "./Pages/HomeVideo";
import HomeAdvanceSearch from "./Pages/HomeAdvanceSearch";
import AllProperties from "./Pages/AllProperties";
import PropertyForSell from "./Pages/PropertyForSell";
import PropertyDetail from "./Pages/PropertyDetail";
import PropertyForRent from "./Pages/PropertyForRent";
import ByLocation from "./Pages/ByLocation";
import FeaturedProperties from "./Pages/FeaturedProperties";
import RecentProperties from "./Pages/RecentProperties";
import FloorPlans from "./Pages/FloorPlans";
import VirtualTour from "./Pages/VirtualTour";
import MortgageCalc from "./Pages/MortgageCalc";
import ContactAgent from "./Pages/ContactAgent";
import OurAgents from "./Pages/OurAgents";
import AgentProfile from "./Pages/AgentProfile";
import Agencies from "./Pages/Agencies";
import TopRealtors from "./Pages/TopRealtors";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import TermsPrivacy from "./Pages/TermsPrivacy";
import Login from "./Pages/Login";
import CreateListing from "./Pages/CreateListing";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/home-image-banner" element={<HomeImageBanner/>}/>
      </Route>

      <Route element={<DummyNav />}>
        <Route path="/home-caption-form" element={<CaptionForm />} />
        <Route path="/home-side-search" element={<HomeSideSearch />} />
        <Route path="/home-with-map" element={<Map/>}/>
        <Route path="/home-property-slider" element={<HomePropertySlider/>}/>
        <Route path="/home-revolution-slider" element={<HomeRevolationSlider/>}/>
        <Route path="/home-with-video" element={<HomeVideo/>}/>
        <Route path="/home-advanced-search" element={<HomeAdvanceSearch/>}/>
        <Route path="/all-properties" element={<AllProperties/>}/>
        <Route path="/for-sale" element={<PropertyForSell/>}/>
        <Route path="/for-rent" element={<PropertyForRent/>}/>
        <Route path="/by-location" element={<ByLocation/>}/>
        <Route path="/featured" element={<FeaturedProperties/>}/>
        <Route path="/recent" element={<RecentProperties/>}/>
        <Route path="/floor-plans" element={<FloorPlans/>}/>
        <Route path="/virtual-tour" element={<VirtualTour/>}/>
        <Route path="/mortgage" element={<MortgageCalc/>}/>
        <Route path="/contact-agent" element={<ContactAgent/>}/>
        <Route path="/our-agents" element={<OurAgents/>}/>
        <Route path="/agent-profile" element={<AgentProfile/>}/>
        <Route path="/agencies" element={<Agencies/>}/>
        <Route path="/top-realtors" element={<TopRealtors/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/terms" element={<TermsPrivacy/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/property/:id" element={<PropertyDetail/>}/>
      </Route>

      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
