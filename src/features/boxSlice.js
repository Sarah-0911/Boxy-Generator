import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0,250],
    slice: 'box'
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0,500],
    slice: 'box'
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0,500],
    slice: 'box'
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
    slice: 'box'
  },
]

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {

    }
  }
});

export const { updateBoxValue } = boxSlice.actions;
export default boxSlice.reducer;
