import React, { useState } from "react";
import ReceptList from "./Modules/ReceptList";
import AddRecept from "./Modules/AddRecept";
import FilterForm from "./Modules/FilterForm";

function App() {
  const [filtered, setFiltered] = useState(false);

  function filteredUpdate(checker) {
    setFiltered(checker);
  }

  const [filteredRecepties, setFilteredRecepties] = useState([]);

  function filterReceptiesByType(typeID) {
    filteredUpdate(true);
    // setFilteredRecepties(
    //   recepties.filter(function (item) {
    //     if (item.type == typeID) return item;
    //   })
    // );
  }

  return (
    <div className="wrapper">
      <div className="page_title">
        <h1>База Рецептов</h1>
      </div>
      <div className="page_content">
        {filtered ? (
          <ReceptList recepties={filteredRecepties} />
        ) : (
          <ReceptList />
        )}

        <div className="content_col_two">
          <FilterForm
            filteredUpdate={filteredUpdate}
            filterReceptiesByType={filterReceptiesByType}
          />
          <hr />
          <AddRecept />
        </div>
      </div>
    </div>
  );
}

export default App;
