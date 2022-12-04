import Home from "pages/home";
import HubSearch from "pages/hubsearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const routes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hubsearch" element={<HubSearch />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
