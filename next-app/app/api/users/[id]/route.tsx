import { NextRequest, NextResponse } from "next/server";

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
  if (!body.name) {
    return NextResponse.json(
      { error: "name should not be empty" },
      { status: 400 }
    );
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
