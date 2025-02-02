import { PopulatedOrder } from "@/app/(pages)/orders/page";
import generateImage from "@/app/utils/generateImage";
import Image from "next/image";
import { FC } from "react";

type Props = {
  order: PopulatedOrder;
};

const Ordercard: FC<Props> = ({ order }) => {
  return (
    <div className="border p-5 rounded-md shadow-lg flex gap-28 mg:gap-16 items-center hover:opacity-95 cursor-pointer hover:shadow-xl">
      <Image
        src={generateImage(order.product.make, order.product.model)}
        alt={"car image"}
        width={250}
        height={250}
        unoptimized
        priority
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
        <h2 className="flex max-xl:flex-col gap-1">
          <span>{order.product.make}</span>
          <span className="font-bold xl:ms-2">{order.product.model}</span>
        </h2>

        <h2 className="flex max-xl:flex-col gap-1">
          <span>Total Amount</span>
          <span className="font-bold xl:ms-2 text-green-600">${order.money_spend}</span>
        </h2>

        <h2 className="flex max-xl:flex-col gap-1">
          <span>Order Date</span>
          <span className="font-bold xl:ms-2 text-blue-600">
            {new Date(order.createdAt).toLocaleDateString("tr")}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Ordercard;
