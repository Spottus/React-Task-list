import React from "react";
import Header from "./components/header";
import Input from "./components/input-container";

const App = () => {
  return (
    <div>
      <Header title={"magic todo list"} />
     <Input/>
    </div>
  );
};

export default App;
