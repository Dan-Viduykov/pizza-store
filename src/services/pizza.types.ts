export interface IPizza {
    _id: string;
    category: string;
    description: string;
    imageUrl: string;
    price: number;
    rating: number;
    title: string;
}

export interface IBaseQuery {
    count?: number;
    offset?: number;
    filterBy?: "meat" | "vegan" | "grill" | "spicy" | 'all';
    sortBy?: 'rating' | 'title' | 'price';
    trend?: 'asc' | 'desc';
    search?: string;
}

export interface IServerResponce {
    count: number;
    data: IPizza[]
}