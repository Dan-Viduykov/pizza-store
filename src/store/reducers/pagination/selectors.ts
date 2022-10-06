import { RootState } from "@/store/store";

export const selectPagination = (state: RootState) => state.paginationReducer;