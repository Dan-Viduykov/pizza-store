import { RootState } from "@/store/store";

export const selectBasket = (state: RootState) => state.basketReducer;
export const selectBasketItemById = (id: string) => (state: RootState) => state.basketReducer.items.find(item => item.id.split('/')[0] === id);