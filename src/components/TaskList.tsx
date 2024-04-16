// TaskList.tsx
import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  title: string;
  tasks: Task[];
  filter?: 'all' | 'completed' | 'incomplete';
  onTaskClick: (taskId: number) => void;
}

const TaskList: React.FC<Props> = ({ title, tasks, filter = 'all', onTaskClick }) => {
  const filteredTasks = filter === 'completed' ? tasks.filter(task => task.completed) :
                        filter === 'incomplete' ? tasks.filter(task => !task.completed) :
                        tasks;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            onClick={() => onTaskClick(task.id)} // Добавляем обработчик клика
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
