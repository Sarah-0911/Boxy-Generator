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

export const shadowsSlice = createSlice({
  name: 'shadows',
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      return state.filter(shadow => shadow.id !== action.payload)
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
      const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID);
      const currentInput = currentShadow.inputs.find(input => input.inputNumber === action.payload.inputNumber)
      currentInput.value = action.payload.value;

      // même si e.target.value donne la nouvelle valeur,
      // l'inputNumber (ou autre identifiant unique) s'assure de mettre à jour le bon input dans le state global.
    },
    updateCheckbox: (state, action) => {
      const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID);
      currentShadow[action.payload.name] = !currentShadow[action.payload.name];
    }
  }
});

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } = shadowsSlice.actions;
export default shadowsSlice.reducer;
