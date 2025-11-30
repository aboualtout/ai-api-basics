import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testModel() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ Error: OPENAI_API_KEY is missing in .env");
    return;
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: "Sag mir einen kurzen Satz." }],
    });

    console.log("Antwort vom Modell:");
    if (!response) {
      console.log("❌ Keine Antwort erhalten.");
      return;
    }
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("❌ Fehler beim API-Aufruf:", error);
  }
}

testModel();
