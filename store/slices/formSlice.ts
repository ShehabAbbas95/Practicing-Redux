import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  name: string;
  cost: number;
}

const initialState: InitialStateProps = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
