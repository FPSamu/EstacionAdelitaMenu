import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Desayunos from "./pages/Desayunos";
import Ensaladas from "./pages/Ensaladas";
import Especialidades from "./pages/Especialidades";
import Pizzas from "./pages/Pizzas";
import Paninos from "./pages/Paninos";
import BebidasFrias from "./pages/BebidasFrias";
import BebidasCalientes from "./pages/BebidasCalientes";
import BebidasTizanas from "./pages/BebidasTizanas";
import BebidasTes from "./pages/BebidasTes";
import PanaderiaHorno from "./pages/PanaderiaHorno";
import PanaderiaPanificacion from "./pages/PanaderiaPanificacion";

export default function RouterConfig() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/desayunos" element={<Desayunos />} />
        <Route path="/ensaladas" element={<Ensaladas />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/paninos" element={<Paninos />} />
        <Route path="/bebidasfrias" element={<BebidasFrias />} />
        <Route path="/bebidascalientes" element={<BebidasCalientes />} />
        <Route path="/bebidastizanas" element={<BebidasTizanas />} />
        <Route path="/bebidastes" element={<BebidasTes />} />
        <Route path="/panaderiahorno" element={<PanaderiaHorno />} />
        <Route path="/panaderiapanificacion" element={<PanaderiaPanificacion />} />
      </Routes>
    </AnimatePresence>
  );
}
