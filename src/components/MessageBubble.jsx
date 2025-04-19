import React from 'react';

const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  const bubbleClass = isUser ? 'bg-user-green text-white self-end rounded-bl-lg rounded-br-xl' : 'bg-robot-blue text-white self-start rounded-tr-lg rounded-tl-xl robot-shadow';
  const avatarClass = isUser ? 'bg-gray-400' : 'bg-robot-blue robot-shadow';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2 animate-slide-in`}>
      {!isUser && <div className={`w-8 h-8 rounded-full ${avatarClass} mr-2 flex items-center justify-center text-white font-bold`}>R</div>}
      <div className={`${bubbleClass} p-3 max-w-xs break-words`}>
        {message.text}
        {message.error && <span className="text-red-400 block text-xs mt-1">خطا</span>}
      </div>
      {isUser && <div className={`w-8 h-8 rounded-full ${avatarClass} ml-2 flex items-center justify-center text-white font-bold`}>U</div>}
    </div>
  );
};

export default MessageBubble;