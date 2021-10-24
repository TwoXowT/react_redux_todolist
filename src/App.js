import React, {useState} from 'react';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
function App() {

  return (
    <div className="App">
        <Navbar>

        </Navbar>
        <div classname="app-main-content">
            <WeekProgress/>
            <AddTask />
            <TaskList />
        </div>

    </div>
  );
}

export default App;
