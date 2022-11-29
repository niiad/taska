import React from "react";
import "./styles.css";
import {Task} from "../entities/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TaskList: React.FC<TaskListProps> = ({tasks, setTasks}: TaskListProps) => {
    return (
        <div className="tasks">
            { tasks.map(task => (
                <TaskItem task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>
    );
}

export default TaskList;




































