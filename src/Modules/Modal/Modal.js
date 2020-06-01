import React from "react";
import Edit_Btn from "../../img/edit_icon.png";
import "./modal.css";

import { connect } from "react-redux";
import { editRecept } from "../../redux/actions";

class Modal extends React.Component {
  state = {
    isOpen: false,
    newText: "",
  };

  render() {
    return (
      <React.Fragment>
        <img
          onClick={() => {
            this.setState({
              isOpen: true,
              newText: this.props.recept.text.split("<br>").join("\n"),
            });
          }}
          className="recept_del_btn"
          src={Edit_Btn}
          alt="Редактировать"
          title="Редактировать"
        />

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal_body">
              <h1 className="modal_title">
                Редактировать рецепт под номером {this.props.recept.id}:
              </h1>

              <form
                className="modal_edit_form"
                onSubmit={(event) => {
                  event.preventDefault();

                  this.props.editRecept(
                    this.props.recept.id,
                    this.state.newText.split("\n").join("<br>")
                  );

                  this.setState({
                    isOpen: false,
                    newText: "",
                  });
                }}
              >
                <div className="modal_coll_one">
                  <label>Название: </label> <br />
                  <label>Тип: </label> <br />
                  <label>Текст: </label>
                </div>
                <div className="modal_coll_two">
                  <label>{this.props.recept.title}</label>
                  <br />
                  <label>
                    {this.props.receptTypes[this.props.recept.type]}
                  </label>
                  <br />
                  <textarea
                    className="add_form_input add_form_textarea"
                    value={this.state.newText}
                    onChange={(event) => {
                      this.setState({
                        isOpen: true,
                        newText: event.target.value,
                      });
                    }}
                  />
                </div>
                <button type="submit" className="add_recept_btn">
                  Редактировать
                </button>
                <button
                  className="add_recept_btn"
                  onClick={() => {
                    this.setState({
                      isOpen: false,
                      newText: "",
                    });
                  }}
                >
                  Отмена
                </button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    receptTypes: state.recepties.receptTypes,
  };
};

const mapDispatchToProps = {
  editRecept,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
