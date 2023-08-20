import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface Car {
  id: string;
  carName: string;
  carCost: number;
}
export interface CarInitialStateProps {
  data: Car[];
  searchTerm: string;
}
const initialState: CarInitialStateProps = {
  data: [],
  searchTerm: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // Assumption:
    // action.payload === { carName: '', , cost : 000}
    // Remember this state can't access the slice created from FormSlice
    addCar(state, action) {
      state.data.push({
        carName: action.payload.carName,
        carCost: action.payload.carCost,
        // id: Math.random(), Redux provide us a way to add random id
        id: nanoid(5),
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
