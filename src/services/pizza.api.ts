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
      query: ({sorting = 'rating', filter = 'all'}) => {
        return `items?sortBy=${sorting}&order=${sorting === 'title' ? 'asc' : 'desc'}&category=${filter === 'all' ? '' : filter}`
      }
    }),
  }),
})

export const {
  useGetAllPizzasQuery,
  useGetOnePizzaQuery
} = pizzaApi