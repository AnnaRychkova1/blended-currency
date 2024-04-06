import { getUserInfo } from 'service/opencagedataApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/baseCurrency',
  async (coords, thunkAPI) => {
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
