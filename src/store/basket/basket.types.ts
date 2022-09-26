import { IPizza } from "@/services/pizza.types";

export interface basketState {
    items: IPizza[],
    totalPrice: number;
}  