// TaskList.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList.tsx';

test('renders TaskList component', () => {
  const tasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ];
  const handleTaskClick = jest.fn(); // Мок-функция для обработчика клика
  const { getByText } = render(<TaskList title="Test Title" tasks={tasks} onTaskClick={handleTaskClick} />);
  const task1Element = getByText('Task 1');
  const task2Element = getByText('Task 2');
  expect(task1Element).toBeInTheDocument();
  expect(task2Element).toBeInTheDocument();
});
