import React from "react";
import {Task} from "../entities/Task";
import {AiFillEdit, AiFillDelete } from "react-icons/ai";
import {MdDone} from "react-icons/md";
import "./styles.css";

interface TaskItemProps {
    task: Task;
    tasks: Task[];

    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TaskItem: React.FC<TaskItemProps> = ({task, tasks, setTasks}: TaskItemProps) => {
    return (
        <form className="tasks__item">
            <span className="tasks__item--text">{task.task}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    );
}

export default TaskItem;



































