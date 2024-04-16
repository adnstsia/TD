import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [completedTasks, setCompletedTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  const handleAddTask = (text: string) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleTaskClick = (taskId: number) => {
    const taskToComplete = tasks.find(task => task.id === taskId);
    if (taskToComplete) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      setCompletedTasks([...completedTasks, { ...taskToComplete, completed: true }]);
    }
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList title="All Tasks" tasks={tasks} onTaskClick={handleTaskClick} />
      <TaskList title="Incomplete Tasks" tasks={tasks} filter="incomplete" onTaskClick={handleTaskClick} />
      <TaskList title="Completed Tasks" tasks={completedTasks} filter="completed" onTaskClick={() => {}} />
    </div>
  );
}

export default App;
