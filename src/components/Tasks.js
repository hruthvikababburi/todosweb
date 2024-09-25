import React, { useEffect, useState } from 'react';
import { getTasks, updateTaskStatus, deleteTask, createTask } from '../api/api'; // Import API functions

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTask) {
      await createTask(newTask);
      setNewTask(''); // Clear the input
      const data = await getTasks(); // Refresh the task list
      setTasks(data);
    }
  };

  const handleUpdateStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    await updateTaskStatus(taskId, newStatus);
    const data = await getTasks(); // Refresh the task list
    setTasks(data);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const data = await getTasks(); // Refresh the task list
    setTasks(data);
  };

  return (
    <div className="tasks-container">
      <h2>Your Tasks</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="tasks-list">
        {tasks.map(task => (
          <li key={task.id}>
            <p>{task.description}</p>
            <select
              defaultValue={task.status}
              onChange={(e) => handleUpdateStatus(task.id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;