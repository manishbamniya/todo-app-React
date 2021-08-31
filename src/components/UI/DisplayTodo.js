import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import classes from "./DisplayTodo.module.css";
import Todo from "../AddTodo/Todo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoStyle.css";

const DisplayTodo = () => {
  const [todoItem, setTodoItem] = useState([]);

  const todoAddHandler = (todo) => {
    if (todo.length > 0) {
      setTodoItem((prevTodo) => {
        return [...prevTodo, { todo: todo, id: Math.random() }];
      });
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoItem((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  return (
    <div className={classes.root}>
      <AddTodo onAddTodo={todoAddHandler} />
        <ul className={classes.displayTodoContainer}>
          <TransitionGroup>
            {todoItem.map(({ todo, id }) => (
              <CSSTransition key={id} timeout={700} classNames="item">
                <Todo onDelete={handleDeleteTodo} id={id}>
                  {todo}
                </Todo>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
    </div>
  );
};
export default DisplayTodo;
