import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");



  return (
    <div className="App">
      <span className="heading">Taska</span>
        <InputField todo={task} setTodo={setTask()}/>
    </div>
  );
}

export default App;
