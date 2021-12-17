import { takeEvery, call, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectIsDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectIsDarkTheme);
  yield call(saveThemeInLocalStorage, theme);
};

export function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}