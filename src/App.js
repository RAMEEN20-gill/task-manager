import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import * as api from './services/api';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [viewTask, setViewTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to load tasks:", error.message);
    }
  }

  async function handleSave(task) {
    try {
      if (task.id || task._id) {
        await api.updateTask(task.id || task._id, task);
      } else {
        await api.createTask(task);
      }
      loadTasks();
      setEditTask(null);
    } catch (error) {
      console.error("Error saving task:", error.message);
    }
  }

  async function handleDelete(id) {
    try {
      await api.deleteTask(id);
      loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 underline text-center mb-6">
          Task Manager
        </h1>
        <TaskForm onSave={handleSave} editTask={editTask} />
        <TaskList tasks={tasks} onEdit={setEditTask} onDelete={handleDelete} />
        <TaskDetails task={viewTask} />
      </div>
    </div>
  );
}

export default App;
