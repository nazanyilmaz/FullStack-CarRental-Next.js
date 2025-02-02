import Link from "next/link";
import { FC } from "react";
import { MdCancel } from "react-icons/md";

const Decline: FC = () => {
  return (
    <div className="h-screen">
      <div className="h-[40%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <MdCancel className="text-[70px]" />

          <p className="font-semibold text-4xl text-center">Payment Decline</p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-10 text-center text-black">
        <p className="text-lg mb-10">Try Again</p>

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

export default Decline;
