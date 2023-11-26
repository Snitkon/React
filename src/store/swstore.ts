import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { swApi } from './sw/sw.api';

const rootReducer = combineReducers({
  [swApi.reducerPath]: swApi.reducer,
});

export const setUpSwStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(swApi.middleware),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpSwStore>;
export type AppDispatch = AppStore['dispatch'];
