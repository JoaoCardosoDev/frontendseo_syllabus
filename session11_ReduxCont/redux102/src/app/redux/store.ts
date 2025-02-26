import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice'
import usersReducer from './userSlice'
import loggerMiddleware from "./middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, counterReducer)

export const store = configureStore({
    reducer: {
        counter: persistedReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
            }
        }).concat(loggerMiddleware)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;