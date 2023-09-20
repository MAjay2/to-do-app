import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { useState } from "react";
import { MdReplayCircleFilled } from "react-icons/md";

const App = () => {
  const [array, SetArray] = useState([]);
  function handleClick(inputText, setInputText) {
    setInputText("");
    if (inputText) {
      SetArray((prev) => [...prev, inputText]);
    } else {
      alert("please eneter");
    }
  }

  function del(id) {
    SetArray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input addNote={handleClick} />

      {array.map((item, index) => (
        <Todo key={index} id={index} todo={item} del={del} />
      ))}
    </div>
  );
};

export default App;