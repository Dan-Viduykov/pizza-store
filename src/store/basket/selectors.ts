import { RootState } from "../store";

export const selectBasket = (state: RootState) => state.basketReducer;