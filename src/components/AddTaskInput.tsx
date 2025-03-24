import React from 'react';
import { useTodoStore } from '@/store';
import Selector from './Selector';

const AddTaskInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = React.useState<string>('');
  const [taskCategory, setTaskCategory] = React.useState<string>('General');
  const [taskPriority, setTaskPriority] = React.useState<'High' | 'Medium' | 'Low'>('Medium');

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

  const categories = ["General", "Work", "Personal", "Shopping"]
  const priority = ["High", "Medium", "Low"]

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
              } text-base bg-primary border-[1px] border-secondary p-3 rounded-xl w-full placeholder:text-secondary text-secondary`}
          />
          <div
            className={`${taskTitle.length === maxLengthTitle && 'text-red-500'
              } absolute right-3 text-secondary`}
          >
            {taskTitle.length} / {maxLengthTitle}
          </div>
        </div>

        <div className="w-full">
          <Selector
            label={"Category"}
            value={taskCategory}
            setValue={setTaskCategory}
            items={categories}
          />
        </div>

        <div className="w-full">
        <Selector
            label={"Priority"}
            value={taskPriority}
            setValue={setTaskPriority}
            items={priority}
          />
        </div>

        <button
          type="submit"
          className=" text-secondary hover:opacity-50 select-none duration-300 bg-primary py-2 px-6 text-sm rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTaskInput;
