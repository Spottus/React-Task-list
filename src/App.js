import React from "react";
import InputTask from "./components/inputTask";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header title={"magic todo list"} />
      <InputTask />
    </div>
  );
};

export default App;
