import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  StoreLoader: boolean;
}
const initialState: IState = {
  StoreLoader: false,
};

export const loaderSlice = createSlice({
  name: 'LOADER',
  initialState,
  reducers: {
    changeStateLoader: (state, actions: PayloadAction<boolean>) => {
      state.StoreLoader = actions.payload;
    },
  },
});

export default loaderSlice.reducer;
