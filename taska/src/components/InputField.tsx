import React, {useRef} from 'react';
import './styles.css';

type SetTaskType = React.Dispatch<React.SetStateAction<string>>;

interface TaskProps {
    task: string,
    setTask: SetTaskType,
    onTaskAdd: (event: React.FormEvent) => void;
}
const InputField: React.FC<TaskProps> = ({task, setTask, onTaskAdd}: TaskProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            onTaskAdd(event);
            inputRef.current?.blur();
        }}>
            <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box"
                   value={task} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)}/>
            <button className="input_submit" type="submit">Go</button>
        </form>
    );
};




























export default InputField;