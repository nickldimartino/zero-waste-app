import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HowToRecyclePage from "../HowToRecyclePage/HowToRecyclePage";
import BenefitsPage from "../BenefitsPage/BenefitsPage";
import RoadmapPage from "../RoadmapPage/RoadmapPage";
import ESGReportingPage from "../ESGReportingPage/ESGReportingPage";
import AboutPage from "../AboutPage/AboutPage";
import Material from "../../components/Material/Material";
import Materials from "../../components/Materials/Materials";
import MaterialEditForm from "../../components/Material/MaterialEditForm";

export default function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/how-to-recycle" element={<HowToRecyclePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/benefits-of-recycling" element={<BenefitsPage />} />
        <Route path="/roadmap-of-waste" element={<RoadmapPage />} />
        <Route path="/esg-reporting" element={<ESGReportingPage />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:slug" element={<Material />} />
        <Route path="/materials/edit/:slug" element={<MaterialEditForm />} />
        <Route path="/industries" element={<Materials />} />
        <Route path="/industries/:slug" element={<Material />} />
        <Route path="/industries/edit/:slug" element={<MaterialEditForm />} />
      </Routes>
      <Footer />
    </main>
  )
}
