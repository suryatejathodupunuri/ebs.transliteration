import React from "react";
import Bg from '../../assets/Bg.png';
import principlesData from '../home/principlesdata.json';

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen flex p-4">
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-black text-center">
            <h1 className="text-5xl font-epilogue font-bold mb-4 flex items-start">Bridging</h1>
            <h1 className="text-5xl font-epilogue font-bold mb-4 flex items-start pb-6">Languages</h1>
            <p className="text-lg pr-4 text-left pb-8">
            Discover seamless transliteration services, bridging language barriers effortlessly. Access 16 languages with our intuitive tool for precise communication.
            </p>
            <div className="text-left"> 
              <a href="http://localhost:3000/trynow" className="inline-block bg-black text-white font-bold py-2 px-4 rounded">
                Try Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={Bg} alt="background" className="max-w-full max-h-full" />
        </div>
      </div>
      <div className="container mx-auto py-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Principles</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {principlesData.map((principle, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-4">
                <img
                  src={principle.image}
                  alt={principle.principle}
                  className="w-24 h-24 object-cover object-center mx-auto mb-4"
                  style={{ borderRadius: "0%" }} 
                />
                <h2 className="text-xl font-semibold mb-2 text-center">{principle.principle}</h2>
                <p className="text-gray-700 text-center">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
