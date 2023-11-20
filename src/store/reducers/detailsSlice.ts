import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  opened: boolean;
}
const initialState: IState = {
  opened: false,
};

export const openedSlice = createSlice({
  name: 'OPENED',
  initialState,
  reducers: {
    changeState: (state, actions: PayloadAction<boolean>) => {
      state.opened = actions.payload;
    },
  },
});

export default openedSlice.reducer;
