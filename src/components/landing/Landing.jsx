import React from "react";
import Bg from '../../assets/Bg.png'
function Landing() {
  return (
    <>
    <div className="bg-blue-100 h-screen flex p-6 ">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-black text-center">
          <h1 className="text-4xl font-bold mb-4">Bhashini Web Translation Plugin</h1>
          <p className="text-lg">Welcome to the Bhashini Web Translation Plugin, your gateway to seamless language translation and communication. Powered by Bhashini, our plugin offers unparalleled capabilities to translate content across various indic languages effortlessly. Experience the convenience and efficiency of language translation like never before with our plugin. Start translating today and unlock new possibilities for communication and collaboration.</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={Bg} alt="background" className="max-w-full max-h-full" />
      </div>
    </div>
 </>
  );
}

export default Landing;