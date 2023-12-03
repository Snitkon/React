import { IForm } from '../../models/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IState = IForm[];
const initialState: IState = [];

export const formSlice = createSlice({
  name: 'FORM',
  initialState,
  reducers: {
    saveForm: {
      reducer(state, actions: PayloadAction<IForm>) {
        state.push(actions.payload);
      },
      prepare(form: Omit<IForm, ''>) {
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
