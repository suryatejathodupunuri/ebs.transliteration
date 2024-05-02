import React from 'react';
import Logo from "../../assets/Logo.png";

function AboutUs() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            At eBhasha Setu Language Services, we are passionate about
            breaking down language barriers and fostering cross-cultural
            understanding. Reading an unknown language was never an easy task,
            which is why we have developed our innovative Transliteration
            Scheme.
          </p>
          <p className="text-lg mb-4">
            Our Transliteration Scheme allows you to read an unknown language
            in your regional language, making communication effortless and
            accessible. Whether you're exploring foreign texts, conducting
            research, or simply connecting with people from different
            linguistic backgrounds, our system empowers you to bridge the gap
            and unlock new opportunities.
          </p>
          <p className="text-lg mb-4">
            Developed by our team of language experts and technologists, our
            Transliteration Scheme is a testament to our commitment to
            linguistic accessibility and innovation. We believe that language
            should never be a barrier to knowledge or connection. Join us in
            our mission to make the world a more connected and inclusive place
            through the power of language.
          </p>
        </div>
        <div className="md:w-1/2">
        <img src={Logo}
            alt="Ebashasetu logo"
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
