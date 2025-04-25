import React from 'react';
import useChat from '../hooks/useChat';
import MessageBubble from './MessageBubble';
import InputArea from './InputArea';
import ApiSelector from './ApiSelector';
import RobotAvatar from './RobotAvatar';

const ChatInterface = () => {
  const { messages, handleSendMessage, selectedApi, handleApiChange } = useChat();

  return (
    <div className="flex box flex-col has-background-primary-dark	 w-10/12   my-6 p-2 font-robot">
      <div className="flex justify-center mb-4">
        <RobotAvatar />
      </div>
      <ApiSelector selectedApi={selectedApi} onApiChange={handleApiChange} />
      <div className=" flex-grow overflow-y-auto mb-4 h-8/12 ">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <InputArea className="w-full" onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;