import { FC } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { ICar } from "@/app/api/models/car";
import RentButton from "./rent-button";

interface Props {
  car: ICar;
}

const CarInfo: FC<Props> = ({ car }) => {
  const arr = [
    {
      title: "Araç Type",
      value: car?.type,
    },
    {
      title: "Capacity",
      value: car?.capacity,
    },

    {
      title: "Fuel Type",
      value: car?.fuelType,
    },
    {
      title: "Color",
      value: car?.color,
    },
    {
      title: "Drive",
      value: car?.drive,
    },
    {
      title: "Year",
      value: car?.year,
    },
    {
      title: "Gasoline",
      value: car?.gasoline || "electric",
    },
    {
      title: "Transmission",
      value: car?.transmission,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-around">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            {car?.make} {car?.model}
          </h1>

          <FaHeart className="text-red-500 text-3xl" />
        </div>

        <div className="flex gap-2 my-3 items-center">
          {new Array(5).fill("").map((i, key) => (
            <FaStar className={key < 4 ? "text-yellow-500" : "text-gray-200"} />
          ))}

          <span className="text-zinc-400  text-sm ms-3">440+ Rewiev</span>
        </div>

        <p className="leading-8 tracking-wide font-semibold text-md text-zinc-500 mb-8 mt-5 text-[18px]">
          {car?.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {arr.map(({ title, value }) => (
            <p className="flex justify-around">
              <span className="text-gray-400">{title}</span>
              <span className="text-zinc-800">{value}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-around mt-8">
        <p>
          <span className="text-2xl font-semibold">${car?.price} /</span>
          <span className="ms-1 text-zinc-400 font-bold">day</span>
        </p>
        <RentButton car={car} />
      </div>
    </div>
  );
};

export default CarInfo;
