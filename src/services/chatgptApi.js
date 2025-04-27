import { OpenAI } from 'openai';
// const CHATGPT_API_URL = "https://api.openai.com/v1";
// const apikey =`${import.meta.env.VITE_OPENAI_API_KEY}`  // api - open Ai

// console.log( new OpenAI(""));

// const client = new OpenAI(CHATGPT_API_KEY);

// const response = await client.responses.create({
//   model: "gpt-4.1",
//   input: "Write a one-sentence bedtime story about a unicorn.",
// });

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
console.log(apiKey);

const client = new OpenAI({ apiKey ,
   dangerouslyAllowBrowser: true
});

  const response = await client.responses.create({
    model: "gpt-4.1",
    input: "hi chatgpt me connect api you how are you "
  });
  console.log(response);


export const sendMessageChatGPT = async (message) => {
  // try {
  //   const response = await openai.chat.completions.create({
  //           model: "gpt-3.5-turbo",
  //           messages: [{ role: "user", content: message }],
  //       });
  //               return console.log(response)

  // } catch (error) {
  //   console.error("ChatGPT API Error:", error.message);
  //   throw error;
  // }
};
