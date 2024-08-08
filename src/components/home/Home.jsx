import React from "react";
import Bg from "../../assets/Bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen flex p-4">
        <div className="w-1/2 flex items-center justify-center">
          <div className="pl-6 text-black text-center">
            <h1 className="text-5xl font-epilogue font-bold mb-4 flex items-start">
              Bridging
            </h1>
            <h1 className="text-5xl font-epilogue font-bold mb-4 flex items-start pb-6">
              Languages
            </h1>
            <p className="text-lg pr-4 text-left pb-8">
              Discover seamless transliteration services, bridging language
              barriers effortlessly. Access 16 languages with our intuitive tool
              for precise communication.
            </p>
            <div className="text-left">
              <Link
                to="/trynow"
                className="inline-block bg-black text-white font-bold py-2 px-4 rounded"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
        <img src={Bg} alt="background" style={{ width: '700px', height: '900px', objectFit: 'contain' }} />
        </div>
      </div>
      
    </>
  );
};

export default Home;
