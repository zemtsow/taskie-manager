import { useTodoStore } from '@/store';
import React, { useMemo } from 'react';
import TaskListItem from './TaskListItem';


const TaskList: React.FC = () => {
  const { filter, tasks } = useTodoStore()

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter.category && task.category !== filter.category) return false;
      if (filter.status && task.status !== filter.status) return false;
      if (filter.search && !task.title.includes(filter.search)) return false;
      return true;
    });
  }, [tasks, filter]);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2 text-blue-500">Task List: <span className=''>{filteredTasks.length}</span></h2>
      {filteredTasks.length === 0 ? (
        <div className="text-gray-500">No tasks available</div>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <TaskListItem key={task.title} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
