import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import classes from "./DisplayTodo.module.css";
import Button from "../Button/Button";

const DisplayTodo = () => {
  const [todoItem, setTodoItem] = useState([]);

  const todoAddHandler = (todo) => {
      setTodoItem((prevTodo) => {
        return [...prevTodo, { todo: todo, id: Math.random() }];
      });
  };

  const handleDeleteTodo = (id) => {
    setTodoItem((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  return (
    <div>
      <div>
        <AddTodo onAddTodo={todoAddHandler} />
      </div>
      <div className={classes.displayTodoContainer}>
        <ul>
          {Array.isArray(todoItem) && todoItem.length > 0
            ? todoItem.map((todoItem) => (
                <div key={todoItem.id} className={classes.todoWrapper}>
                  <li>{todoItem.todo}</li>
                  <Button
                    color="red"
                    onDeleteTodo={handleDeleteTodo}
                    id={todoItem.id}
                  >
                    Delete
                  </Button>
                </div>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
export default DisplayTodo;
