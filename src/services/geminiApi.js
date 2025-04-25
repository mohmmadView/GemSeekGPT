import {GoogleGenerativeAI} from "@google/generative-ai"
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
 const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
 const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
 console.log(GEMINI_API_KEY,"GEMINI",model);

export const sendMessageGemini = async (message) => {
  try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      const result = await model.generateContent(message);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  
return text
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
