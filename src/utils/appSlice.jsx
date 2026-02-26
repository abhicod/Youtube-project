import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
  toggleMenu: (state) => {
    state.isMenuOpen = !state.isMenuOpen;
  },
  openMenu: (state) => {
    state.isMenuOpen = true;
  },
  closeMenu: (state) => {
    state.isMenuOpen = false;
  },
}

});

export const { toggleMenu , closeMenu} = appSlice.actions;
export default appSlice.reducer;
