import { useState } from "react";

function Todo() {
    let [tasks, tasksChange] = useState([])
    let [newTask, newTaskChange] = useState('')
    
    function newTaskChangeHandler(event) {
        newTaskChange(() => event.target.value)
    }

    function addTaskHandler() {
        tasksChange((t) => [...t, newTask])
        newTaskChange('')
    }

    function removeTaskHandler(index) {
        tasksChange((t) => t.filter((_, i) => (i !== index)))
    }

    return(
        <section className="todo container">
            <h1>Your tasks:</h1>
            <input type="text" value={newTask} onChange={(e) => {newTaskChangeHandler(e)}}></input>
            <button onClick={addTaskHandler}>Add task</button>
            
            <ul className="tasks">
                {tasks.map((data, index) => (
                    <li key={index}>{data} <button onClick={() => removeTaskHandler(index)} key={index}>x</button></li>
                ))}
            </ul>
        </section>
    );
}

export default Todo