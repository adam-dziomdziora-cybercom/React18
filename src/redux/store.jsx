import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/count.reducer';

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
