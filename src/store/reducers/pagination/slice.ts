import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paginationState } from './types';

const initialState: paginationState = {
    currentPage: 1,
    itemsLimitOnPage: 4,
    allCount: 0,
    pageCount: 1
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setitemsLimitOnPage: (state, action: PayloadAction<number>) => {
            state.itemsLimitOnPage = action.payload
        },
        setAllCount: (state, action: PayloadAction<number>) => {
            state.allCount = action.payload
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload
        }
    }
})

export const {
    setCurrentPage,
    setitemsLimitOnPage,
    setAllCount,
    setPageCount
} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer