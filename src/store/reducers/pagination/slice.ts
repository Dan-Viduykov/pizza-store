import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paginationState } from './types';

const initialState: paginationState = {
    currentPage: 1,
    itemsLimit: 4,
    itemsCount: 0,
    pageCount: 1
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
        },
        setItemsCount: (state, action: PayloadAction<number>) => {
            state.itemsCount = action.payload
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload
        }
    }
})

export const {
    setCurrentPage,
    setItemsLimit,
    setItemsCount,
    setPageCount
} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer