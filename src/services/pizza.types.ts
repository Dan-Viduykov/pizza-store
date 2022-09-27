export interface IPizza {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    category: string;
    rating: number;
}

export interface IBaseQuery {
    sorting?: string;
    filter?: string;
    query?: string;
    page?: number;
}