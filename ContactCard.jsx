import React from "react";
import user from "../images/user.png";

export default function ContactCard(props) {
  console.log(props);
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        onClick={() => props.clickHandler(id)}
        className="trash alternate outline icon"
        style={{
          cursor: "pointer",
          color: "red",
          marginTop: "7px",
          float: "right",
        }}
      ></i>
    </div>
  );
}
