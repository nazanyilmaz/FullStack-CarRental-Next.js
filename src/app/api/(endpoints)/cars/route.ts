import { NextResponse } from "next/server";
import connectMongo from "../../utils/connectMongo";
import Car from "../../models/car";

export async function GET() {
  try {
    await connectMongo();
    const cars = await Car.find();
    return NextResponse.json({ cars });
  } catch (error) {
    console.log("aracverileri alinamiyor");
    return NextResponse.json({ message: "cars data is not found" }, { status: 501 });
  }
}
