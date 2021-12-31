import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCard />
    </div>
  );
}

export default App;
