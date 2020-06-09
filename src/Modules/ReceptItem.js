import React from "react";
import Modal from "./Modal/Modal";
import Del_Btn from "../img/delete_icon.png";

import { connect } from "react-redux";
import { delRecept } from "../redux/actions";

function ReceptItem(props) {
  return (
    <div className="recept_item">
      <div className="recept_title _written_font">{props.item.title}</div>
      <div className="recept_type _written_font">{props.type}</div>
      <div className="recept_content">
        <div
          className="recept_text _written_font"
          dangerouslySetInnerHTML={{ __html: props.item_text }}
        ></div>
        <div className="recept_footer">
          <Modal recept={props.item} />
          <img
            className="recept_del_btn"
            src={Del_Btn}
            alt="Удалить"
            title="Удалить"
            onClick={() => {
              const resultConfirm = window.confirm(
                "Удалить " + props.item.title + " ?"
              );
              if (resultConfirm) {
                props.delRecept(props.item.id);
              }
            }}
          />
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
