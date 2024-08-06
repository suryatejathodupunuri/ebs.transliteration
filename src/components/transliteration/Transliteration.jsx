import React, { useState } from "react";
import { url } from "../../creds";

const Transliteration = () => {
  // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [responseData, setResponseData] = useState("");
  const [inputLang, setInputLang] = useState("");
  const [outputLang, setOutputLang] = useState("");
  const [isLoading, setLoading] = useState(false);
  const isUrdu = inputLang === "urd";
  const isUrdu_o = outputLang === "urd";
  const clearData = () => {
    setFileContent("");
    setResponseData("");
    setFileName("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const fileName = selectedFile.name;
    const fileNameLength = fileName.length;
    if (fileNameLength > 20) {
      const middlePartStartIndex = 15;
      const shortenedFileName = `${fileName.slice(
        0,
        middlePartStartIndex
      )}...${fileName.slice(-10)}`;
      setFileName(shortenedFileName);
    } else {
      setFileName(fileName);
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      if (fileContent.length > 5000) {
        alert(
          "The file content exceeds maximum limit,First 5000 Characters will be considered."
        );
      }
      const limitedContent = fileContent.substring(
        0,
        Math.min(fileContent.length, 5000)
      );
      setFileContent(limitedContent);
    };

    reader.readAsText(selectedFile);
  };

  const handleSubmit = async () => {
    setResponseData("");
    if (!inputLang) {
      alert("Please select a source language.");
      return;
    }
    if (!outputLang) {
      alert("Please select a target language.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(url + "transliterate", {
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
      alert("Server down, Please try after sometime.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-10 pt-3">
      <div className="flex items-center justify-between bg-gray-200 p-4 shadow-md rounded-lg relative">
        <div className="flex items-center">
          <label className="flex justify-center w-50 h-13 px-2 transition bg-white rounded-md appearance-none cursor-pointer hover:bg-gray-100 focus:outline-none shadow-md hover:shadow-lg">
            <span className="flex flex-col items-center space-y-1">
              <div className="text-center">
                <span className="text-gray-600 text-xl">📁</span>
                <span className="text-s font-bold text-gray-600">Upload</span>
                <div className="text-xs font-bold text-gray-500">
                  ( .txt files only )
                </div>
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
          <div className="px-3 mt-2 text-sm font-bold text-gray-600">
            {fileName ? `${fileName}` : ""}
          </div>
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
              <option value="asm">Assamese</option>
              <option value="ben">Bengali</option>
              <option value="bod">Bodo</option>
              <option value="guj">Gujarati</option>
              <option value="hin">Hindi</option>
              <option value="kan">Kannada</option>
              <option value="kok">Konkani</option>
              <option value="mal">Malayalam</option>
              <option value="mar">Marathi</option>
              <option value="nep">Nepali</option>
              <option value="ori">Oriya</option>
              <option value="pan">Punjabi</option>
              <option value="eng">Roman(Eng)</option>
              <option value="tam">Tamil</option>
              <option value="tel">Telugu</option>
              <option value="urd">Urdu</option>
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
          <button
            onClick={() => {
              setInputLang(outputLang);
              setOutputLang(inputLang);
              setFileContent(responseData);
              setResponseData(fileContent);
            }}
            className="bg-white-500 font-xlarge text-black font-xbold py-2 px-4 rounded "
          >
            ⇆
          </button>
          <div className="relative">
            <select
              name="OutputLanguage"
              id="OutputLanguage"
              className="bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-8 pr-4 py-2"
              value={outputLang}
              onChange={(e) => {
                setOutputLang(e.target.value);
                setResponseData("");
              }}
            >
              <option disabled value="">
                Target
              </option>
              <option value="asm">Assamese</option>
              <option value="ben">Bengali</option>
              <option value="bod">Bodo</option>
              <option value="guj">Gujarati</option>
              <option value="hin">Hindi</option>
              <option value="kan">Kannada</option>
              <option value="kok">Konkani</option>
              <option value="mal">Malayalam</option>
              <option value="mar">Marathi</option>
              <option value="nep">Nepali</option>
              <option value="ori">Oriya</option>
              <option value="pan">Punjabi</option>
              <option value="eng">Roman(Eng)</option>
              <option value="tam">Tamil</option>
              <option value="tel">Telugu</option>
              <option value="urd">Urdu</option>
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
            onClick={clearData}
            className=" text-black font-bold py-2 px-4 rounded mr-4"
          >
            Clear
          </button>
          <button
            className={`bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-grow">
          <div className="relative w-full h-80 border border-black-600 p-4 mb-4">
            <textarea
              style={{
                direction: isUrdu ? "rtl" : "ltr",
                fontSize: "20px",
                fontFamily: isUrdu ? "Nafees Web Naskh, sans-serif" : "inherit",
              }}
              className="w-full h-full resize-none outline-none"
              placeholder="Enter Source text here."
              value={fileContent}
              onChange={(e) => {
                const newContent = e.target.value;
                const maxLength = 5000;

                if (newContent.length > maxLength) {
                  const trimmedContent = newContent.substring(0, maxLength);
                  alert(
                    "You have exceeded maximum limit, first 5000 characters will be considered"
                  );
                  setFileContent(trimmedContent);

                  return;
                }

                setFileContent(newContent);
              }}
            />
            <div
              className="absolute top-1 right-1 text-l text-black-500 hover:drop-shadow-xl cursor-pointer pr-1"
              onClick={() => {
                setFileContent("");
                setFileName("");
              }}
            >
              X
            </div>
            <div className="absolute bottom-1 right-1 text-sm text-gray-500 ">
              {fileContent.length}/5000
            </div>
          </div>
          <textarea
            style={{
              direction: isUrdu_o ? "rtl" : "ltr",
              fontSize: "20px",
              fontFamily: isUrdu_o ? "Nafees Web Naskh, sans-serif" : "inherit",
            }}
            className="w-full h-80 resize-none outline-none border p-4"
            placeholder="Transliterated text will appear here upon clicking submit."
            value={responseData}
            onChange={(e) => setResponseData(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify space-x-4">
        <button
          onClick={() => {
            setFileContent("transliteration system main aap kaa swaagat hai.");
            setInputLang("eng");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sample Roman
        </button>
        <button
          onClick={() => {
            setFileContent("ट्रांसलिट्रेशन सिस्टम मैं आप का स्वागत हैं। ");
            setInputLang("hin");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sample Hindi
        </button>
        <button
          onClick={() => {
            setFileContent("ٹرانسلیٹریشن سسٹم میں خوش آمدید۔ ");
            setInputLang("urd");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sample Urdu
        </button>
      </div>
    </div>
  );
};

export default Transliteration;
