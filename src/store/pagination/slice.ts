import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paginationState } from './types';

const initialState: paginationState = {
    currentPage: 1,
    itemsLimit: 4
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setItemsLimit: (state, action: PayloadAction<number>) => {
            state.itemsLimit = action.payload
        }
    }
})

export const {
    setCurrentPage,
    setItemsLimit
} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer