import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { CarInitialStateProps } from "../store/slices/carsSlice";

const CarValue: FC = () => {
  const totalCost = useSelector((state: { cars: CarInitialStateProps }) => {
    const filteredCars = state.cars.data.filter((car) => {
      return car.carName
        .toLowerCase()
        .includes(state.cars.searchTerm.toLowerCase());
    });
    let cost: number = 0;
    for (let car of filteredCars) {
      let carCost = parseInt(car.carCost);
      cost += carCost;
    }
    return cost.toString(); // convert number to string
  });
  return (
    <div>
      <h1>CarValue</h1>
      <p>Total Cost: $ {totalCost}</p>
    </div>
  );
};
export default CarValue;
