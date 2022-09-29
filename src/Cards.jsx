import React from 'react';
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const Cards = ({ title, data, deleteItem, id }) => {
  return (
    <div className="TaskBox">
      <h1>{title}</h1>
      <hr />
      <p>{data}</p>
      <span onClick={() => deleteItem(id)}>
        <DeleteRoundedIcon className="deleteIcon" />
      </span>
    </div>
  );
};

export default Cards;
