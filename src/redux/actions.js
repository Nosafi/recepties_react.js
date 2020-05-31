import { CREATE_RECEPT, DELETE_RECEPT, EDIT_RECEPT } from "./types";

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
