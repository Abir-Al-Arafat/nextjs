import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "abir",
    },
    {
      id: 2,
      name: "arafat",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      { error: "name should not be empty" },
      { status: 400 }
    );
  }
  return NextResponse.json(body, { status: 201 });
}
