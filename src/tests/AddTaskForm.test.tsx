// The test verifies that submitting the form invokes the onAddTask function with the entered value.
// Тест проверяет, что отправка формы вызывает функцию onAddTask с введенным значением.

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm';

test('Submitting form calls onAddTask with input value', () => {
  // Arrange
  const mockAddTask = jest.fn();
  render(<AddTaskForm onAddTask={mockAddTask} />);
  const inputElement = screen.getByPlaceholderText('What needs to be done?');

  // Act
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByTestId('add-task-form'));

  // Assert
  expect(mockAddTask).toHaveBeenCalledWith('Test task');
  expect((inputElement as HTMLInputElement).value).toBe('');
});
