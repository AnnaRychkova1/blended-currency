import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchange } from './currencyOperations';

const INITIAL_STATE = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_STATE,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },

  extraReducers: build => {
    build
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchange.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchExchange.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchange.rejected, (state, action) => {
        state.exchangeInfo = null;
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
