import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(
  request: Request,
) {
  try {
    const body = await request.json();

    const { name, email, source } = await body;

    // Validation (Ensure all fields are present)
    if (!name || !email || !source) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create new lead
    const lead = await prisma.lead.create({
      data: {
        name, email, source,
        assignedSalesperson: body.assignedSalesperson || null,
      },
    });

    return NextResponse.json({
      success: true,
      lead
    }, { status: 201 });
  }
  catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany(); // Fetch all leads from the database
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}