import React from 'react';
import useChat from '../hooks/useChat';
import MessageBubble from './MessageBubble';
import InputArea from './InputArea';
import ApiSelector from './ApiSelector';
import RobotAvatar from './RobotAvatar';

const ChatInterface = () => {
  const { messages, handleSendMessage, selectedApi, handleApiChange } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6 font-robot">
      <div className="flex justify-center mb-4">
        <RobotAvatar />
      </div>
      <ApiSelector selectedApi={selectedApi} onApiChange={handleApiChange} />
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;