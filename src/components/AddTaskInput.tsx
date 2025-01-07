import React, { useState } from 'react';
import { useTodoStore } from '@/store';

const AddTaskInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskCategory, setTaskCategory] = useState<string>('General');
  const [taskPriority, setTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  const { addTask } = useTodoStore();
  const maxLengthTitle: number = 58;

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!taskTitle.trim()) return;

    addTask({
      id: Date.now().toString(),
      title: taskTitle,
      description: '',
      category: taskCategory,
      priority: taskPriority,
      status: 'Pending',
    });

    setTaskTitle('');
    setTaskCategory('General');
    setTaskPriority('Medium');
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleAddTask}
        className="flex flex-col gap-4 justify-center items-center my-2"
      >
        
        <div className="w-full flex flex-row justify-center items-center relative">
          <input
            type="text"
            maxLength={maxLengthTitle}
            value={taskTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
            placeholder="Write your own note"
            className={`${taskTitle.length === maxLengthTitle && 'border-red-500'
              } text-base border outline-none p-3 rounded-xl w-full placeholder:text-gray-400 text-gray-400`}
          />
          <div
            className={`${taskTitle.length === maxLengthTitle && 'text-red-500'
              } absolute right-3 text-gray-400`}
          >
            {taskTitle.length} / {maxLengthTitle}
          </div>
        </div>

        <div className="w-full">
          <label className="block text-gray-700 text-sm mb-1">Category</label>
          <select
            value={taskCategory}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTaskCategory(e.target.value)}
            className="w-full p-2 border rounded-xl"
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <div className="w-full">
          <label className="block text-gray-700 text-sm mb-1">Priority</label>
          <select
            value={taskPriority}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTaskPriority(e.target.value as 'High' | 'Medium' | 'Low')
            }
            className="w-full p-2 border rounded-xl"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Кнопка добавления задачи */}
        <button
          type="submit"
          className="active:bg-blue-500 select-none duration-300 bg-blue-400 py-2 text-white px-6 text-sm rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTaskInput;
