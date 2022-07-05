import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import thumbnailReducer from '../features/thumbnail/thumbnailSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    thumbnail: thumbnailReducer
  }
});

export default store;
