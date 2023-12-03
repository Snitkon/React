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

const store = setStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore['dispatch'];
