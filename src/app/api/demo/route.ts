import { tool } from "ai";
import { z } from "zod";
import { generateText } from "ai";

const logToConsoleTool = tool({
  description: "Log a message to the console",
  parameters: z.object({
    message: z.string().describe("The message to log to the console"),
  }),
  execute: async ({ message }) => {
    console.log(message);
  },
});

const logToConsole = async (prompt: string) => {
  await generateText({
    model,
    prompt,
    system:
      `Your only role in life is to log ` +
      `messages to the console. ` +
      `Use the tool provided to log the ` +
      `prompt to the console.`,
    tools: {
      logToConsole: logToConsoleTool,
    },
  });
};
