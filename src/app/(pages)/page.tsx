import React from "react";
import Hero from "../components/hero";
import { getCars } from "../utils/service";
import Card from "../components/card";

const Home: React.FC = async () => {
  const { cars } = await getCars();
  return (
    <div className="px-7 py-7 lg:px-10">
      <Hero />
      <h1 className="text-zinc-400 font-semibold mt-10 mb-5 text-2xl">Popular Cars</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {cars.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
