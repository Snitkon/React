import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  page: number;
}
const initialState: IState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'PAGE',
  initialState,
  reducers: {
    changeStatePage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
  },
});

export default pageSlice.reducer;
