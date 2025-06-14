import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET() {
  try {
    // Connect to the database
    const { db } = await connectToDatabase()

    // Get all education entries from the database
    const education = await db.collection("education").find({}).sort({ endDate: -1 }).toArray()

    // Return the education entries
    return NextResponse.json(education)
  } catch (error) {
    console.error("Error fetching education:", error)
    return NextResponse.json({ error: "Failed to fetch education" }, { status: 500 })
  }
}
