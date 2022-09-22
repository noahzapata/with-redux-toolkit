import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    POSTS_LOADING(state, action) {
      state.loading = action.payload;
    },
    POSTS_ERROR(state, action) {
      state.error = action.payload;
    },
    POSTS_SUCCESS(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { POSTS_ERROR, POSTS_LOADING, POSTS_SUCCESS } = postSlice.actions;

export default postSlice.reducer;
