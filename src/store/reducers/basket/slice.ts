import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { basketState, IBaksetPizza } from './types';

const initialState: basketState = {
  items: [],
  totalPrice: 0
}

const CalcTotalPrice = (state: basketState) => {
  state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.count), 0);
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<IBaksetPizza>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      CalcTotalPrice(state);
    },

    subtractPizza: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) findItem.count--;
      CalcTotalPrice(state);
    },

    deletePizza: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      CalcTotalPrice(state);
    }, 

    deleteAllPizzas: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
})

export const {
  subtractPizza,
  addPizza,
  deletePizza,
  deleteAllPizzas
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;