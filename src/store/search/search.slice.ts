import { createSlice } from '@reduxjs/toolkit'

interface searchState {
    query: string;
}

const initialState: searchState = {
    query: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload;
    }
  },
})

export const {
    changeQuery,
} = searchSlice.actions

export const searchReducer = searchSlice.reducer;