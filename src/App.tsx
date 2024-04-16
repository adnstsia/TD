import React, { useState, useEffect } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm.tsx';
import TaskList from './components/TaskList.tsx';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [completedTasks, setCompletedTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');
  const [completedCount, setCompletedCount] = useState<number>(0);

  // Update the completed tasks count
  // Обновление счетчика выполненных задач
  useEffect(() => {
    const count = completedTasks.filter(task => task.completed).length;
    setCompletedCount(count);
  }, [completedTasks]);

  // Function to add a new task
  // Функция для добавления новой задачи
  const handleAddTask = (text: string) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to handle task click
  // Функция для обработки клика по задаче
  const handleTaskClick = (taskId: number) => {
    const taskToComplete = tasks.find(task => task.id === taskId);
    if (taskToComplete) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      setCompletedTasks([...completedTasks, { ...taskToComplete, completed: true }]);
    }
  };

  // Function to handle filter change
  // Функция для обработки изменения фильтра
  const handleFilterChange = (newFilter: 'all' | 'completed' | 'active') => {
    setFilter(newFilter);
  };

  // Function to delete completed tasks
  // Функция для удаления выполненных задач
  const handleDeleteCompletedTasks = () => {
    const uncompletedTasks = completedTasks.filter(task => !task.completed);
    setCompletedTasks(uncompletedTasks);
  };

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        title=""
        tasks={tasks.concat(completedTasks)}
        filter={filter}
        onTaskClick={handleTaskClick}
      />

      <div className="controlPanel">
        <div className="controlPanel__counter">Completed: {completedCount}</div>
        <div className='buttonContainer'>
          <button
            className={filter === 'all' ? 'button active' : 'buttonContainer__button'}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={filter === 'active' ? 'button active' : 'buttonContainer__button'}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
          <button
            className={filter === 'completed' ? 'button active' : 'buttonContainer__button'}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
        </div>

        <button className="buttonContainer__button" onClick={handleDeleteCompletedTasks}>
          Delete Completed
        </button>
      </div>
    </div>
  );
}

export default App;
