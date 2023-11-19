import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../api/localStorage';

interface IState {
  searchRequest: string;
}
const initialState: IState = {
  searchRequest: getLocalStorage(),
};

const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    changeStateSearch(state, action: PayloadAction<string>) {
      state.searchRequest = action.payload;
    },
    changeStateClear(state) {
      state.searchRequest = '';
    },
  },
});

export default searchSlice.reducer;
