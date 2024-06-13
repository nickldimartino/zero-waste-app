import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HowToRecyclePage from "../HowToRecyclePage/HowToRecyclePage";
import BenefitsPage from "../BenefitsPage/BenefitsPage";
import RoadmapPage from "../RoadmapPage/RoadmapPage";
import ESGReportingPage from "../ESGReportingPage/ESGReportingPage";
import AboutPage from "../AboutPage/AboutPage";
import Material from "../../components/Materials/Material";
import Materials from "../Materials/MaterialsPage";
import MaterialEditForm from "../../components/Materials/MaterialEditForm";
import Industry from "../../components/Industries/Industry";
import Industries from "../Industries/IndustriesPage";
import IndustryEditForm from "../../components/Industries/IndustryEditForm";
import IndustriesPage from "../Industries/IndustriesPage";

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
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<Industry />} />
        <Route path="/industries/edit/:slug" element={<IndustryEditForm />} />
      </Routes>
      <Footer />
    </main>
  )
}
