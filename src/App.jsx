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
      </Route>

      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
