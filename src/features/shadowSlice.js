import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id : nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0,250]
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color"
      },
    ],
  }
]

export const shadowSlice = createSlice({
  name: 'shadow',
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      // state = state.id !== action.payload;
    },
    addShadow: (state, action) => {
      state.push( {
        id : nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0,250]
          },
          {
            inputNumber: 4,
            name: "Spread radius",
            value: -3,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color"
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {

    },
    updateCheckbox: (state, action) => {

    }
  }
});

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } = shadowSlice.actions;
export default shadowSlice.reducer;
