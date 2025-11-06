import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isScrolled: boolean,
  selectedPhotoId: string | null,
  isFullscreenOpen: boolean
}

const initialState: CounterState = {
  isScrolled: false,
  selectedPhotoId: null,
  isFullscreenOpen: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload
    },

    openFullscreen: (state, action: PayloadAction<string>) => {
      state.selectedPhotoId = action.payload
      state.isFullscreenOpen = true
    },

    closeFullscreen: (state) => {
      state.selectedPhotoId = null;
      state.isFullscreenOpen = false;
    }
  },
})

export const { setIsScrolled, openFullscreen, closeFullscreen} = counterSlice.actions

export default counterSlice.reducer