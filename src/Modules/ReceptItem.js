import React, { useContext } from "react";
import Del_Btn from "../img/delete_icon.png";
import Context from "./context";

function ReceptItem(props) {
  const { delRecept } = useContext(Context);

  return (
    <div className="recept_item">
      <div className="recept_title">{props.item.title}</div>
      <div className="recept_type">{props.type}</div>
      <hr />
      <div className="recept_content">
        <div
          className="recept_text"
          dangerouslySetInnerHTML={{ __html: props.item.text }}
        ></div>
        <div className="recept_footer">
          <div className="recept_id">Номер карточки: {props.item.id}</div>
          <img
            className="recept_del_btn"
            src={Del_Btn}
            alt="Удалить"
            onClick={delRecept.bind(null, props.item.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default ReceptItem;
