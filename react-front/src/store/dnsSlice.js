// src/store/dnsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchDNSStats, fetchHistoricalData } from '../services/dnsService';

const dnsSlice = createSlice({
  name: 'dns',
  initialState: {
    stats: null,
    historicalData: [],
    loading: false,
    error: null
  },
  reducers: {
    updateStats: (state, action) => {
      state.stats = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDNSStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDNSStats.fulfilled, (state, action) => {
        state.stats = action.payload;
        state.loading = false;
      })
      .addCase(fetchHistoricalData.fulfilled, (state, action) => {
        state.historicalData = action.payload;
      });
  }
});

export default dnsSlice.reducer;