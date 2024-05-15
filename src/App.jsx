import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ContactUs from "./components/contactus/Contactus";
import TryNow from "./components/trynow/TryNow";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trynow" element={<TryNow/>} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;