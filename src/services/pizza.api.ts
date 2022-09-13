import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBaseQuery, IPizza } from './pizza.types'

export const pizzaApi = createApi({
  reducerPath: 'pizza/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6316e783cb0d40bc41465bdf.mockapi.io/' }),
  endpoints: (builder) => ({
    getAllPizzas: builder.query<IPizza[], void>({
      query: () => `items`
    }),
    getOnePizza: builder.query<IPizza, number>({
      query: (id) => `items/${id}`
    }),
    getAllPizzasSorting: builder.query<IPizza[], IBaseQuery>({
      query: ({sorting = 'rating'}) => `items?sortBy=${sorting}&order=${sorting === 'title' ? 'asc' : 'desc'}`
    }),
  }),
})

export const {
  useGetAllPizzasQuery,
  useGetOnePizzaQuery,
  useGetAllPizzasSortingQuery
} = pizzaApi