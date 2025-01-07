import { useTodoStore } from '@/store';
import React from 'react';

const TaskListItem = ({ task }: { task: StoreDataTypes.Task }) => {
  const { toggleTaskStatus, deleteTask, updateTask } = useTodoStore();

  const [activeEditTask, setActiveEditTask] = React.useState<string | undefined>('');
  const [inputFields, setInputFields] = React.useState<StoreDataTypes.Task>({
    id: '',
    title: '',
    description: '',
    category: 'General',
    priority: 'Medium',
    status: 'Pending',
  });

  const saveEditTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask({
      id: task.id,
      title: inputFields.title,
      description: inputFields.description,
      category: inputFields.category,
      priority: inputFields.priority,
      status: inputFields.status,
    });
    setActiveEditTask(undefined);
  };

  return (
    <li key={task.id} className="flex justify-between items-center border p-2 rounded-md">
      {activeEditTask === task.id ? (
        <form
          onSubmit={saveEditTask}
          className="flex flex-col gap-2 w-full"
        >
          <input
            value={inputFields.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputFields((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="Title"
            className="text-base border outline-none p-2 rounded-md w-full"
          />

          <select
            value={inputFields.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setInputFields((prev) => ({ ...prev, category: e.target.value }))
            }
            className="text-base border outline-none p-2 rounded-md w-full"
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>

          <select
            value={inputFields.priority}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setInputFields((prev) => ({
                ...prev,
                priority: e.target.value as 'High' | 'Medium' | 'Low',
              }))
            }
            className="text-base border outline-none p-2 rounded-md w-full"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={inputFields.status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setInputFields((prev) => ({
                ...prev,
                status: e.target.value as 'Pending' | 'Completed',
              }))
            }
            className="text-base border outline-none p-2 rounded-md w-full"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => setActiveEditTask(undefined)}
              className="bg-red-400 text-white hover:opacity-50 duration-200 py-1 px-3 rounded-md text-sm"
            >
              Undo
            </button>
            <button
              type="submit"
              className="bg-green-400 text-white hover:opacity-50 duration-200 py-1 px-3 rounded-md text-sm"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="font-medium break-words w-full">{task.title}</div>
          <ul className="flex flex-row gap-x-2 text-sm text-gray-500">
            <li>Category: {task.category}</li>
            <li className="text-gray-400">·</li>
            <li>Priority: {task.priority}</li>
            <li className="text-gray-400">·</li>
            <li>Status: {task.status}</li>
          </ul>
        </div>
      )}

      <div className="flex gap-2 select-none">
        {activeEditTask !== task.id && (
          <>
            <button
              type="button"
              onClick={() => toggleTaskStatus(task.id)}
              className="bg-green-400 text-white hover:opacity-50 duration-200 py-1 px-3 rounded-md text-sm"
            >
              {task.status === 'Pending' ? 'Complete' : 'Undo'}
            </button>
            <button
              type="button"
              onClick={() => deleteTask(task.id)}
              className="bg-red-400 text-white py-1 hover:opacity-50 duration-200 px-3 rounded-md text-sm"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveEditTask(task.id);
                setInputFields({
                  id: task.id,
                  title: task.title,
                  description: task.description || '',
                  category: task.category || 'General',
                  priority: task.priority || 'Medium',
                  status: task.status || 'Pending',
                });
              }}
              className="active:bg-blue-500 hover:opacity-50 duration-200 bg-blue-400 py-1 text-white px-6 text-sm rounded-md"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskListItem;
