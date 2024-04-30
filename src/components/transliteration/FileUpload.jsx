import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Choose File
      </label>
      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
      {file && <p className="mt-0">Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
