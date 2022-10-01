import { calcTotalPrice } from "./calcTotalPrice";

export const getCardFromLS = () => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem("cards");
        const items = data ? JSON.parse(data) : []
        const totalPrice = calcTotalPrice(items)
        
        return {
            items,
            totalPrice
        }
    }

    return {
        items: [],
        totalPrice: 0
    }
}