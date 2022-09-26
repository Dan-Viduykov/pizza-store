export interface IBaksetPizza {
    id: number;
    title: string;
    size: number;
    thickness: string;
    price: number;
    imageUrl: string;
    category: string;
    rating: number;
    count: number;
}   

export interface basketState {
    items: IBaksetPizza[],
    totalPrice: number;
}  