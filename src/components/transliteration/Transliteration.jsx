import React, { useState } from "react";

const Transliteration = () => {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleFileChange = (e) => {
   
     const selectedFile = e.target.files[0];
     setFile(selectedFile);
 
     const reader = new FileReader();
     reader.onload = (event) => {
       setFileContent(event.target.result);
     };
     reader.readAsText(selectedFile);
  };
  
  const handleSubmit = async () => {
    try {
       const response = await fetch('http://localhost:3001/uppercase', {
         method: 'POST', // Specifies that this is a POST request
         headers: {
           'Content-Type': 'application/json', // Indicates that the body is JSON
         },
         body: JSON.stringify({ data: fileContent }), // The data to be sent in the request body
       });
       const data = await response.json();
       setResponseData(data.data); // Update the state with the response data
    } catch (error) {
       console.error("Error:", error);
    }
   };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="mb-2 mt-0 text-3xl font-large leading-tight text-primary text-center">
          Transliteration for Indian Languages
        </h1>
        <h5 className="mb-2 mt-0 text-s font-small leading-tight text-primary">
          Online Transliteration - Choose a file/Copy Paste text, Select
          Conversion type and submit.
        </h5>
      </div>

      <div className="flex flex-row space-x-4 mb-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Choose File
        </label>
        <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      {file && <p className="mt-0">Selected file: {file.name}</p>}

        <label htmlFor="InputLanguage" className="mr-2">
          Choose Input Language:
        </label>
        <select name="InputLanguage" id="InputLanguage" className="mr-2">
          <option value="English">English</option>
          <option value="Telugu">Telugu</option>
          <option value="Hindi">Hindi</option>
          <option value="Urdu">Urdu</option>
          <option value="Tamil">Tamil</option>
          <option value="Malyalam">Malyalam</option>
        </select>
        <label htmlFor="OutputLanguage" className="mr-2">
          Choose Output Language:
        </label>
        <select name="OutputLanguage" id="OutputLanguage" className="mr-2">
          <option value="Telugu">Telugu</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Urdu">Urdu</option>
          <option value="Tamil">Tamil</option>
          <option value="Malyalam">Malyalam</option>
        </select>
        <div>
          <button
            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mb-4">
      <textarea
        className="h-60 w-1/2 border-black border rounded border-double p-4"
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}

      />

      <textarea
        className="h-60 w-1/2 border-black border rounded border-double p-4"
        value={responseData}
        onChange={(e) => setResponseData(e.target.value)}

      />

      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={""}
        >
          Sample 1
        </button>
      </div>
    </>
  );
};

export default Transliteration;
