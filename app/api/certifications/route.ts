import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET() {
  try {
    // Connect to the database
    const { db } = await connectToDatabase()

    // Get all certifications from the database
    const certifications = await db.collection("certifications").find({}).sort({ issueDate: -1 }).toArray()

    // Return the certifications
    return NextResponse.json(certifications)
  } catch (error) {
    console.error("Error fetching certifications:", error)
    return NextResponse.json({ error: "Failed to fetch certifications" }, { status: 500 })
  }
}
