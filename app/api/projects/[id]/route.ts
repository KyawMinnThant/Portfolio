import { projects } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (isNaN(parseInt(id)))
    return NextResponse.json({
      message: "Invalid ID",
    });
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return NextResponse.json({ message: "Project not found" });

  return NextResponse.json(project);
}
