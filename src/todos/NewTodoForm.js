import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodoRequest } from "./thunks";
import "./NewTodoForm.css";

// connect()() is a function that takes a component and returns a new component

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create ToDo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
