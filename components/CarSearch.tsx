import React from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CarInitialStateProps,
  changeSearchTerm,
} from "../store/slices/carsSlice";
const CarSearch: FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: { cars: CarInitialStateProps }) => state.cars.searchTerm
  );
  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div>
      <h1>CarSearch</h1>

      <div className="sm:col-span-3">
        <label
          htmlFor="search"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Search
        </label>
        <div className="mt-2">
          <input
            name="search"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="px-4 block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
export default CarSearch;
