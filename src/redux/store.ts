import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { cartReducer } from './cartSlice';

// Set up the store
export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});

// Define RootState and AppDispatch for strong typing
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
