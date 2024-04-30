import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Head Office:</h1>
        <p className="mb-4">For more information on our product and services, please contact us at:</p>

        <h2 className="text-xl font-bold mb-2">eBhasha Setu Language Services Private Ltd.</h2>
        <p className="mb-2">Vindhya B5-106 & B5-107 Ground Floor,</p>
        <p className="mb-2">IIIT-H Campus, Survey no. 25,</p>
        <p className="mb-2">Gachibowli, Hyderabad-500032</p>
        
        <p className="mb-2"><span className="font-bold">Phone:</span> +91-9968036443</p>
        <p className="mb-4"><span className="font-bold">Email ID:</span> info@ebhashasetu.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
