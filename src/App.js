import React, {useState} from 'react';
import './App.scss';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {

    const [taskList, setTaskList] = useState([
        {id:1, text:"Some text", completeStatus:true},
        {id:2, text:"Some text", completeStatus:true},
        {id:3, text:"Some text", completeStatus:true},
        {id:4, text:"Some text", completeStatus:false},
        {id:5, text:"Some text", completeStatus:false},
    ]);

    const [currentTaskId, setCurrentTaskId] = useState(6)

    function makeDoneTask(doneTask){
        if (!doneTask.completeStatus){
            const taskLst = [...taskList]

            taskLst.forEach((task)=> { // можно еще зарефакторить
                if (task === doneTask){
                    task.completeStatus = !task.completeStatus
                }
            })

            setTaskList(taskLst)
        }
    }

    function removeTaskHandler(removeTask){
        const newTaskList = taskList.filter((task)=> task!== removeTask)
        setTaskList(newTaskList)
    }

    function createTask(text){
        let copy =  [...taskList];
        const task = { id: currentTaskId, text: text, completeStatus: false }
        copy.unshift(task)
        setTaskList(copy)
    }

  return (
    <div className="App">

        <AddTask createTask={createTask}/>
        <TaskList taskList={taskList}
                  makeDoneTask={makeDoneTask}
                  removeTask={removeTaskHandler}/>
    </div>
  );
}

export default App;
