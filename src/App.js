import React from "react";
import Home from "./component/Home";
import Login from "./component/Login";
import Searchbar from "./component/Searchbar";
import Applink from "./component/Apilink";

export default function App() {
  return (
    <div>
      <Searchbar />
      <br></br>
      <Login />
      <Applink />
      <Home />
    </div>
  );
}
