import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:justify-center lg:items-center">
      <div className="bg-circle p-6 bg-no-repeat bg-cover rounded-lg">
        <h1 className="text-3xl font-bold w-3/4">The Best Platform for Car Rental</h1>
        <p className="py-3 text-xl">
          Ease doing a car rental safely and reliably. Of course at a low price.
        </p>
        <button className="bg-basic-blue py-1 px-3 hover:opacity-80 transition rounded-md mt-2">
          Rental Car
        </button>
        <div className="flex justify-center">
          <img src="/car-2.png" alt="car2" />
        </div>
      </div>
      <div className="bg-triangle p-6 max-lg:hidden bg-no-repeat bg-cover rounded-lg">
        <h1 className="text-3xl font-bold w-3/4">
          Easy way to rent a car at a low price
        </h1>
        <p className="py-3 text-xl">
          Providing cheap car rental services and safe and comfortable facilities.
        </p>
        <button className="bg-[#54A6FF] py-1 px-3 hover:opacity-80 transition rounded-md mt-2">
          Rental Car
        </button>
        <div className="flex justify-center">
          <img src="/car-1.png" alt="car1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
