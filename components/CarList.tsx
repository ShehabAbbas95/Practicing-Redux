import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarInitialStateProps, removeCar } from "../store/slices/carsSlice";
import GridList from "./ui/GridList";

const CarList: FC = () => {
  const carsData = useSelector((state: { cars: CarInitialStateProps }) => {
    return state.cars.data;
  });
  const dispatch = useDispatch();
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <div>
      <h1>CarList</h1>
      <GridList list={carsData} handleCarDelete={handleCarDelete} />
      <hr />
    </div>
  );
};
export default CarList;
