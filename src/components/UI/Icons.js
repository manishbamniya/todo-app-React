import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import classes from "./Icons.module.css";

const Icons = (props) => {
  const handleDelteTodo = () => {
    return props.onDelete(props.id);
  };

  return (
    <div className={classes.iconsMainDiv}>
      <span>
        <DeleteIcon
          fontSize="large"
          onClick={handleDelteTodo}
        />
      </span>
      <span>
        <DoneIcon 
          fontSize="large"
          onClick={handleDelteTodo} />
      </span>
    </div>
  );
};

export default Icons;
