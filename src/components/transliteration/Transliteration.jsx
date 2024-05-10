import React, { useState } from "react";

const Transliteration = () => {
  // eslint-disable-next-line
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
       const response = await fetch('http://10.2.63.12:5000/transliterate',
       {
         method: 'POST', 
         headers: {
           'Content-Type': 'application/json', 
         },
         body: JSON.stringify({"input_string" :fileContent,"source": "hin","target": "tel"})
         
       });
       const data = await response.json();
       console.log(data);
       const target=data.transliterated_string;
       setResponseData(target);
    } catch (error) {
       console.error("Error:", error);
    }
   };

  return (
    <>
      
<div className="max-w-2xl mx-auto flex items-center justify-center pt-3 mb-2">
 <label
    className="block mr-4 text-sm font-medium text-gray-900 dark:text-gray-300"
    htmlFor="file_input"
 >
    Select Source File
 </label>
 <input
    className="block w-40 sm:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-blue-50 dark:text-gray-400 focus:outline-none dark:bg-blue-900 dark:border-gray-600 dark:placeholder-gray-400"
    id="file_input"
    type="file"
    onChange={handleFileChange}
 />
</div>
<div className="px-10 flex items-center justify-center">
  <div className="flex items-center space-x-4">
    <div className="flex items-center">
      <label htmlFor="InputLanguage" className="mr-2">
        Choose Source Language:
      </label>
      <select name="InputLanguage" id="InputLanguage" className="mr-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="English">English</option>
        <option value="Telugu">Telugu</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
        <option value="Tamil">Tamil</option>
        <option value="Malyalam">Malyalam</option>
      </select>
  </div>

    <div className="flex items-center">
      <label htmlFor="OutputLanguage" className="mr-2">
        Choose Target Language:
      </label>
      <select name="OutputLanguage" id="OutputLanguage" className="mr-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="Telugu">Telugu</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
        <option value="Tamil">Tamil</option>
        <option value="Malyalam">Malyalam</option>
      </select>
    </div>
 </div>

 <div className="ml-4">
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
