import React, { useState } from "react";

import { connect } from "react-redux";
import { addNewRecept } from "../redux/actions";

function AddRecept(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(0);
  const [text, setText] = useState("");

  function formSubmit(event) {
    event.preventDefault();

    props.addNewRecept({
      id: Date.now().toString(),
      title,
      type,
      text: text.split("\n").join("<br>"),
    });

    setTitle("");
    setType(0);
    setText("");
  }

  return (
    <div className="add_new_recept">
      <p className="add_form_title">Добавить новый рецепт:</p> <br />
      <form className="add_form" onSubmit={formSubmit}>
        <div className="form_coll_one">
          <label>Название: </label> <br />
          <label>Тип: </label> <br />
          <label>Текст: </label>
        </div>
        <div className="form_coll_two">
          <input
            className="add_form_input"
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <br />
          <select
            className="add_form_input"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
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
          <br />
          <textarea
            className="add_form_input add_form_textarea"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <button className="add_recept_btn" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    receptTypes: state.recepties.receptTypes,
  };
};

const mapDispatchToProps = {
  addNewRecept,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecept);
