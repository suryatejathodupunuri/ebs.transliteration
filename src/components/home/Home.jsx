import React from "react";
import AboutImage from "../../assets/aboutImage.jpg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <div
        className={`grid  ${
          isMobile ? "grid-rows-[1fr_1fr_auto]" : "grid-cols-[1fr_1fr]"
        } gap-4`}
      >
        {/* Text Column (1/4th of the screen width) */}
        <div
          className={`${
            isMobile ? "w-full" : "col-span-1"
          } flex items-center justify-center p-4`}
        >
          <div className="text-black text-center">
            <h1 className="text-4xl font-epilogue font-bold mb-2">Bridging Languages</h1>
            
            <p className="text-base text-left mb-6">
              Discover seamless transliteration services, bridging language
              barriers effortlessly. Access 16 languages with our intuitive tool
              for precise communication.
            </p>
          </div>
        </div>

        {/* Image Column (1/3rd of the screen width) */}
        <div
          className={`${
            isMobile ? "w-full" : "col-span-1"
          } flex items-center justify-center p-4`}
        >
          <div className="w-100 h-80 flex items-center justify-center bg-white rounded-lg overflow-hidden">
            <img
              src={AboutImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
        className={`grid  ${
          isMobile ? "grid-rows-[1fr_1fr_auto]" : "grid-cols-[1fr_1fr]"
        } gap-4`}
      >
        <div
          className={`${
            isMobile ? "w-full" : "col-span-1"
          } flex items-center justify-center p-4`}
        >
          <Link
            to="/trynow"
            className="inline-block bg-black text-white font-bold py-2 px-4 rounded"
          >
            Try Now
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
