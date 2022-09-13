import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from '@/services/pizza.api'
import { filterReducer } from '@/store/filter/filter.slice';

export function makeStore() {
    return configureStore({
        reducer: {
            filterReducer,
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