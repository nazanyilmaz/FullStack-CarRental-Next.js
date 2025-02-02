import mongoose, { Schema } from "mongoose";

export interface ICar {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  color: string;
  mileage: number;
  fuelType: "Gas" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  drive: "fwd" | "rwd" | "awd" | "4fwd";
  type: string;
  description: string;
  capacity: number;
  gasoline?: number;
}

const carSchema = new Schema<ICar>({
  make: {
    type: String,
    required: [true, "make is required"],
  },
  model: {
    type: String,
    required: [true, "model is required"],
  },
  year: {
    type: Number,
    required: [true, "year is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  color: {
    type: String,
    required: [true, "color is required"],
  },
  mileage: {
    type: Number,
    required: [true, "mileage is required"],
  },
  fuelType: {
    type: String,
    required: [true, "fuelType is required"],
    enum: ["Gas", "Diesel", "Electric", "Hybrid"],
  },
  transmission: {
    type: String,
    required: [true, "transmission is required"],
    enum: ["Automatic", "Manual"],
  },
  drive: {
    type: String,
    required: [true, "drive is required"],
    enum: ["fwd", "rwd", "awd", "4fwd"],
  },
  type: {
    type: String,
    required: [true, "type is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
    maxLength: [300, "description 300 karakterden uzun olamaz"],
  },
  capacity: {
    type: Number,
    required: [true, "capacity is required"],
  },
  gasoline: {
    type: Number,
  },
});

// Her importta yeniden model oluşturmasını önlemek için önce mevcut modellerin arasında Car model var mı kontrol eder varsa onu export edip kullanir yoksa yenisini oluşturup export edip kullanir bu sekilde yazarsak
const Car = mongoose.models?.Car || mongoose.model("Car", carSchema);

export default Car;
