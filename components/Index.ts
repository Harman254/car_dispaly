import Hero from "./Hero";
import CustomButton from "./CustomButton";
import Nav from "@/components/Nav";
import Footer from "./Footer";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";
import SearchManufacturer from "./SearchManufacturer";
import CarCard from "./CarCard";
import { ShowMore } from "./ShowMore";

import CarDetails from "./CarDetails";

export {
  Hero,
  CustomButton,
  Nav,
  Footer,
  CustomFilter,
  SearchBar,
  SearchManufacturer,
  CarCard,
  CarDetails,
  ShowMore,
};

export const getYear = (): number => {
  const Year: number = new Date().getFullYear();
  return Year;
};
