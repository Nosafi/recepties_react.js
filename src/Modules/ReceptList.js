import React from "react";
import ReceptItem from "./ReceptItem";

function ReceptList(props) {
  return (
    <div className="recept_list">
      {props.recepties.map(function (item) {
        return (
          <ReceptItem
            item={item}
            key={item.id}
            type={props.receptTypes[item.type]}
          />
        );
      })}
    </div>
  );
}

export default ReceptList;
