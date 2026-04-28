 import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePrinc from "./Home/HomePrinc";
import HomeAbout from "./Home/HomeAbout";
import { AnimatePresence } from "framer-motion";
 
 
 function AnimaRoutes(){
 const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/HomePrinc" element={<HomePrinc />} />
        <Route path="/HomeAbout" element={<HomeAbout />} />
      </Routes>
      </AnimatePresence>
  );
  }

  export default AnimaRoutes;