import {
  CREATE_RECEPT,
  DELETE_RECEPT,
  EDIT_RECEPT,
  FILTER_RECEPTIES,
  RESET_RECEPTIES,
  SET_RECEPTIES,
} from "../types";

const defaultData = {
  recepties: [],
  isFiltered: false,
  filteredRecepties: [],
  receptTypes: [
    "Заготовка",
    "Выпечка и десерты",
    "Основное блюдо",
    "Завтрак",
    "Салат",
    "Суп",
    "Пицца",
    "Закуска",
    "Сэндвич",
    "Напиток",
    "Соус",
    "Заготовка",
  ],
};

export const receptiesReducer = (state = defaultData, action) => {
  switch (action.type) {
    case SET_RECEPTIES:
      console.log("loaded!");
      return { ...state, recepties: action.payload };
    case CREATE_RECEPT:
      return { ...state, recepties: state.recepties.concat([action.payload]) };
    case DELETE_RECEPT:
      return {
        ...state,
        recepties: state.recepties.filter(function (item) {
          if (item.id !== action.payload) {
            return item;
          }
        }),
      };
    case EDIT_RECEPT:
      return {
        ...state,
        recepties: state.recepties.map(function (item) {
          if (item.id == action.payload.index) {
            item.text = action.payload.new_Text;
          }
          return item;
        }),
      };
    case FILTER_RECEPTIES:
      return {
        ...state,
        isFiltered: true,
        filteredRecepties: state.recepties.filter(function (item) {
          if (item.type == action.payload) return item;
        }),
      };
    case RESET_RECEPTIES:
      return {
        ...state,
        isFiltered: false,
        filteredRecepties: [],
      };
    default:
      return state;
  }
};
