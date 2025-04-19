import axios from "axios";

const DEEPSEEK_API_URL = "https://api.deepseek.com";
const DEEPSEEK_API_KEY = "sk-82792f8c12774604ba7bac7fb3defbb0";

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
