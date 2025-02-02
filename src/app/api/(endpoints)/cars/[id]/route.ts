import { NextResponse } from "next/server";
import Car from "@/app/api/models/car";
import connectMongo from "@/app/api/utils/connectMongo";
import mongoose from "mongoose";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Params) {
  try {
    await connectMongo();
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const car = await Car.findById((await params).id).lean();
    return NextResponse.json(
      {
        car,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Database connection failed",
      },
      { status: 501 }
    );
  }
}
