import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import token from '../features/token';

const store = configureStore({
  reducer: {
    counter: counterReducer
    // token,
    // images,
  }
});

export default store;
