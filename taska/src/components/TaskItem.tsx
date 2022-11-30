import React, {useState} from "react";
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);

    const onDone = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const onDelete = (id: number) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ));
    };

    const onEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();

        setTasks(tasks.map((task) =>
            (task.id === id ? { ...task, task: editTask} : task)
        ));

        setEdit(false);
    };

    return (
        <form className="tasks__item" onSubmit={(event) => onEdit(event, task.id)}>
            {
                edit ? (
                    <input value={editTask} onChange={(event) => setEditTask(event.target.value)} className={"tasks__item--text"}/>
                ) : task.completed ? (
                    <s className="tasks__item--text">{task.task}</s>
                ) : (
                    <span className="tasks__item--text">{task.task}</span>
                )
            }

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !task.completed) {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => onDelete(task.id)}>
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



































