import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import scrollReducer from './slices/scrollSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        scroll: scrollReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch