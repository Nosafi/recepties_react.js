import React from "react";
import ReceptItem from "./ReceptItem";

import { connect } from "react-redux";

function ReceptList({ recepties, receptTypes }) {
  return (
    <div className="recept_list">
      {recepties.map(function (item) {
        return (
          <ReceptItem item={item} key={item.id} type={receptTypes[item.type]} />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    recepties: state.recepties.recepties,
    receptTypes: state.recepties.receptTypes,
  };
};

export default connect(mapStateToProps, null)(ReceptList);
