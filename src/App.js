import React from 'react';
import './App.scss';
import TaskList from "./components/TaskList";
import NewTaskButton from "./components/NewTaskButton";

function App() {
  return (
    <div className="App">
      <NewTaskButton></NewTaskButton>
    <TaskList/>
    </div>
  );
}

export default App;
