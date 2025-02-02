import { NextResponse } from "next/server";
import Order from "../../models/order";
import connectMongo from "../../utils/connectMongo";

//buradaki route yerine serverAction kullandik. orders-page 'e bak
export async function GET() {
  try {
    await connectMongo();
    const orders = Order.find().populate("product");
    return NextResponse.json({ orders });
  } catch (error) {
    return NextResponse.json({
      message: "Orders is not found",
    });
  }
}
