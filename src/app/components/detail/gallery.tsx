import { ICar } from "@/app/api/models/car";
import generateImage from "@/app/utils/generateImage";
import Image from "next/image";
import { FC } from "react";

interface Props {
  car: ICar;
}

const Gallery: FC<Props> = ({ car }) => {
  return (
    <div>
      <div className="bg-triangle bg-cover bg-center rounded-lg p-4 text-white pb-10">
        <h1 className="text-3xl font-semibold">
          Sports car with the best design and acceleration
        </h1>
        <p className=" text-zinc-300 mt-2 text-xl ">
          Safety and comfort while driving a futuristic and elegant sports car
        </p>
        <div className="relative h-[250px] ">
          <Image
            src={generateImage(car?.make, car?.model)}
            alt="A description of the image"
            unoptimized
            fill
            className=" object-contain"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 h-[150px]">
        <div className="relative">
          <Image
            className="object-contain rounded-xl "
            src={generateImage(car?.make, car?.model, "sur2", "1")}
            alt="A description of the image"
            unoptimized
            fill
            priority
          />
        </div>

        <div className="relative">
          <Image
            className="object-contain rounded-xl"
            src={generateImage(car?.make, car?.model, "sur3", "2")}
            alt="A description of the image"
            unoptimized
            fill
            priority
          />
        </div>
        <div className="relative">
          <Image
            className="object-contain rounded-xl"
            src={generateImage(car?.make, car?.model, "sur2", "4")}
            alt="A description of the image"
            unoptimized
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
