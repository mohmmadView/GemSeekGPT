import React, { useState } from 'react';

const InputArea = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessageClick = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && inputText.trim()) {
      handleSendMessageClick();
    }
  };

  return (
    <div className="  field has-addons  mt-4 ">
      <div className="control is-expanded">
        <input
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="پیام خود را بنویسید..."
        className="input is-primary is-fullwidth "
        />
      </div>
      <div className="control">
      <button
        onClick={handleSendMessageClick}
        className="button is-primary "
      >
        ارسال
      </button>
      </div>
    </div>
  );
};

export default InputArea;