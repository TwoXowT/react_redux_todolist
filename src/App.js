import React, {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import Navbar from "./components/navbar/Navbar";
import TimeData from "./components/timedata/TimeData";
import Context from "react-redux/lib/components/Context";
import './App.scss';
import Header from "./components/header/Header";
function App() {

    const [currentCategory, setCurrentCategory] = useState('Дом')
    const [rep, setRep] = useState(null)

  return (
    <div className="App">
        <Context.Provider value={[currentCategory, setCurrentCategory]}>
            <Navbar/>

            <div className='app-main'>

                <div className='app-main-cont'>
                    <div className="app-main-content">
                        <AddTask />
                        <TaskList />
                    </div>

                <div className="app-additional-content">
                    <WeekProgress/>
                    <TimeData/>

                </div>
                </div>
            </div>

        </Context.Provider>
    </div>
  );
}

export default App;
