import CarInfo from "@/app/components/detail/car-info";
import Gallery from "@/app/components/detail/gallery";
import { getCar } from "@/app/utils/service";
import { FC } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetail: FC<Props> = async ({ params }) => {
  const { car } = await getCar((await params).id);

  return (
    <div className="px-7 py-7 lg:px-10 text-black">
      <div className="grid md:grid-cols-2 mb-10 gap-10">
        <Gallery car={car} />
        <CarInfo car={car} />
      </div>
    </div>
  );
};

export default CarDetail;
