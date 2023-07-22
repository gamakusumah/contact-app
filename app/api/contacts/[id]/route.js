import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name, newPhoneNumber: phoneNumber } = await req.json();
  await connectMongoDB();
  await Contact.findByIdAndUpdate(id, { name, phoneNumber });
  return NextResponse.json({ message: "Contact Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const contact = await Contact.findById(id);
  return NextResponse.json({ contact }, { status: 200 });
}
