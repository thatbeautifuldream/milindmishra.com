import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/thatbeautifuldream/0d70e38808751c8b7b53167303bd7df5/raw/resume.json"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch resume data: ${response.status}`);
    }

    const resumeData = await response.json();
    return NextResponse.json(resumeData);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch resume data" },
      { status: 500 }
    );
  }
}
