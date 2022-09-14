export type TSort = "rating" | "price" | "title";
export type TFilter = "all" | "meat" | "vegan" | "gril" | "spicy" | "closed";

export interface filterState {
    sorting: TSort;
    filter: TFilter;
}  