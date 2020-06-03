import { takeEvery, put, select, call } from "redux-saga/effects";
import {
  CREATE_RECEPT,
  EDIT_RECEPT,
  DELETE_RECEPT,
  SET_RECEPTIES,
  LOAD_DATA,
} from "./types";

export const getRecepties = (state) => state.recepties.recepties;

export function* sagaWatcher() {
  yield takeEvery(LOAD_DATA, loadFromLocal);
  yield takeEvery(CREATE_RECEPT, saveToLocal);
  yield takeEvery(EDIT_RECEPT, saveToLocal);
  yield takeEvery(DELETE_RECEPT, saveToLocal);
}

function* loadFromLocal() {
  yield put({
    type: SET_RECEPTIES,
    payload: JSON.parse(localStorage.getItem("diplom_recepries")),
  });
}

function* saveToLocal() {
  let data = yield select(getRecepties);

  yield call(function () {
    localStorage.setItem("diplom_recepries", JSON.stringify(data));
  });
}
