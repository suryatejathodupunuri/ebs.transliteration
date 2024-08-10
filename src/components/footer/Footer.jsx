import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <footer
        className={`flex justify-center items-center bg-blue-200 py-4 ${
          isMobile ? "order-3 mt-auto" : "col-span-2 "
        }`}
      >
        <small>
          {new Date().getFullYear()} |
          <a
            href="https://ebhashasetu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ebhasha Setu Language Services Pvt Ltd | All Rights Reserved
          </a>
        </small>
      </footer>
    </>
  );
};

export default Footer;
