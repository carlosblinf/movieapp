/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedState {
  selectedItem: string;
}

const initialState: SelectedState = {
  selectedItem: 'top_rated',
};

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelectedItem: (state: SelectedState, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = selectedSlice.actions;
export default selectedSlice.reducer;
