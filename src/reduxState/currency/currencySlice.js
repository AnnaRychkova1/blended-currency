import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchange,
  fetchLatestRates,
} from './currencyOperations';

const INITIAL_STATE = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
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
      })
      .addCase(fetchLatestRates.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchLatestRates.fulfilled, (state, { payload }) => {
        state.rates = payload;
        state.isLoading = false;
      })
      .addCase(fetchLatestRates.rejected, (state, { payload }) => {
        state.rates = [];
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
