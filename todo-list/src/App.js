import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formInput, setFormInput] = useState('');
  
  const handleChange = (e) => {
    setFormInput(e.target.value)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      const tasks = data.map((task, index) => {
        return {
          id: uuidv4(),
          date: new Date().toLocaleDateString(),
          task: task.title,
          completed: task.completed
        }
      })
      setTasks(tasks);
    }
    fetchTasks();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput !== '') {
      const date = new Date().toLocaleDateString()
      const newTask = {
        id: uuidv4(),
        date: date,
        task: formInput,
        completed: false
      }
      setTasks([...tasks, newTask])
      setFormInput('')
    }
  }

  const handleComplete = (index) => {
    const newTasks = [...tasks]
    if (newTasks[index].completed === false) {
      newTasks[index].completed = true
    } else {
      newTasks[index].completed = false
    }
    setTasks(newTasks)
  }

  const handleRemove = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleRemoveAll = () => {
    setTasks([])
  }

  return (
    <div className="App">
      <Form formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Todo tasks={tasks} handleComplete={handleComplete} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
    </div>
  )
}

export default App;
