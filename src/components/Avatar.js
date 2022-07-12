import React from "react";

export const Avatar = (props) => {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
};
