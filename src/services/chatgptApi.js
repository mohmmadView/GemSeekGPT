import axios from "axios";

const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY ="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";

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
