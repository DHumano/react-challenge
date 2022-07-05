/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getImages from './thumbnailAPI';

const initialState = {
  value: [],
  status: 'idle'
};

export const fetchImages = createAsyncThunk('fetch', async (data) => {
  const { section, windows, sort } = data;
  const response = await getImages(section, windows, sort);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const thumbnailSlice = createSlice({
  name: 'thumbnail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  }
});

export const { increment } = thumbnailSlice.actions;

export const imageList = (state) => state.thumbnail.value;

export default thumbnailSlice.reducer;
