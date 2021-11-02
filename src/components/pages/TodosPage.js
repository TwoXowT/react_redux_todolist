import React from 'react'
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import WeekProgress from "../weekProgresBar/WeekProgress";
import TimeData from "../timedata/TimeData";
import Navbar from "../navbar/Navbar";
import './TodosPages.scss'
export const TodosPage = ()=>{

    return(
            <div className='App' >
                <Navbar/>
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

    )
}
