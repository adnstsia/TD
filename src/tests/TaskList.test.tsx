// The test ensures that the TaskList component renders correctly with the specified title and tasks.
// Тест проверяет, что компонент TaskList отображается корректно с указанным заголовком и задачами.

import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TaskList from '../components/TaskList';

test('TaskList renders correctly', () => {
  // Arrange
  const mockTasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ];
  const mockFilter = 'all';
  const mockOnTaskClick = jest.fn();
  
  // Act
  const { getByText } = render(
    <TaskList
      title="Test TaskList"
      tasks={mockTasks}
      filter={mockFilter}
      onTaskClick={mockOnTaskClick}
    />
  );
  
  // Assert
  expect(getByText('Test TaskList')).toBeInTheDocument();
  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
  expect(getByText('Task 3')).toBeInTheDocument();
});
