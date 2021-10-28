import React, {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import Navbar from "./components/navbar/Navbar";
import TimeData from "./components/timedata/TimeData";
import Statistic from "./components/statistic/Statistic";
import Context from "react-redux/lib/components/Context";
import './App.scss';

function App() {

    const [currentCategory, setCurrentCategory] = useState('Дом')

  return (
    <div className="App">
        <Context.Provider value={[currentCategory, setCurrentCategory]}>
            <Navbar/>
            <div className="app-main-content">
                <WeekProgress/>
                <AddTask />
                <TaskList />
            </div>
        </Context.Provider>

        <div className="app-additional-content">
            <TimeData/>
            <Statistic>

            </Statistic>
        </div>


    </div>
  );
}

export default App;
