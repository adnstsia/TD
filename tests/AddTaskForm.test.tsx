// AddTaskForm.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm.tsx';

test('renders AddTaskForm component', () => {
  const onAddTask = jest.fn(); // Мок-функция для обработчика добавления задачи
  const { getByPlaceholderText, getByText } = render(<AddTaskForm onAddTask={onAddTask} />);
  const inputElement = getByPlaceholderText('Enter a new task');
  const addButtonElement = getByText('Add Task');
  expect(inputElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});

test('add task', () => {
  const onAddTask = jest.fn(); // Мок-функция для обработчика добавления задачи
  const { getByPlaceholderText, getByText } = render(<AddTaskForm onAddTask={onAddTask} />);
  const inputElement = getByPlaceholderText('Enter a new task');
  const addButtonElement = getByText('Add Task');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButtonElement);

  expect(inputElement).toHaveValue('');
  console.log('Тест успешно пройден: renders TaskList component');
});
