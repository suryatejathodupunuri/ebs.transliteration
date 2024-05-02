import React, { useState } from 'react';
import Transliteration from '../transliteration/Transliteration';
import Inputdropdown from '../transliteration/Inputdropdown';
import Outputdropdown from '../transliteration/Outputdropdown';
import Button from '../transliteration/Button';
import FileUpload from '../transliteration/FileUpload';
import InputTextarea from '../transliteration/InputTextarea';
import OutputTextarea from '../transliteration/OutputTextarea';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleButtonClick = () => {
    setOutputText('హలో హైదరాబాద్');
  };

  return (
    <div>
      <Transliteration />
      <div className="flex justify-between">
        <div className="w-1/4">
          <FileUpload />
        </div>
        <div className="w-1/4">
          <Inputdropdown />
        </div>
        <div className="w-1/4">
          <Outputdropdown />
        </div>
        <div className="w-1/4">
          <Button onClick={handleButtonClick} />
        </div>
      </div>
      <br />
      <div className="flex gap-4">
        <InputTextarea onChange={(e) => setInputText(e.target.value)} />
        <OutputTextarea text={outputText} />
      </div>
    </div>
  );
};

export default Home;
