import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

// Set up the store
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Define RootState and AppDispatch for strong typing
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
