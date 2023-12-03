import { ICountry } from '../../models/interface';
import counties from '../../data/countries.json';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  counties: ICountry[];
}
const initialState: IState = {
  counties: counties,
};

export const countiesSlice = createSlice({
  name: 'COUNTRIES',
  initialState,
  reducers: {
    selectCountry: (state, actions: PayloadAction<ICountry[]>) => {
      state.counties = actions.payload;
    },
  },
});

export default countiesSlice.reducer;
