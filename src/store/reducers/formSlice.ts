import { IFormSlice } from '../../models/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IState = IFormSlice[];
const initialState: IState = [];

export const formSlice = createSlice({
  name: 'FORM',
  initialState,
  reducers: {
    saveForm: {
      reducer(state, actions: PayloadAction<IFormSlice>) {
        state.push(actions.payload);
      },
      prepare(form: Omit<IFormSlice, ''>) {
        return {
          payload: {
            ...form,
          },
        };
      },
    },
  },
});

export default formSlice.reducer;
