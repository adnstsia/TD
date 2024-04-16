// This component represents a form for adding tasks.
// Этот компонент представляет форму для добавления задач.

import React, { useState } from 'react';

const AddTaskForm: React.FC<{ onAddTask: (text: string) => void }> = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  // Function to handle input change
  // Функция для обработки изменения ввода
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // Function to handle form submission
  // Функция для обработки отправки формы
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form className='formContainer' onSubmit={handleSubmit} data-testid="add-task-form">
      <input type="text"
        className="input-task"
        placeholder="What needs to be done?"
        value={task} onChange={handleInputChange} />
    </form>
  );
};

export default AddTaskForm;
