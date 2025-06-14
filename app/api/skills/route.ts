import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET() {
  try {
    // Connect to the database
    const { db } = await connectToDatabase()

    // Get all skills from the database
    const skills = await db.collection("skills").find({}).toArray()

    // Return the skills
    return NextResponse.json(skills)
  } catch (error) {
    console.error("Error fetching skills:", error)
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}
