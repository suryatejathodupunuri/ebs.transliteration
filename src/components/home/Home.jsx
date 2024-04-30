import React from 'react'
import Transliteration from '../transliteration/Transliteration'
import Textarea from '../transliteration/Textarea'
import Inputdropdown from '../transliteration/Inputdropdown';
import Outputdropdown from '../transliteration/Outputdropdown';
import Button from '../transliteration/Button';
import FileUpload from '../transliteration/FileUpload';

const Home = () => {
  return (
    <div>
      <Transliteration/>
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
        <Button />
      </div>
    </div>
      <br></br>
      <div className="flex gap-4">
      <Textarea></Textarea>
      <Textarea></Textarea>
      </div>
    </div>
  );
};
export default Home