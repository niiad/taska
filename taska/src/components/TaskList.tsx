import React from "react";
import "styles.css";
import {Task} from "../entities/Task";

interface TaskListProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
const TaskList: React.FC<TaskListProps> = ({tasks, setTasks}: TaskListProps) => {
    return (
        <div className="tasks">
            { tasks.map(task => (
                
            ))}
        </div>
    );
}

export default TaskList;




































