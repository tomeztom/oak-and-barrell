import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_RESERVATION_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Reservation service not configured" },
      { status: 500 }
    );
  }

  try {
    const { name, partySize, date, time } = await request.json();

    if (!name || !partySize || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Combine date and time into ISO datetime string
    // time is in "5:00 PM" format — convert to 24h for ISO
    const [rawTime, period] = time.split(" ");
    const [hourStr, minute] = rawTime.split(":");
    let hour = parseInt(hourStr, 10);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    const dateTime = `${date}T${String(hour).padStart(2, "0")}:${minute}:00`;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        partySize: Number(partySize),
        dateTime,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create reservation" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
