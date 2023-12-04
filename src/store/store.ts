import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countiesReducer from './reducers/countriesSlice';
import formReducer from './reducers/formSlice';

const rootReducer = combineReducers({
  countiesReducer,
  formReducer,
});

export const setStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore['dispatch'];
