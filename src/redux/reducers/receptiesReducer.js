import { CREATE_RECEPT, DELETE_RECEPT, EDIT_RECEPT } from "../types";

const defaultData = {
  recepties: [
    {
      id: 1,
      type: 8,
      title: "Бутерброд с колбасой",
      text: "Хлеб, колбаса.",
    },
    {
      id: 2,
      type: 2,
      title: "Бутерброд с маслом",
      text: "Хлеб, масло.",
    },
    {
      id: 3,
      type: 8,
      title: "Бутерброд с салом",
      text: "Хлеб, сало.",
    },
    {
      id: 6,
      type: 2,
      title: "Бутерброд с мёдом",
      text: "Хлеб, мёд.",
    },
    {
      id: 5,
      type: 8,
      title: "Бутерброд с мясом",
      text: "Хлеб, мясо.",
    },
  ],
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
    default:
      return state;
  }
};
