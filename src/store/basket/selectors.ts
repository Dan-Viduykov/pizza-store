import { RootState } from "../store";

export const selectBasket = (state: RootState) => state.basketReducer;
export const selectCartItemById = (id: string) => (state: RootState) => state.basketReducer.items.find(item => item.id.split('/')[0] === id);