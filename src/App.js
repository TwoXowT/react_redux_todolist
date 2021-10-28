import React, {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import TimeData from "./components/timedata/TimeData";
function App() {

  return (
    <div className="App">
        <Navbar>

        </Navbar>
        <div className="app-main-content">
            <WeekProgress/>
            <AddTask />
            <TaskList />
        </div>
        <TimeData/>

    </div>
  );
}

export default App;
