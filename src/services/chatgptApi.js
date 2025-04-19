import axios from "axios";

const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY ="ّapi-Key";  // api - open Ai

export const sendMessageChatGPT = async (message) => {
  try {
    const response = await axios.post(
      CHATGPT_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATGPT_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("ChatGPT API Error:", error);
    throw error;
  }
};
