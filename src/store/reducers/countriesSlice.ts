import { ICountry } from '../../models/interface';
import counties from '../../data/countries.json';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IState = ICountry[];
const initialState: IState = counties;

export const countiesSlice = createSlice({
  name: 'COUNTRIES',
  initialState,
  reducers: {
    selectCountry: (state, actions: PayloadAction<ICountry[]>) => {
      state = actions.payload;
    },
  },
});

export default countiesSlice.reducer;
