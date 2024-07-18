import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-1xl font-bold text-black-800 bg-gray-100 border border-gray-300 py-2 text-center shadow-lg">
        <small>
          {new Date().getFullYear()} | Ebhasha Setu Language Services Pvt Ltd | All Rights Reserved
        </small>
      </footer>
    </div>
  );
};

export default Footer;
