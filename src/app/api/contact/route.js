import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import Message from "@/models/Message";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    await connectDB();

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { success: true, data: newMessage },
      { status: 201 },
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
