import mongoose, { Schema } from "mongoose";

export interface IOrder {
  _id: string;
  product: Schema.Types.ObjectId;
  money_spend: number;
  currency: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    product: { type: Schema.ObjectId, ref: "Car" },
    money_spend: Number,
    currency: String,
    type: String,
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
