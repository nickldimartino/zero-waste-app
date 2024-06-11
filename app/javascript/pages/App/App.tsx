import React from "react";
import NavBar from "../../components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import HowToRecyclePage from "../HowToRecyclePage/HowToRecyclePage";
import BenefitsPage from "../BenefitsPage/BenefitsPage";
import RoadmapPage from "../RoadmapPage/RoadmapPage";
import RecyclingGamePage from "../RecyclingGamePage/RecyclingGamePage";
import ESGReportingPage from "../ESGReportingPage/ESGReportingPage";
import AboutPage from "../AboutPage/AboutPage";

export default function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/how-to-recycle" element={<HowToRecyclePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/benefits-of-recycling" element={<BenefitsPage />} />
        <Route path="/roadmap-of-waste" element={<RoadmapPage />} />
        <Route path="/recycling-game" element={<RecyclingGamePage />} />
        <Route path="/esg-reporting" element={<ESGReportingPage />} />
      </Routes>
      <Footer />
    </main>
  )
}
