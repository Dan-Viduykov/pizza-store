import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBaseQuery, IPizza, IServerResponce } from './pizza.types';

export const pizzaApi = createApi({
  reducerPath: 'pizza/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pizza-store-server.herokuapp.com/' }),
  endpoints: (builder) => ({
    getPizzaById: builder.query<IPizza, string>({
      query: (id) => `pizzas/${id}`
    }),
    getAllPizzas: builder.query<IServerResponce, IBaseQuery>({
      query: (arg = {}) => {
        const { count = 4, offset = 0, sortBy, filterBy, trend = 'asc', search = '' } = arg;
        
        const sorting = sortBy ? `&sortBy=${sortBy}` : '';
        const order = `&trend=${sortBy === 'title' ? 'asc' : 'desc'}`
        const filtered = filterBy === 'all' ? '' : `&filterBy=${filterBy}` ;
        const pages = `&count=${count}&offset=${offset}`
        
        const url = search === '' ? `pizzas?${order}${pages}${sorting}${filtered}` : `pizzas/search?query=${search}`;

        return {
          url: url
        }
      }
    }),
  }),
})

export const {
  useGetAllPizzasQuery,
  useGetPizzaByIdQuery
} = pizzaApi

export const {
  getAllPizzas,
  getPizzaById
} = pizzaApi.endpoints;