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
    <div className="mt-4 flex items-center">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="پیام خود را بنویسید..."
        className="w-full p-3 rounded-md border robot-border focus:outline-none focus:ring-2 focus:ring-robot-blue font-robot resize-none h-12"
      />
      <button
        onClick={handleSendMessageClick}
        className="ml-2 p-3 rounded-md bg-robot-blue text-white font-bold focus:outline-none focus:ring-2 focus:ring-robot-blue robot-shadow"
      >
        ارسال
      </button>
    </div>
  );
};

export default InputArea;