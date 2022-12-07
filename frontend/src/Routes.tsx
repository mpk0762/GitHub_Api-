import Home from "pages/home";
import HubSearch from "pages/hubsearch";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const routes = () => (
  <BrowserRouter>
    <Navbar />
    
      <Route component = {Home} path="/" exact/>
      <Route component = {HubSearch} path="/hubsearch" />
   
  </BrowserRouter>
);

export default routes;
