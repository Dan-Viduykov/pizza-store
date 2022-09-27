import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBaseQuery, IPizza } from './pizza.types';

export const pizzaApi = createApi({
  reducerPath: 'pizza/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://633310df573c03ab0b576492.mockapi.io/' }),
  endpoints: (builder) => ({
    getOnePizza: builder.query<IPizza, number>({
      query: (id) => `items/${id}`
    }),
    getAllPizzas: builder.query<IPizza[], IBaseQuery>({
      query: (arg) => {
        const {sorting = 'rating', filter = 'all', query, page = 1, limit = 500} = arg;
        
        const sortBy = sorting ? `&sortBy=${sorting}` : '';
        const order = `&order=${sorting === 'title' ? 'asc' : 'desc'}`
        const category = filter ? `&category=${filter === 'all' ? '' : filter}` : '';
        const search = query ? `&search=${query}` : '';
        const pages = `&page=${page}&limit=${limit}`
        
        return {
          url: `items?${sortBy}${order}${query ? '' : category}${!query ? '' : search}${pages}`
        }
      }
    }),
  }),
})

export const {
  useGetAllPizzasQuery,
  useGetOnePizzaQuery
} = pizzaApi