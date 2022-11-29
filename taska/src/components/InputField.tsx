import React from 'react';
import './styles.css';

type SetTaskType = React.Dispatch<React.SetStateAction<string>>;

interface TaskProps {
    task: string,
    setTask: SetTaskType,
    onTaskAdd: () => void;
}
const InputField: React.FC<TaskProps> = ({task, setTask, onTaskAdd}: TaskProps) => {
    return (
        <form className="input" onSubmit={onTaskAdd}>
            <input type="input" placeholder="Enter a task" className="input__box"
                   value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className="input_submit" type="submit">Go</button>
        </form>
    );
};




























export default InputField;