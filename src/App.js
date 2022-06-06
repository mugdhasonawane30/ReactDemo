import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/home";
import Context from "./components/context";

function App() {

  return (
    <>
      <Home />
      <Context />
    </>
  );
}

export default App;
