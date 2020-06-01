import React from "react";
import ReceptItem from "./ReceptItem";

import { connect } from "react-redux";

function ReceptList(props) {
  let currData = [];
  if (props.isFiltered) currData = props.filteredRecepties;
  else currData = props.recepties;

  return (
    <div className="recept_list">
      {currData.map(function (item) {
        return (
          <ReceptItem
            item={item}
            item_text={item.text}
            key={item.id}
            type={props.receptTypes[item.type]}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFiltered: state.recepties.isFiltered,
    recepties: state.recepties.recepties,
    filteredRecepties: state.recepties.filteredRecepties,
    receptTypes: state.recepties.receptTypes,
  };
};

export default connect(mapStateToProps, null)(ReceptList);
