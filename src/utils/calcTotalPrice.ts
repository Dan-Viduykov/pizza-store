import { IBaksetPizza } from '@/store/reducers/basket/types';

export const calcTotalPrice = (items: IBaksetPizza[]) => {
    return items.reduce((sum, item) => sum + item.price * item.count, 0)
}