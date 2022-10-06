import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from '@/services/pizza.api'

import { basketReducer } from '@/store/reducers/basket/slice';
import { paginationReducer } from '@/store/reducers/pagination/slice';
import { searchReducer } from '@/store/reducers/search/slice';
import { filterReducer } from '@/store/reducers/filter/slice';

export function makeStore() {
    return configureStore({
        reducer: {
            filterReducer,
            searchReducer,
            paginationReducer,
            basketReducer,
            [pizzaApi.reducerPath]: pizzaApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaApi.middleware),
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore)