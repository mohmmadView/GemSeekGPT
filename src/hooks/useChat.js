import { useState, useCallback } from "react";
import { sendMessageDeepSeek } from "../services/deepseekApi";
import { sendMessageGemini } from "../services/geminiApi";
import { sendMessageChatGPT } from "../services/chatgptApi";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [selectedApi, setSelectedApi] = useState("gemini"); // پیش‌فرض DeepSeek

  const handleSendMessage = useCallback(
    async (newMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: "user" },
      ]);
      let response = "";
      try {
        switch (selectedApi) {
          case "deepseek":
            response = await sendMessageDeepSeek(newMessage);
            break;
          case "gemini":
            response = await sendMessageGemini(newMessage);
            break;
          case "chatgpt":
            response = await sendMessageChatGPT(newMessage);
            break;
          default:
            response = "API انتخاب شده نامعتبر است.";
        }
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "robot" },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "خطا در ارتباط با API.", sender: "robot", error: true },
        ]);
      }
    },
    [selectedApi]
  );

  const handleApiChange = useCallback((apiName) => {
    setSelectedApi(apiName);
  }, []);

  return { messages, handleSendMessage, selectedApi, handleApiChange };
};

export default useChat;
