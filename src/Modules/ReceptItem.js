import React from "react";
import Modal from "./Modal/Modal";
import Del_Btn from "../img/delete_icon.png";

import { connect } from "react-redux";
import { delRecept } from "../redux/actions";

function ReceptItem(props) {
  return (
    <div className="recept_item">
      <div className="recept_title">{props.item.title}</div>
      <div className="recept_type">{props.type}</div>
      <hr />
      <div className="recept_content">
        <div
          className="recept_text"
          dangerouslySetInnerHTML={{ __html: props.item_text }}
        ></div>
        <div className="recept_footer">
          <div className="recept_id">ID: {props.item.id}</div>
          <div>
            <Modal recept={props.item} />
            <img
              className="recept_del_btn"
              src={Del_Btn}
              alt="Удалить"
              onClick={props.delRecept.bind(null, props.item.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    receptTypes: state.recepties.receptTypes,
  };
};

const mapDispatchToProps = {
  delRecept,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceptItem);
