import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json(
      {
        error: `No user found for id: ${id}`,
      },
      { status: 404 }
    );
  return NextResponse.json([
    {
      id,
      name: "abir",
    },
  ]);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json(
      {
        error: `User not found: ${id}`,
      },
      { status: 404 }
    );
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json({
    id,
    name: body.name,
  });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json(
      {
        error: `User not found: ${id}`,
      },
      { status: 404 }
    );
  const body = await request.json();
  return NextResponse.json({
    status: true,
    message: "deleted successfully",
    body,
  });
}
