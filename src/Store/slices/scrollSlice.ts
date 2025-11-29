// scrollSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollState {
  blocks: { [key: string]: boolean };
}

const initialState: ScrollState = {
  blocks: {}
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    showBlock: (state, action: PayloadAction<string>) => {
      state.blocks[action.payload] = true;
    },
    hideBlock: (state, action: PayloadAction<string>) => {
      state.blocks[action.payload] = false;
    },
    resetBlocks: (state) => {
      state.blocks = {};
    }
  }
});

export const { showBlock, hideBlock, resetBlocks } = scrollSlice.actions;
export default scrollSlice.reducer;