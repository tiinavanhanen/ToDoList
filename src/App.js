import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const defaultTasks = [{
        task: "Add a task",
        completed: false,
    }, {
        task: "Add another task",
        completed: false,
    }]

    const [description, setDescription] = useState("")
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState(defaultTasks)

    // Adds new task to the list after the user presses the add task button
    // and clears the input field
    const handleSubmit = (event) => {
        setTasks([...tasks, task])
        setDescription("")
    }

    // Makes a new task from the user's input
    useEffect(() => {
        setTask({
            task: description,
            completed: false
        })
    }, [description])

    // Marks the task as complete if it isn't and vice versa
    function toggleCompleted(id) {
        const updatedTasks = tasks.map((task, index) => {
            if (index === id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            <label>Task description
                <input type="text" value={description}
                       onChange={(e) => setDescription(e.target.value)}>
                </input>
            </label>
            <button onClick={handleSubmit}>Add task</button>
            <h2>To Do:</h2>
            {tasks.map((task, index) =>
                <div>
                <p key={index}> {task.task}</p>
                <label>Completed?
                    <input type="checkbox" defaultChecked={task.completed} onChange={() => toggleCompleted(index)} />
                </label>
                </div>
            )}
        </div>
    )
}
export default App;
