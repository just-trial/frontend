import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request, gql } from 'graphql-request';

// ToDo: change the endpoint to get from env
const GRAPHQL_ENDPOINT = 'https://just-travel.fly.dev/graphql';

// Define the shape of the cart items
interface CartItem {
  name: string;
  city: string;
  price: number;
}

interface CartState {
  items: Array<{ ticketId: string; type: 'adult' | 'child' }>;
  apiItems: CartItem[];
  cartId: string | null;
}

const initialState: CartState = {
  items: [],
  apiItems: [],
  cartId: "1",
};

// Add type for the mutation response
interface AddTicketToCartResponse {
  addTicketToCart: {
    successful: boolean;
    result: 'adult' | 'child';
  };
}

// Async thunk to fetch cart items from the API
export const fetchCartItems = createAsyncThunk(
  'cart/fetchItems',
  async (cartId: string) => {
    const query = gql`
      query($id: ID!) {
        cart(id: $id) {
          items {
            name
            city
            price
          }
        }
      }
    `;
    
    const response = await request<{ cart: { items: CartItem[] } }>(
      GRAPHQL_ENDPOINT, 
      query, 
      { id: cartId }
    );

    return response.cart.items;
  }
);

// Async thunk for adding ticket to cart
export const addTicketToCart = createAsyncThunk(
  'cart/addTicket',
  async ({ ticketId, cartId }: { ticketId: string; cartId: string }) => {
    const mutation = gql`
      mutation($ticketId: ID!, $cartId: ID!) {
        addTicketToCart(ticketId: $ticketId, cartId: $cartId) {
          successful
          result
        }
      }
    `;
    
    // Type the response explicitly
    const response = await request<AddTicketToCartResponse>(GRAPHQL_ENDPOINT, mutation, { ticketId, cartId });

    const result = response.addTicketToCart;

    console.log("Cart add", result);

    if (result.successful) {
      return { ticketId, type: result.result }; // result.result should indicate adult/child
    } else {
      throw new Error('Failed to add ticket to cart');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTicketToCart.fulfilled, (state, action) => {
      state.items.push({ ticketId: action.payload.ticketId, type: action.payload.type });
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.apiItems = action.payload;
    });
  }
});

export const cartReducer = cartSlice.reducer;
