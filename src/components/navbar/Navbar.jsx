import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className="border-b border-gray-300  sticky self-start mb-3"
        style={{
          top: 0,
          left: 0,
          right: 0,
          background: "#ffffff",
          zIndex: 1,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-0 flex-wrap">
          <Link to="/">
            <div className="flex justify-center">
              <img src={Logo} alt="logo" className="cursor-pointer mr-2 h-12" />
              <h5 className="mb-2 mt-0 text-xs font-extrabold leading-tight text-gray-900 dark:text-white md:text-3xl lg:text-4xl pt-1.5">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      |  Transliteration
    </span>
  </h5>
            </div>
          </Link>


          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full`}
          >
            <ul className="text-sm text-gray-600 lg:flex lg:justify-between">
              <li
                className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${
                  location.pathname === "/" ? "text-green-700" : ""
                }`}
              >
                <Link to="/">Home</Link>
              </li>
        
              <li
                className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${
                  location.pathname === "/about" ? "text-green-700" : ""
                }`}
              >
              
                <Link to="/trynow">Try Now</Link>
              </li>
              <li
                className={`lg:px-3 py-1 hover:text-blue-500 font-semibold ${
                  location.pathname === "/contact" ? "text-green-700" : ""
                }`}
              >
                <Link to="/contactus">Contact Us</Link>
              </li>
              
              
              
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
