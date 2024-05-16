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
      const response = await fetch(
        "https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/compute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            modelId: "641d1d6592a6a31751ff1f49",
            task: "translation",
            input: [{ source: fileContent }],
            userId: "550789e49e144fd4b7fa7f1c3c380290",
          }),
        }
      );
      const data = await response.json();

      const target = data.output[0].target;
      setResponseData(target);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    
    <div class="max-w-xl px-4">
    <label class="flex justify-center w-50 h-24 px-2 transition bg-white rounded-md appearance-none cursor-pointer hover:bg-gray-100 focus:outline-none shadow-md hover:shadow-lg">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
                Drop files to Attach (only .txt files)
                <span class="text-blue-600 underline"></span>
            </span>
        </span>
        <input type="file" name="file_upload" class="hidden" onChange={handleFileChange}></input>
    </label>
</div>



      <div className="flex flex-col h-screen">
        <div className="px-10 flex items-center justify-center bg-gray-200 p-4 shadow-md rounded-lg relative">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                name="InputLanguage"
                id="InputLanguage"
                className="bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-8 pr-4 py-2"
              >
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
                <option value="Hindi">Hindi</option>
                <option value="Urdu">Urdu</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
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
              >
                <option value="Telugu">Telugu</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Urdu">Urdu</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
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

          <div className="absolute top-0 right-0 mr-4 mt-2 pt-2">
            <button
              className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
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
    </>
  );
};

export default Transliteration;
