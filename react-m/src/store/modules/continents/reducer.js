import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  continents: [],
};

/* eslint-disable no-param-reassign */
export const continentsSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchContinents.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.continents = payload;
    });
  },
});

export default continentsSlice.reducer;
