import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  attendance: z.enum(["yes", "no"]),
  dietaryRestrictions: z.string().trim().max(200).optional(),
  message: z.string().trim().max(400).optional(),
});

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid RSVP payload" }, { status: 400 });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (endpoint) {
    const formspreeResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    if (!formspreeResponse.ok) {
      return NextResponse.json(
        { error: "Unable to submit RSVP" },
        { status: formspreeResponse.status },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
