import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

export interface FormInitialStateProps {
  carName: string;
  carCost: number;
}

const initialState: FormInitialStateProps = {
  carName: "",
  carCost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.carName = action.payload;
    },
    changeCost(state, action) {
      state.carCost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state, action) => {
      state.carName = "";
      state.carCost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
