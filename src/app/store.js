import { configureStore } from '@reduxjs/toolkit';
import thumbnailReducer from '../features/thumbnail/thumbnailSlice';

const store = configureStore({
  reducer: {
    thumbnail: thumbnailReducer
  }
});

export default store;
