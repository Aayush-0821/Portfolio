import { NextResponse } from "next/server";

const USERNAME = process.env.GITHUB_USERNAME!;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public?per_page=100`,
    );

    const events = await res.json();

    let pushes = 0;

    for (const event of events) {
      if (event.type === "PushEvent") {
        pushes += event.payload?.commits?.length ?? 1;
      }
    }

    return NextResponse.json({ pushes });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ pushes: 0 });
  }
}
