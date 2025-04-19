import axios from "axios";
const Api_Key= process.env.OPEN_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash`;
const GEMINI_API_KEY = "Api-Key";

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
