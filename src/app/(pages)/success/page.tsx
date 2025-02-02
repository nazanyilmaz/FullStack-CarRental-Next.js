import Link from "next/link";
import { FC } from "react";
import { IoIosCheckmarkCircle as Checkmark } from "react-icons/io";

const Success: FC = () => {
  return (
    <div className="h-screen">
      <div className="h-[40%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Checkmark className="text-[70px]" />

          <p className="font-semibold text-4xl text-center">Payment Successfully</p>
        </div>
      </div>

      <div className="h-[40%] p-10 mt-10 text-center text-black">
        <p className="text-lg">
          You will receive an email soon regarding how to receive your vehicle.
        </p>

        <p className="mt-5 mb-10 text-zinc-600">Please Check Your MailBox</p>

        <Link
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
          href="/orders"
        >
          My Orders
        </Link>

        <br />
        <br />
        <br />

        <Link
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
          href="/"
        >
          All Cars
        </Link>
      </div>
    </div>
  );
};

export default Success;
