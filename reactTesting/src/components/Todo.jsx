import { useState } from "react";

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function addTaskHandler() {
        if (newTask.trim() === '') return;

        setTasks((t) => [...t, newTask]);
        setNewTask(''); 
    }

    function removeTaskHandler(index) {
        setTasks((t) => {t.filter(i !== index))})
    }

    return (
        <>
            <h1>Your tasks</h1>
            <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTaskHandler}>Add task</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task} <button onClick={(index) => {removeTaskHandler(index)}}>x</button></li>)}
            </ul>
        </>
    );
}

export default ToDo;
