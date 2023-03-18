import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./container/homepage/Homepage";
import ContactUs from "./container/contact/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
