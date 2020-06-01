import React, { useState } from "react";

import { connect } from "react-redux";
import { filterReceptiesByType, filterToFalse } from "../redux/actions";

function FilterForm(props) {
  const [currType, setCurrType] = useState(0);

  return (
    <div className="filter_form">
      <span>Отобразить только: </span>
      <select
        onChange={(event) => {
          setCurrType(event.target.value);
        }}
      >
        {props.receptTypes.map((type, index) => {
          return (
            <option key={index} value={index}>
              {type}
            </option>
          );
        })}
      </select>
      <button
        className="filter_form_btn"
        onClick={() => {
          props.filterReceptiesByType(currType);
        }}
      >
        Фильтр
      </button>
      <button
        className="filter_form_btn"
        onClick={props.filterToFalse.bind(null)}
      >
        Сброс
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    receptTypes: state.recepties.receptTypes,
  };
};

const mapDispatchToProps = {
  filterReceptiesByType,
  filterToFalse,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
