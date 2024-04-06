import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './currencyOperations';

const INITIAL_STATE = {
  baseCurrency: '',
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
    build.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
