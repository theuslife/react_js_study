import React from "react";

export const person = props => (
  <div>
    <p>
      Nome: {props.name}, idade: {props.age}
    </p>
    <p>{props.children}</p>
  </div>
);

export default person;
