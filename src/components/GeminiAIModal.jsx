require('dotenv').config();
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  

  
  const apiKey = '';
  if (!apiKey) {
    throw new Error("API key is missing. Please set it in the .env file.");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  
  //   export const chatSession = model.startChat({
  //     generationConfig,
  //  // safetySettings: Adjust safety settings
  //  // See https://ai.google.dev/gemini-api/docs/safety-settings
      
  //   });
  let chatSession;
try {
  chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
  });
} catch (error) {
  console.error("Failed to start chat session:", error);
}

module.exports = {
  chatSession,
};
    
  