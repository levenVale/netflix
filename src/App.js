import React from "react";
import "./App.css";
import Section from "./components/Section";
import Logo from "./components/img/logo.696c2101.png";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={Logo} alt="logo-netflix" />
      </div>
      <Section />
    </div>
  );
}

export default App;
