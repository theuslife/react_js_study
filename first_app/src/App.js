import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [statePersons, setPersonsState] = useState([
    { name: "Matheus", age: "20" },
    { name: "Kleyton", age: "20" },
    { name: "Vitoria", age: "20" }
  ]);

  const switchNameHandler = () =>
    setPersonsState([
      { name: "Matheus", age: "23" },
      { name: "Kleyton", age: "30" },
      { name: "Vitoria", age: "30" }
    ]);

  const persons = statePersons.map(item => (
    <Person name={item.name} age={item.age} />
  ));

  return (
    <div className="App">
      {persons}
      <button onClick={switchNameHandler}>New person</button>
    </div>
  );
};

export default app;
