
import { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
        <div>
            <label>Enter your Product/Service Information Page or URL to Get Started.</label>
        <input className=''
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Paste your links here"
        />
        <button className=''>Upload Files</button>
        </div>
        <div>
            <label>Enter Your Business Mission Statement or About Page URL So That We Can Make Our Suggestions More Tailored.(OPTIONAL)</label>
        <input className=''
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Paste your links here"
        />
        <button className=''>Upload Files</button>
        </div>
    </>
  );
};

export default InputBox;


