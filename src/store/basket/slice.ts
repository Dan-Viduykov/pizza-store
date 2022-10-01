import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { basketState, IBaksetPizza } from './types';

const initialState: basketState = {
  items: [],
  totalPrice: 0
}

// todo типизировать все акшены

const mathTotalPrice = (items: IBaksetPizza[]) => items.reduce((sum, item) => sum + (item.price * item.count), 0)

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    createPizza: (state, action: PayloadAction<IBaksetPizza>) => {
      state.items.push({...action.payload})
      state.totalPrice = mathTotalPrice(state.items)
    },

    subtractPizza: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) findItem.count--;
      state.totalPrice = mathTotalPrice(state.items)
    },

    addPizza: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) findItem.count++;
      state.totalPrice = mathTotalPrice(state.items)
    },

    deletePizza: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = mathTotalPrice(state.items)
    }, 

    deleteAllPizzas: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
})

export const {
  createPizza,
  subtractPizza,
  addPizza,
  deletePizza,
  deleteAllPizzas
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;