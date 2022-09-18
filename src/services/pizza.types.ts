export interface IPizza {
    id: number;
    imageUrl: string;
    title: string;
    thickness: string[];
    sizes: number[];
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