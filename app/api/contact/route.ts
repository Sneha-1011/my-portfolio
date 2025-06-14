import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the request
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to the database
    const { db } = await connectToDatabase()

    // Insert the message into the database
    const result = await db.collection("messages").insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    })

    // Return a success response
    return NextResponse.json({ success: true, messageId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}
