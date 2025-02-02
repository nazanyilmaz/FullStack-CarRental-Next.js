import { ICar } from "../api/models/car";

const API_URL = process.env.API_URL;

type getCarsRes = Promise<{ cars: ICar[] }>;
//All cars
export const getCars = async (): getCarsRes => {
  const res = await fetch(`${API_URL}/api/cars`);

  if (!res) {
    throw new Error("Cars data not available");
  }

  return res.json();
};

//a Car
type getCarRes = Promise<{ car: ICar }>;
export const getCar = async (id: string): getCarRes => {
  const res = await fetch(`${API_URL}/api/cars/${id}`);

  if (!res) {
    throw new Error("Car data not available");
  }

  return res.json();
};

//arac odeme oturumu olustur
export const getPaymentURL = async (car: ICar): Promise<string> => {
  const res = await fetch(`http://localhost:3000/api/checkout`, {
    method: "POST",
    body: JSON.stringify(car),
  });

  const data = await res.json();

  return data.url;
};
