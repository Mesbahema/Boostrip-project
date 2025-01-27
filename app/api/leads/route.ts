import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(
  request: Request,
) {
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
    // lead
  }, { status: 201 });
  //   } 
  //   catch (error: any) {
  //     return NextResponse.json({ error: error.message }, { status: 500 });
  //   }
}