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
      const findItem = state.items.find(item => item.id === action.payload.id)

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({...action.payload, count: 1})
      }
     
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.count), 0)
    }
  },
})

export const {
  addPizza
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;