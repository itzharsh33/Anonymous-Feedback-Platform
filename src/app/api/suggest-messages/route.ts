
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const DEFAULT_MESSAGES = [
  "What's one thing that always makes you smile?",
  "If you could visit any place, where would you go?",
  "What's a small goal you're excited about?",
];

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      messages: DEFAULT_MESSAGES,
      source: "fallback",
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt =
      "Generate exactly 3 friendly, open-ended questions for an anonymous " +
      "social messaging platform. Avoid sensitive topics. Each question " +
      "must be at most 18 words. Separate questions using ||.";

    const result = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
    httpOptions: {
      timeout: 30000,
    },
  },
    });

    const text = result.text ?? "";
    console.log("Gemini raw:", text);

    const messages = text
      .split("||")
      .map((m) => m.trim())
      .filter((m) => m.length > 0 && m.split(/\s+/).length <= 18)
      .slice(0, 3);

    for (const fallback of DEFAULT_MESSAGES) {
      if (messages.length >= 3) break;
      messages.push(fallback);
    }

    return NextResponse.json({ success: true, messages, source: "gemini" });
  } catch (error) {
   console.error("Suggestion generation failed:", error);
  return NextResponse.json({
    success: true,
    messages: DEFAULT_MESSAGES,
    source: "fallback",
    message: "Server is busy. Showing default suggestions instead.",
  });
  }
}








