import { ICar } from "@/app/api/models/car";
import Order, { IOrder } from "@/app/api/models/order";
import connectMongo from "@/app/api/utils/connectMongo";
import Ordercard from "@/app/components/card/order-card";

export type PopulatedOrder = IOrder & {
  product: ICar;
};
const Page = async () => {
  //veritabanina dogrudan endpoint olmaksinizin client tarafindan erisecegiz.
  const getOrders = async (): Promise<PopulatedOrder[]> => {
    "use server";
    await connectMongo();
    return await Order.find().populate("product");
    //console.log(products);
  };
  const orders = await getOrders();
  return (
    <div className="px-7 py-7 lg:px-10 text-black">
      <h1 className="mb-10 text-4xl font-bold text-zinc-600">My Orders</h1>
      <div className="grid gap-10">
        {orders?.map((order) => (
          <Ordercard order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
