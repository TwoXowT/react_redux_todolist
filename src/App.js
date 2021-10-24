import React, {useState} from 'react';
import './App.scss';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import {addTask} from "./store/actionCreators/actionCreators";
import {useSelector} from "react-redux";
import WeekProgress from "./components/weekProgresBar/WeekProgress";

function App() {
        const taskList = useSelector(state => state)
  return (
    <div className="App">
        <WeekProgress/>
        <AddTask />
        <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
