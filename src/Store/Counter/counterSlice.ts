import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isScrolled: boolean,
}

const initialState: CounterState = {
  isScrolled: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload
    }
  },
})

export const { setIsScrolled } = counterSlice.actions

export default counterSlice.reducer