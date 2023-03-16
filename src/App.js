import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Token from "./container/token/Token";
import Homepage from "./container/homepage/Homepage";
import Services from "./container/services/Services";
import Roadmap from "./container/roadmap/Roadmap";
import Social from "./container/social/Social";
import Footer from "./components/footer/Footer";
import ContactUs from "./container/contact/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= { <Homepage />} />
        <Route path="/services" element= { <Services />} />
        <Route path="token" element= { <Token />} />
        <Route path="/roadmap" element= { <Roadmap />} />
        <Route path="/social" element= { <Social />} />
        <Route path="/footer" element= { <Footer />} />
        <Route path="/contact" element= { <ContactUs />} />
        {/* <Homepage />
        <Services />
        <Token />
        <Roadmap />
        <Social />
        <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
