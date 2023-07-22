import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/contact";

export async function POST(request) {
  const { name, phoneNumber } = await request.json();
  await connectMongoDB();
  await Contact.create({ name, phoneNumber });
  return NextResponse.json({ message: "Contact Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const contacts = await Contact.find();
  return NextResponse.json({ contacts });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
}
