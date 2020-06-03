import {
  CREATE_RECEPT,
  DELETE_RECEPT,
  EDIT_RECEPT,
  FILTER_RECEPTIES,
  RESET_RECEPTIES,
  LOAD_DATA,
} from "./types";

export function addNewRecept(recept) {
  return {
    type: CREATE_RECEPT,
    payload: recept,
  };
}

export function delRecept(index) {
  return {
    type: DELETE_RECEPT,
    payload: index,
  };
}

export function editRecept(index, new_Text) {
  return {
    type: EDIT_RECEPT,
    payload: {
      index,
      new_Text,
    },
  };
}

export function filterReceptiesByType(type) {
  return {
    type: FILTER_RECEPTIES,
    payload: type,
  };
}

export function filterToFalse() {
  return {
    type: RESET_RECEPTIES,
  };
}

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}
