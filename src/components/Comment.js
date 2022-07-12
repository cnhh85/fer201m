import React from "react";

const formatDate = (date) => {
  return date.toLocaleString();
};

export const Comment = (props) => {
  return (
    <div>
      <div>
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
};
