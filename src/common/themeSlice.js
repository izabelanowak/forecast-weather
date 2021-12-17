import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getThemeFromLocalStorage(),
  },
  reducers: {
    toogleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const {
  toogleTheme,
} = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkTheme = state => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;