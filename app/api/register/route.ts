import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

  const {name, email, password} = body;
  const hashedPassword = await bcrypt.hash(password, 12)

  console.log("Requested")
  const user = await prisma.user.create({
    data: {
      name, email, hashedPassword
    }
  })

  console.log("Requested: ", user)

  return NextResponse.json(user)
} catch(error) {
  console.log("Requested: ", error)
  return NextResponse.json({success: false, error: error.message})
}
}