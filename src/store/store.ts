import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from '@/services/pizza.api'
import { filterReducer } from './filter/filter.slice';
import { searchReducer } from './search/search.slice';
import { paginationReducer } from './pagination/pagination.slice';

export function makeStore() {
    return configureStore({
        reducer: {
            filterReducer,
            searchReducer,
            paginationReducer,
            [pizzaApi.reducerPath]: pizzaApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaApi.middleware),
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore)