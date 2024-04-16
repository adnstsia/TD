// TaskList.tsx
// Компонент TaskList.tsx

import React from 'react';

// Interface representing the structure of a task
// Интерфейс, представляющий структуру задачи
interface Task {
  id: number;
  text: string; 
  completed: boolean; 
}

// Props interface for the TaskList component
// Интерфейс пропсов для компонента TaskList
interface TaskListProps {
  title: string;
  tasks: Task[];
  filter: 'all' | 'completed' | 'active';
  onTaskClick: (taskId: number) => void;
}


const TaskList: React.FC<TaskListProps> = ({ title, tasks, filter, onTaskClick }) => {
  // Filter tasks based on the specified filter
  // Фильтрация задач в зависимости от указанного фильтра
  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className='taskListContainer'>
      <h2>{title}</h2>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => onTaskClick(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskClick(task.id)}
            />
            <label>{task.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to filter tasks based on the filter value
// Функция для фильтрации задач в зависимости от значения фильтра
function filterTasks(tasks: Task[], filter: 'all' | 'completed' | 'active'): Task[] {
  switch (filter) {
    case 'all':
      return tasks;
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'active':
      return tasks.filter(task => !task.completed);
    default:
      return tasks;
  }
}

export default TaskList;
