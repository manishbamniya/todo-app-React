import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../Button/Button";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo("")
  };

  const handleAddTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className={classes.rootDiv}>
      <h1>Todo App</h1>
      <form onSubmit={submitTodoHandler}>
        <div>
          <input
            value={todo}
            type="text"
            placeholder="Type here..."
            onChange={handleAddTodo}
          />
        </div>
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
