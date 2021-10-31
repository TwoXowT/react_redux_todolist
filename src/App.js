import React, {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import WeekProgress from "./components/weekProgresBar/WeekProgress";
import Navbar from "./components/navbar/Navbar";
import TimeData from "./components/timedata/TimeData";
import Statistic from "./components/statistic/Statistic";
import Context from "react-redux/lib/components/Context";
import './App.scss';
import Header from "./components/header/Header";
import Authorization from "./components/auth/Authorization";

function App() {

    const [currentCategory, setCurrentCategory] = useState('Дом')

  return (
    <div className="App">

        <Authorization/>

        {/*<Context.Provider value={[currentCategory, setCurrentCategory]}>*/}
        {/*    <Navbar/>*/}

        {/*    <div className='app-main'>*/}
        {/*        <Header/>*/}
        {/*        <div className='app-main-cont'>*/}
        {/*            <div className="app-main-content">*/}
        {/*                <AddTask />*/}
        {/*                <TaskList />*/}
        {/*            </div>*/}

        {/*        <div className="app-additional-content">*/}
        {/*            <WeekProgress/>*/}
        {/*            <TimeData/>*/}

        {/*        </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}


        {/*</Context.Provider>*/}




    </div>
  );
}

export default App;
