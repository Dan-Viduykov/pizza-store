import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterState, TFilter, TSort } from './types';

const initialState: filterState = {
  sorting: "rating",
  filter: "all",
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload
    },
    changeSotring: (state, action: PayloadAction<TSort>) => {
      state.sorting = action.payload
    }
  },
})

export const {
  changeFilter, 
  changeSotring
} = filterSlice.actions

export const filterReducer = filterSlice.reducer;