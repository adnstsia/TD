import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList.tsx';

test('renders TaskList component', () => {
  const tasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true }
  ];
  const mockOnTaskClick = jest.fn();
  const { getByText } = render(<TaskList title="All Tasks" tasks={tasks} onTaskClick={mockOnTaskClick} filter="all" />);
  
  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
});
