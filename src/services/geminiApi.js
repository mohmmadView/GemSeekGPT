import axios from "axios";



const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash`;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(GEMINI_API_KEY,"GEMINI");

export const sendMessageGemini = async (message) => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
      }
    );
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
