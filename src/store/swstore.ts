import { configureStore } from '@reduxjs/toolkit';
import { swApi } from './sw/sw.api';
import { createWrapper } from 'next-redux-wrapper';

export const setUpSwStore = () => {
  return configureStore({
    reducer: { [swApi.reducerPath]: swApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(swApi.middleware),
  });
};
export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof setUpSwStore>;
export type AppDispatch = AppStore['dispatch'];
export const container = createWrapper(setUpSwStore);
