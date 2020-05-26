import React, { useState } from "react";
import ReceptList from "./Modules/ReceptList";
import AddRecept from "./Modules/AddRecept";
import Context from "./Modules/context";
import FilterForm from "./Modules/FilterForm";

function App() {
  const [receptTypes] = useState([
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
  ]);
  const [filtered, setFiltered] = useState(false);

  function filteredUpdate(checker) {
    setFiltered(checker);
  }

  const [recepties, setRecepties] = useState([
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
  ]);

  const [filteredRecepties, setFilteredRecepties] = useState([]);

  function addNewRecept(currNumber, title, type, text) {
    let position = recepties
      .map(function (e) {
        return e.id;
      })
      .indexOf(currNumber);

    if (position < 0) {
      console.log("I find: " + currNumber);
      setRecepties(
        recepties.concat({
          id: currNumber,
          title,
          type,
          text,
        })
      );
      alert("Добавлено под номером " + currNumber + "!");
    } else {
      addNewRecept(currNumber + 1, title, type, text);
    }
  }

  function delRecept(index) {
    setRecepties(
      recepties.filter(function (item) {
        if (item.id !== index) {
          return item;
        }
      })
    );
  }

  function filterReceptiesByType(typeID) {
    filteredUpdate(true);
    setFilteredRecepties(
      recepties.filter(function (item) {
        if (item.type == typeID) return item;
      })
    );
  }

  return (
    <Context.Provider value={{ delRecept }}>
      <div className="wrapper">
        <div className="page_title">
          <h1>База Рецептов</h1>
        </div>
        <div className="page_content">
          {filtered ? (
            <ReceptList
              recepties={filteredRecepties}
              receptTypes={receptTypes}
            />
          ) : (
            <ReceptList recepties={recepties} receptTypes={receptTypes} />
          )}

          <div className="content_col_two">
            <FilterForm
              receptTypes={receptTypes}
              filteredUpdate={filteredUpdate}
              filterReceptiesByType={filterReceptiesByType}
            />
            <hr />
            <AddRecept addNewRecept={addNewRecept} receptTypes={receptTypes} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
