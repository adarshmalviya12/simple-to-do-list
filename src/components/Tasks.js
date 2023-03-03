import React, { useState } from 'react'

const AddTask = ({ onCancel, onAddTask }) => {
    const [task, setTask] = useState("");
    return (
        <div className="addTaskDialog">
            <input value={task} onChange={(event) => setTask(event.target.value)} />
            <div className='addTaskActions'>
                <div className='btns-container'>
                    <button className='add-btn' onClick={() => {
                        onAddTask(task)
                        onCancel();
                        setTask("")

                    }} >Add Task</button>

                    <button className='cancel-btn' onClick={() => {
                        onCancel()
                        setTask("")
                    }}>Cancel</button>
                </div>
                <div className='icons-container'>icon</div>
            </div>
        </div>
    )
};

const Tasks = ({ selectedTab }) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])

    const addNewTask = (text) => {
        setTasks((prevState) => [...prevState, text])
    }
    return (
        <div className='tasks'>
            <h1>{selectedTab}</h1>
            <div className="addTaskBtn" onClick={() => setShowAddTask((prevState) => !prevState)}>
                <span className='plus'>+</span>
                <span className='addTaskText'>add task</span>
            </div>
            {showAddTask && (
                <AddTask
                    onAddTask={addNewTask}
                    onCancel={() => setShowAddTask(false)}
                />)}
            {/* { showAddTask ? <AddTask /> : null }  // Alternate way */}
            {tasks.length > 0 ?
                tasks.map(task => (
                    <p >{task}  </p>
                )) : null
            }

        </div>
    )
}

export default Tasks
