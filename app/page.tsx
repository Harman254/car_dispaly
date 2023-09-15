"use client";
import { useState, useEffect } from "react";

import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { type HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/components/ShowMore";
import toast from "react-hot-toast";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);

  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(0);

  //fpagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const data = await fetchCars({
        manufacturer: manufacturer || "", // Use directly from props/state
        year: year || 2022, // Use directly from props/state
        fuel: fuel || "", // Use directly from props/state
        limit: limit || 10, // Use directly from props/state
        model: model || "", // Use directly from props/state
      });

      setAllCars(data);
      toast.success("search updated");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the Cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="w-full mt-16 flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results were found
            </h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
