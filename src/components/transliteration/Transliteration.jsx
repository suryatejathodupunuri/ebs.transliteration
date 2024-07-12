import React, { useState } from "react";

const Transliteration = () => {
  // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [responseData, setResponseData] = useState("");
  const [inputLang, setInputLang] = useState("");
  const [outputLang, setOutputLang] = useState("");
  const [isLoading, setLoading] = useState(false);


  
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
    setResponseData('');
    if (!inputLang || !outputLang) {
      alert("Please select both source and target languages.");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/transliterate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          src: inputLang,
          tar: outputLang,
          inp: fileContent,
        }),
      });
      const data = await response.json();
      const target = data[0].output;
      const status = data[1].status;
      setResponseData(target);
      console.log(target);
      console.log(status);
    } catch (error) {
      console.error("Error:", error);
      alert("Please try after sometime.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen px-10 pt-6">
      <div className="flex items-center justify-between bg-gray-200 p-4 shadow-md rounded-lg relative">
        <div className="flex items-center">
          <label className="flex justify-center w-50 h-12 px-2 transition bg-white rounded-md appearance-none cursor-pointer hover:bg-gray-100 focus:outline-none shadow-md hover:shadow-lg">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="text-center">
                <span className="font-large text-bold text-gray-600">Upload  </span>
                <p className="text-xs text-gray-500">.txt files only</p>
              </div>
            </span>
            <input
              type="file"
              name="file_upload"
              className="hidden"
              accept=".txt"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <select
              name="InputLanguage"
              id="InputLanguage"
              className="bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-8 pr-4 py-2"
              value={inputLang}
              onChange={(e) => setInputLang(e.target.value)}
            >
              <option disabled value="">
                Source
              </option>
              <option value="eng">English</option>
              <option value="tel">Telugu</option>
              <option value="hin">Hindi</option>
              <option value="urd">Urdu</option>
              <option value="tam">Tamil</option>
              <option value="mal">Malayalam</option>
              <option value="ben">Bengali</option>
              <option value="guj">Gujarati</option>
              <option value="pan">Punjabi</option>
              <option value="kan">Kannada</option>
              <option value="ori">Oriya</option>
              <option value="mar">Marathi</option>
              <option value="asm">Assamese</option>
              <option value="kok">Konkani</option>
              <option value="bod">Bodo</option>
              <option value="nep">Nepali</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="OutputLanguage"
              id="OutputLanguage"
              className="bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-8 pr-4 py-2"
              value={outputLang}
              onChange={(e) => setOutputLang(e.target.value)}
            >
              <option disabled value="">
                Target
              </option>
              <option value="hin">Hindi</option>
              <option value="eng">English</option>
              <option value="tel">Telugu</option>
              <option value="urd">Urdu</option>
              <option value="tam">Tamil</option>
              <option value="mal">Malayalam</option>
              <option value="ben">Bengali</option>
              <option value="guj">Gujarati</option>
              <option value="pan">Punjabi</option>
              <option value="kan">Kannada</option>
              <option value="ori">Oriya</option>
              <option value="mar">Marathi</option>
              <option value="asm">Assamese</option>
              <option value="kok">Konkani</option>
              <option value="bod">Bodo</option>
              <option value="nep">Nepali</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className={`bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>

      <div className="flex flex-grow">
        <textarea
          className="w-1/2 h-64 border p-4"
          placeholder="Enter Text Here."
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
        />
        <textarea
          className="w-1/2 h-64 border p-4"
          placeholder="Transliterated text will appear here..."
          value={responseData}
          onChange={(e) => setResponseData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Transliteration;
