import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Car {
  id: string;
  name: string;
  cost: number;
}
interface InitialStateProps {
  cars: Car[];
  searchTerm: string;
}
const initialState: InitialStateProps = {
  cars: [],
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
    // action.payload === { name: '', , cost : 000}
    // Remember this state can't access the slice created from FormSlice
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        // id: Math.random(), Redux provide us a way to add random id
        id: nanoid(5),
      });
    },
    removeCar(state, action) {
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
