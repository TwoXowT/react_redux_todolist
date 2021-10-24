import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import './App.scss';
function App() {

  return (
    <div className="App">
        <WeekProgress/>
        <AddTask />
        <TaskList />
    </div>
  );
}

export default App;
