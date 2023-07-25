import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./Components/ContactUsPage";
import Home from "./Components/Home.jsx";
import OurCompany from "./Components/OurCompany";
import OurExpertise from "./Components/OurExpertise";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/museo" element={<Home />} />
          <Route path="/ourExpertise" element={<OurExpertise />} />
          <Route path="/company" element={<OurCompany />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
