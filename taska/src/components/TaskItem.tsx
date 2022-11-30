import React from "react";
import {Task} from "../entities/Task";
import {AiFillEdit, AiFillDelete } from "react-icons/ai";
import {MdDone} from "react-icons/md";
import "./styles.css";
import TaskList from "./TaskList";

interface TaskItemProps {
    task: Task;
    tasks: Task[];

    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TaskItem: React.FC<TaskItemProps> = ({task, tasks, setTasks}: TaskItemProps) => {
    const onDone = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <form className="tasks__item">
            {
                task.completed ? (
                    <s className="tasks__item--text">{task.task}</s>
                ) : (
                    <span className="tasks__item--text">{task.task}</span>
                )
            }
            
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => onDone(task.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
}

export default TaskItem;



































