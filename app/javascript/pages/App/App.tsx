import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HowToRecyclePage from "../HowToRecyclePage/HowToRecyclePage";
import BenefitsPage from "../BenefitsPage/BenefitsPage";
import RoadmapPage from "../RoadmapPage/RoadmapPage";
import EmissionsPage from "../EmissionsPage/EmissionsPage";
import AboutPage from "../AboutPage/AboutPage";
import Material from "../../components/Materials/Material";
import MaterialsPage from "../Materials/MaterialsPage";
import MaterialEditForm from "../../components/Materials/MaterialEditForm";

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
        <Route path="/emissions" element={<EmissionsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/materials/:slug" element={<Material />} />
        <Route path="/materials/edit/:slug" element={<MaterialEditForm />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </main>
  )
}
