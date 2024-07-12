import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-2 px-3">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-10 mr-2" /> 
          <h5 className="text-s font-bold md:text-lg lg:text-3xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">
              | Transliteration
            </span>
          </h5>
        </Link>

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center w-full lg:w-auto`}>
          <ul className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0 mt-3 lg:mt-0 text-sm text-gray-600">
            <li className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${location.pathname === "/" ? "text-green-700" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${location.pathname === "/trynow" ? "text-green-700" : ""}`}>
              <Link to="/trynow">Try Now</Link>
            </li>
            <li className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${location.pathname === "/contactus" ? "text-green-700" : ""}`}>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;