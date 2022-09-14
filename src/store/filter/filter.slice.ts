import { createSlice } from '@reduxjs/toolkit'
import { filterState } from './filter.types';

const initialState: filterState = {
  sorting: "rating",
  filter: "all",
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    },
    changeSotring: (state, action) => {
      state.sorting = action.payload
    }
  },
})

export const {
  changeFilter, 
  changeSotring
} = filterSlice.actions

export const filterReducer = filterSlice.reducer;