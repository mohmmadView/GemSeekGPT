import React from 'react';

/**
 * ApiSelector Component
 * 
 * A functional React component that renders a group of radio buttons for selecting an API.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.selectedApi - The currently selected API value.
 * @param {Function} props.onApiChange - Callback function to handle API selection changes.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const ApiSelector = ({ selectedApi, onApiChange }) => {
  return (
    <div className="flex p-3 font-semibold justify-center text-amber-50 bg-amber-800 space-x-4 mb-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          value="deepseek"
          checked={selectedApi === 'deepseek'}
          onChange={(e) => onApiChange(e.target.value)}
          className="form-radio text-deepseek"
        />
        <span className="text-deepseek font-semibold">DeepSeek</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          value="gemini"
          checked={selectedApi === 'gemini'}
          onChange={(e) => onApiChange(e.target.value)}
          className="form-radio text-gemini"
        />
        <span className="text-gemini font-semibold">Gemini</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          value="chatgpt"
          checked={selectedApi === 'chatgpt'}
          onChange={(e) => onApiChange(e.target.value)}
          className="form-radio text-chatgpt"
        />
        <span className="text-chatgpt font-semibold">ChatGPT</span>
      </label>
    </div>
  );
};

export default ApiSelector;