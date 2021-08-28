import React from "react";
import Icons from "../UI/Icons";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const { onDelete, id } = props;
  return (
    <>
      <div className={classes.commonDiv}>
        <li>{props.children}</li>
        <div className={classes.icons}>
          <Icons onDelete={onDelete} id={id} />
        </div>
      </div>
    </>
  );
};
export default Todo;
