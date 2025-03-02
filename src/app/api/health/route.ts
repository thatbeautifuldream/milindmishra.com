import { NextResponse } from "next/server";

const funHealthMessages = [
  "🚀 Server running smoother than butter chicken gravy!",
  "🎯 System performance ekdum jhakaas hai!",
  "🌟 All services working like a well-oiled tandoor!",
  "🎭 Backend as reliable as mom's ghar ka khana!",
  "🎪 Servers dancing better than a Bollywood finale!",
  "🔥 System is hotter than Chennai summer, but still working perfectly!",
  "🎯 Sab changa si! All systems green!",
  "🎨 Server running faster than Mumbai local in peak hours!",
  "🎊 Performance solid like Rajinikanth movies!",
  "✨ System working smoother than Dhoni's helicopter shot!",
  "🎯 Server uptime longer than a Indian wedding celebration!",
  "🌈 Everything working, bilkul first class!",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const randomMessage =
    funHealthMessages[Math.floor(Math.random() * funHealthMessages.length)];

  return NextResponse.json({
    status: "ok",
    message: randomMessage,
    timestamp: new Date().toISOString(),
  });
}
