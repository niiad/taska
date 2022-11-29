import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Task} from "./entities/Task";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const onTaskAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (task) {
      setTasks([...tasks, {id: Date.now(), task: task, completed: false}]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taska</span>
        <InputField task={task} setTask={setTask} onTaskAdd={onTaskAdd}/>
    </div>
  );
}

export default App;































