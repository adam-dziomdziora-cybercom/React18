import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/count.reducer';
import namesReducer from './reducers/names.reducer';

export const store = configureStore({
  reducer: {
    counter: countReducer,
    names: namesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
