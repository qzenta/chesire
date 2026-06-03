import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name ?? "" },
        listIds: [2],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const err = await res.text();
      console.error("Brevo newsletter error:", err);
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
