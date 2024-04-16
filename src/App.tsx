import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [completedTasks, setCompletedTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all'); // Храним текущий фильтр

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

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'active') => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        title=""
        tasks={tasks.concat(completedTasks)} // Объединяем все задачи
        filter={filter}
        onTaskClick={handleTaskClick}
      />

      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('active')}>Active</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
    </div>
  );
}

export default App;
