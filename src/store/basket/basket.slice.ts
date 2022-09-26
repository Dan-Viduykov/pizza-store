import { createSlice } from '@reduxjs/toolkit'
import { basketState } from './basket.types';

const initialState: basketState = {
  items: [],
  totalPrice: 0,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0)
    }
  },
})

export const {
  addPizza
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;