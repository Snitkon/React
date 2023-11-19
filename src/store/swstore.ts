import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { swApi } from './sw/sw.api';
import detailsReducer from './reducers/detailsSlice';
import limitReducer from './reducers/limitSlice';
import searchReducer from './reducers/searchSlice';
import pageReducer from './reducers/pageSlice';

const rootReducer = combineReducers({
  detailsReducer,
  limitReducer,
  searchReducer,
  pageReducer,
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
