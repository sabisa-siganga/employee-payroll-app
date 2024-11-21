import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import employeeReducer from "./slices/employeeSlice";

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  employee: employeeReducer, // Register employee slice
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage, // Use localStorage as the default storage
};

// Create a persisted reducer wrapping the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Function to configure the Redux store
const makeStore = () =>
  configureStore({
    reducer: persistedReducer, // Use the persisted reducer
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
  });

// Create the Redux store
export const store = makeStore();

// Create the persistor for the store to handle rehydration
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
