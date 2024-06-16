// ---------------------------------- Modules -----------------------------------
// External
import React from "react";
import { Route, Routes } from "react-router-dom";

// Internal
import AboutPage from "../AboutPage/AboutPage";
import BenefitsPage from "../BenefitsPage/BenefitsPage";
import EmissionsPage from "../EmissionsPage/EmissionsPage";
import HomePage from "../HomePage/HomePage";
import HowToRecyclePage from "../HowToRecyclePage/HowToRecyclePage";
import IndustriesPage from "../IndustriesPage/IndustriesPage";
import Material from "../../components/Materials/Material";
import MaterialEditForm from "../../components/Materials/MaterialEditForm";
import MaterialsPage from "../MaterialsPage/MaterialsPage";
import NavBar from "../../components/NavBar/NavBar";
import RoadmapPage from "../RoadmapPage/RoadmapPage";

// ---------------------------------- Component ---------------------------------
export default function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/benefits-of-recycling" element={<BenefitsPage />} />
        <Route path="/emissions" element={<EmissionsPage />} />
        <Route path="/how-to-recycle" element={<HowToRecyclePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/materials/:slug" element={<Material />} />
        <Route path="/materials/edit/:slug" element={<MaterialEditForm />} />
        <Route path="/roadmap-of-waste" element={<RoadmapPage />} />
      </Routes>
    </main>
  );
}
