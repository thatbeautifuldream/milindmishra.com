import { env } from "@/env";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json();

    // Require secret key for security
    if (!secret) {
      return NextResponse.json(
        { message: "Secret key is required" },
        { status: 401 }
      );
    }

    if (secret !== env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Default to revalidating the blog page if no path is specified
    const pathToRevalidate = path || "/blog";

    // Revalidate the specified path
    revalidatePath(pathToRevalidate);

    return NextResponse.json({
      message: `Path ${pathToRevalidate} revalidated successfully`,
      revalidated: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        message: "Error revalidating path",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Revalidation API endpoint. Use POST method with path and secret.",
    usage: {
      method: "POST",
      body: {
        path: "/blog (optional, defaults to /blog)",
        secret: "your-secret-key (required)",
      },
    },
  });
}
