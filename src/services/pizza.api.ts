import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBaseQuery, IPizza } from './pizza.types'

export const pizzaApi = createApi({
  reducerPath: 'pizza/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6316e783cb0d40bc41465bdf.mockapi.io/' }),
  endpoints: (builder) => ({
    getOnePizza: builder.query<IPizza, number>({
      query: (id) => `items/${id}`
    }),
    getAllPizzas: builder.query<IPizza[], IBaseQuery>({
      query: (arg) => {
        const {sorting = 'rating', filter = 'all', query, page} = arg;
        
        const sortBy = `&sortBy=${sorting}`
        const order = `&order=${sorting === 'title' ? 'asc' : 'desc'}`
        const category = `&category=${filter === 'all' ? '' : filter}`
        const search = `&search=${query}`
        const pages = `&page=${page}&limit=${4}`
        
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