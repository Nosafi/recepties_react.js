import React, { useEffect } from "react";
import ReceptList from "./Modules/ReceptList";
import AddRecept from "./Modules/AddRecept";
import FilterForm from "./Modules/FilterForm";

import { useDispatch } from "react-redux";
import { loadData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="page_title">
        <h1>Ваши рецепты</h1>
      </div>
      <div className="page_content">
        <ReceptList />
        <div className="content_col_two">
          <FilterForm />
          <hr />
          <AddRecept />
        </div>
      </div>
    </div>
  );
}

export default App;
