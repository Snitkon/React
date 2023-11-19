import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  limit: number;
}
const initialState: IState = {
  limit: 10,
};

export const limitSlice = createSlice({
  name: 'LIMIT',
  initialState,
  reducers: {
    changeStateLimit: (state, actions: PayloadAction<number>) => {
      state.limit = actions.payload;
    },
  },
});

export default limitSlice.reducer;
