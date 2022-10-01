import { RootState } from "../store";

export const selectPagination = (state: RootState) => state.paginationReducer;