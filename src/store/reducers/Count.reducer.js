import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    INCREMENT(state, action) {
      state.count = state.count + 1;
    },
    DECREMENT(state, action) {
      state.count = state.count - 1;
    },
  },
});

export const { DECREMENT, INCREMENT } = countSlice.actions;

export default countSlice.reducer;
