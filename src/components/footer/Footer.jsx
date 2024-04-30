import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-1xl text-gray-600 bg-gray-100 border-t border-gray-300 py-2 text-center">
        <small>
          Designed and developed by Webdevelopment Team {new Date().getFullYear()} | All
          Rights Reserved
        </small>
      </footer>
    </div>
  );
};

export default Footer;