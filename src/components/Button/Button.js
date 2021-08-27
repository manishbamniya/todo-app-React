import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {

  const handleDelete = () => {
    props.onDeleteTodo(props.id);
  };
  
  return (
    <button
      className={`${
        props.color === "red" ? classes.delete : classes.btn
      }`}
      type={props.type || "button"}
      onClick={props.color === "red" ? handleDelete : null}
    >
      {props.children}
    </button>
  );
};
export default Button;
