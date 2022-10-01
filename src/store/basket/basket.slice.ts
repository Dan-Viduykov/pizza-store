import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { basketState, IBaksetPizza } from './basket.types';
import { RootState } from '../store';

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
    addPizza: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id)

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({...action.payload, count: 1})
      }
     
      state.totalPrice = mathTotalPrice(state.items)
    },
    removePizza: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) findItem.count--;
      state.totalPrice = mathTotalPrice(state.items)
    },
    deletePizza: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = mathTotalPrice(state.items)
    }, 
    clearAllPizzas: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
})

export const selectBasket = (state: RootState) => state.basketReducer

export const {
  addPizza,
  removePizza,
  deletePizza,
  clearAllPizzas
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;