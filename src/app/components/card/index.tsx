import React from "react";
import Image from "next/image";
import { ICar } from "@/app/api/models/car";
import { FaGasPump as Gas } from "react-icons/fa";
import { TbSteeringWheelFilled as Steering } from "react-icons/tb";
import { BsFillPeopleFill as People } from "react-icons/bs";
import generateImage from "@/app/utils/generateImage";
import Link from "next/link";

type Props = {
  car: ICar;
};

const Card: React.FC<Props> = ({ car }) => {
  const arr = [
    { icon: <Gas />, value: car.fuelType },
    { icon: <Steering />, value: car.transmission },
    { icon: <People />, value: car.capacity },
  ];
  return (
    <div className="border shadow rounded hover:shadow-lg p-6">
      <div>
        <h1
          className="text-[20px] font-bold text-zinc-700 line-clamp-1 cursor-pointer"
          title={`${car.make} ${car.model}`}
        >
          {car.make} {car.model}
        </h1>
        <p className="text-zinc-400">{car.type}</p>
      </div>
      <div className="max-lg:flex max-lg:justify-around max-lg:gap-10">
        <div className="h-[250px] relative w-full">
          <Image
            src={generateImage(car.make, car.model)}
            alt={car.model}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-start gap-5 max-lg:gap-10 justify-between">
          {arr.map((i, key) => (
            <div
              key={key}
              className="text-zinc-500 flex  justify-center items-center gap-2 text-lg"
            >
              <p className="text-2xl">{i.icon}</p>
              <p>{i.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-5">
        <p>
          <span className="text-zinc-800 text-xl font-bold">${car.price}</span>
          <span className="text-zinc-500 ps-1 font-semibold">/day</span>
        </p>
        <Link
          href={`/car/${car._id}`}
          className="bg-basic-blue text-xl font-bold py-1 px-3 rounded-md  hover:opacity-85 transition"
        >
          Car Detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
