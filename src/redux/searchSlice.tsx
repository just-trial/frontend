import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { request, gql } from 'graphql-request';

// ToDo: change the endpoint to get from env
const GRAPHQL_ENDPOINT = 'https://just-travel.fly.dev/graphql';

interface Ticket {
  id: string;
  name: string;
  city: string;
  price: number;
  description: string;
}

interface TicketsByCityResponse {
  ticketsByCity: {
    pageNumber: number;
    pageSize: number;
    totalEntries: number;
    totalPages: number;
    entries: Ticket[];
  };
}

interface SearchState {
  tickets: Ticket[];
  totalEntries: number;
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  tickets: [],
  totalEntries: 0,
  totalPages: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

// Define the thunk
export const searchTickets = createAsyncThunk<
  TicketsByCityResponse['ticketsByCity'],
  { city: string; page: number },
  { rejectValue: string }
>(
  'search/searchTickets',
  async ({ city, page }, { rejectWithValue }) => {
    const pageSize = 6;
    const query = gql`
        query($city: String, $page: Int!, $pageSize: Int!) {
            ticketsByCity(city: $city, page: $page, pageSize: $pageSize) {
                pageNumber
                pageSize
                totalEntries
                totalPages
                entries {
                    ... on Ticket {
                        id
                        name
                        city
                        price
                        description
                    }
                }
            }
        }
    `;
    try {
      const response = await request<TicketsByCityResponse>(GRAPHQL_ENDPOINT, query, {
        city,
        page,
        pageSize,
      });

      console.log("Search result", response.ticketsByCity);

      return response.ticketsByCity;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch tickets'); // Custom error message passed to rejectWithValue
    }
  }
);

// Define the slice
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchTickets.fulfilled, (state, action: PayloadAction<TicketsByCityResponse['ticketsByCity']>) => {
        state.tickets = action.payload.entries;
        state.totalEntries = action.payload.totalEntries;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.pageNumber;
        state.loading = false;
      })
      .addCase(searchTickets.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      });
  },
});

// Export actions and reducer
export const { setCurrentPage } = searchSlice.actions;
export default searchSlice.reducer;