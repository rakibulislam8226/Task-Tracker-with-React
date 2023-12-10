import { useState } from "react";

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddForm from "./components/AddForm";


function App() {
  const [showAddForm, setShowAddForm] = useState(false)

  const [tasks, setTasks] = useState(
    [
      { "name": "Shyam", "email": "shyamjaiswal@gmail.com", "age": 25, "gender": "male", "remainder": true },
      { "name": "Bob", "email": "bob32@gmail.com", "age": 35, "gender": "female", "remainder": false },
      { "name": "Jai", "email": "jai87@gmail.com", "age": 20, "gender": "male", "remainder": false },
      { "name": "Sask", "email": "sask@gmail.com", "age": 35, "gender": "female", "remainder": true },
    ]
  );

  // Add task
  const addTask = (task) => {
    const newTask = { ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (email) => {
    setTasks(tasks.filter((task) =>
      task.email !== email
    ))
  }

  // Remainder toggle
  const toggleRemainder = (email) => {
    setTasks(tasks.map((task) =>
      task.email === email ? { ...task, remainder: !task.remainder } : task
    ))
  }

  return (
    <div className="container">
      <Header  onAdd={() => setShowAddForm(!showAddForm)} showAdd={showAddForm} />
      {showAddForm && <AddForm onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />) : "No Task to show."}
    </div>
  )
}

export default App;
