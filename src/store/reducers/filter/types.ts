export type TSort = "rating" | "price" | "title";
export type TFilter = "meat" | "vegan" | "grill" | "spicy" | "all";

export interface filterState {
    sorting: TSort;
    filter: TFilter;
}  