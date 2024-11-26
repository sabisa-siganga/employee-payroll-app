import {
  combineReducers,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import employeeReducer from "./slices/employeeSlice";
import { useDispatch, useSelector } from "react-redux";

// Combine all reducers into a root reducer
export const rootReducer = combineReducers({
  employee: employeeReducer, // Register employee slice
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage, // Use localStorage as the default storage
};

export type RootState = ReturnType<typeof rootReducer>;

// Create a persisted reducer wrapping the root reducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Function to configure the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, // Use the persisted reducer
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore redux-persist actions in serializable checks
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
    // Enable Redux DevTools in non-production environment
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
  });
};

// Create the Redux store
export const store = makeStore();

// Create the persistor for the store to handle rehydration
export const persistor = persistStore(store);

// Provides type-safe hooks (`useAppDispatch`, `useAppSelector`) and async thunk (`createAppAsyncThunk`)
// to ensure consistent and accurate access to the Redux state (`RootState`) and dispatch (`AppDispatch`).

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();
