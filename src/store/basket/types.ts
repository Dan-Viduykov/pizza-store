export interface IBaksetPizza {
    id: string;
    title: string;
    size: number;
    thickness: string;
    price: number;
    imageUrl: string;
    count: number;
}   

export interface basketState {
    items: IBaksetPizza[],
    totalPrice: number;
}  