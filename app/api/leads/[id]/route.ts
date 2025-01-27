import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb"; // Adjust the import path based on your project structure

// PATCH /api/leads/[id] - Assign Salesperson to a Lead
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }>}) {
  try {
    const id  = (await params).id;
    const { assignedSalesperson } = await req.json();

    // Ensure the salesperson is provided
    if (!assignedSalesperson) {
      return NextResponse.json({ error: "Salesperson is required" }, { status: 400 });
    }

    // Update the lead with the assigned salesperson
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: { assignedSalesperson },
    });

    return NextResponse.json(updatedLead, { status: 200 });
  } catch (error) {
    console.error("Error assigning salesperson:", error);
    return NextResponse.json({ error: "Failed to assign salesperson" }, { status: 500 });
  }
}
