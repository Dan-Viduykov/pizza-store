import { createWrapper } from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { pizzaApi } from '@/services/pizza.api'

export function makeStore() {
    return configureStore({
        reducer: {
            [pizzaApi.reducerPath]: pizzaApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaApi.middleware),
    })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore)