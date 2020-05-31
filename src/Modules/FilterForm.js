import React, { useState } from "react";

import { connect } from "react-redux";

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
        onClick={props.filterReceptiesByType.bind(null, currType)}
        disabled
      >
        Фильтр
      </button>
      <button
        className="filter_form_btn"
        onClick={props.filteredUpdate.bind(null, false)}
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

export default connect(mapStateToProps, null)(FilterForm);
