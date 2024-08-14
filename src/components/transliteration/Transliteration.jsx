import React, { useState } from "react";
import { url } from "../../creds";
import { FaFile } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";

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
      )} ... ${fileName.slice(-10)}`;
      setFileName(shortenedFileName);
    } else {
      setFileName(fileName);
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      if (fileContent.length > 5000) {
        toast.error(
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
      toast.error("Please select a source language.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: "button",
      });
      return;
    }
    if (!outputLang) {
      toast.error("Please select a target language.");
      return;
    }
    if (inputLang === outputLang) {
      toast.error("Source and Target Languages cannot be same.");
      return;
    } else {
      toast.info("fetching..", { autoClose: 1500 });
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
      setTimeout(() => {
        toast.error("Server down, Please try after sometime.");
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-10 pt-6">
      <div className="flex items-center justify-between bg-gray-200 p-4 shadow-md rounded-lg relative">
        <div className="flex items-center">
          <label className="flex justify-center w-50 h-13 px-2 transition bg-white rounded-md appearance-none cursor-pointer hover:bg-gray-100 focus:outline-none shadow-md hover:shadow-lg">
            <span className="flex flex-col items-center space-y-1">
              <div className="text-center flex items-center justify-center rounded-l-md ">
                <span className="text-gray-600 text-xl">
                  <FaFile></FaFile>
                </span>
                <p
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content=".txt files only"
                >
                  Upload
                </p>
              </div>
            </span>
            <Tooltip id="my-tooltip" />
            <ToastContainer />
            <input
              type="file"
              name="file_upload"
              className="hidden"
              accept=".txt"
              onChange={handleFileChange}
            />
          </label>
          <div className="px-3 mt-2 text-sm font-bold text-gray-600 pb-2">
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
            {isLoading ? "Submit" : "Submit"}
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-grow pb-4">
          <div className="relative w-full h-80 border border-gray-300 rounded-l-lg shadow-md">
            <textarea
              style={{
                direction: isUrdu ? "rtl" : "ltr",
                fontSize: "20px",
                fontFamily: isUrdu ? "Nafees Web Naskh, sans-serif" : "inherit",
              }}
              className="w-full h-full resize-none outline-none bg-white  rounded-l-md p-6"
              placeholder="Enter Source text here."
              value={fileContent}
              onChange={(e) => {
                const newContent = e.target.value;
                const maxLength = 5000;

                if (newContent.length > maxLength) {
                  const trimmedContent = newContent.substring(0, maxLength);
                  toast.error(
                    "You have exceeded maximum limit, first 5000 characters will be considered"
                  );
                  setFileContent(trimmedContent);

                  return;
                }

                setFileContent(newContent);
              }}
            />
            <div
              className="absolute top-2 right-2 text-lg font-bold text-gray-600 hover:text-red-500 cursor-pointer"
              onClick={() => {
                setFileContent("");
                setFileName("");
              }}
            >
              X
            </div>
            <div className=" absolute bottom-2 right-2 text-sm text-gray-500">
              {fileContent.length}/5000
            </div>
          </div>
          <textarea
            style={{
              direction: isUrdu_o ? "rtl" : "ltr",
              fontSize: "20px",
              fontFamily: isUrdu_o ? "Nafees Web Naskh, sans-serif" : "inherit",
            }}
            className="w-full h-80 resize-none outline-none border border-gray-300 rounded-r-lg shadow-md p-5 bg-white"
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
