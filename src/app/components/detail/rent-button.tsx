"use client";
import { FC, useState } from "react";
import { ICar } from "@/app/api/models/car";
import { getPaymentURL } from "@/app/utils/service";
import Loader from "../loader";

type Props = {
  car: ICar;
};

const RentButton: FC<Props> = ({ car }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRent = async () => {
    setIsLoading(true);
    getPaymentURL(car)
      .then((url) => (window.location.href = url))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleRent}
      className="bg-basic-blue  py-2 px-6 text-white rounded-md hover:brightness-90 transition font-bold"
    >
      {isLoading ? <Loader /> : "Rent Now"}
    </button>
  );
};

export default RentButton;
