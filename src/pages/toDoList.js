import { useState, useEffect } from 'react';
import '../styles/toDoList.css';

function newTask({name}) {

};

function ToDoList() {  

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('yourTasks');
        return saved ? JSON.parse(saved) : [];
    });

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('yourTasks', JSON.stringify(tasks));
    }, [tasks]);

   
    const addTask = () => {
        if (inputValue.trim() === '') return; 

        const newTaskObj = {
            id: Math.random(),
            nameTask: inputValue,
            done: false
        };

        setTasks([...tasks, newTaskObj]);
        setInputValue(''); 
    };

    const toggleChecked = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done }; 
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return( 
        <div className="ToDoList">
            <div className="input-group">
                <input 
                placeholder="digite sua nova tarefa" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button onClick={addTask}>Adicionar tarefa</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}
                        onClick={() => toggleChecked(task.id)}
                        style={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
                        {task.nameTask}
                    </li>
                ))}
            </ul>
        </div>
    )
} export default ToDoList;