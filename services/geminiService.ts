import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  systemInstruction: string
): Promise<string> => {
  if (!apiKey) {
    return "متاسفانه ارتباط با سرویس هوش مصنوعی برقرار نیست.";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview", 
      config: {
        systemInstruction: systemInstruction,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "متاسفانه در پردازش درخواست شما مشکلی پیش آمد. لطفا دوباره تلاش کنید.";
  }
};