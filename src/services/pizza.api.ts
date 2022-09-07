import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPizza } from './pizza.types'

export const pizzaApi = createApi({
  reducerPath: 'pizza/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6316e783cb0d40bc41465bdf.mockapi.io/' }),
  endpoints: (builder) => ({
    getAllPizzas: builder.query<IPizza[], void>({
      query: () => `items`
    }),
  }),
})

export const { useGetAllPizzasQuery } = pizzaApi