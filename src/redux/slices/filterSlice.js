import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryActive(state, action) {
      state.activeCategory = action.payload;
    },
  },
})

export const { setCategoryActive } = filterSlice.actions;
export default filterSlice.reducer;