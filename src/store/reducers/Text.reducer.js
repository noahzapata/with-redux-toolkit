import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    CHANGE_TEXT(state, action) {
      state.username = action.payload;
    },
  },
});

export const { CHANGE_TEXT } = textSlice.actions;

//action creator
export const changeText = (value) => {
  return {
    type: CHANGE_TEXT,
    payload: value,
  };
};

export default textSlice.reducer;
