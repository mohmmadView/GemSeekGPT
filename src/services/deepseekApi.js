import axios from "axios";
import OpenAi from 'openai';
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1";
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
let data = JSON.stringify({
  "messages": [
    {
      "content": "You are a helpful assistant",
      "role": "system"
    },
    {
      "content": "Hi",
      "role": "user"
    }
  ],
  "model": "deepseek-chat",
  "frequency_penalty": 0,
  "max_tokens": 2048,
  "presence_penalty": 0,
  "response_format": {
    "type": "text"
  },
  "stop": null,
  "stream": false,
  "stream_options": null,
  "temperature": 1,
  "top_p": 1,
  "tools": null,
  "tool_choice": "none",
  "logprobs": false,
  "top_logprobs": null
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: `${DEEPSEEK_API_URL}/chat/completions`,
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
  },
  data : data
};

// axios(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   // console.log(error);
// });
//  let apiClient =  axios.create({
//        baseURL: DEEPSEEK_API_URL,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
//         },
//       })
// console.log(axios);

export const sendMessageDeepSeek = async (endpoint, params = {}) => {
  try {
       let response = await apiClient.get(endpoint,{params});
       console.log(response);
       
    return response.data
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw error;
  }
};
