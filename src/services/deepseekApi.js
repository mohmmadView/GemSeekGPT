import axios from "axios";

const DEEPSEEK_API_URL = "https://api.deepseek.com";
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY
console.log(DEEPSEEK_API_KEY);


export const sendMessageDeepSeek = async (message) => {
  try {
    const response = await axios.post(
      DEEPSEEK_API_URL,
      {
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw error;
  }
};
