import React, { useMemo, useState } from 'react';
import { useTodoStore } from '@/store';
import TaskListItem from './TaskListItem';

const ITEMS_PER_PAGE = 10;

const TaskList: React.FC = () => {
  const { filter, tasks, setFilter } = useTodoStore();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilter({ search: value });
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setFilter({ category: value === 'All' ? undefined : value });
    setCurrentPage(1);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPriority(value);
    setFilter({ priority: value === 'All' ? undefined : value as 'High' | 'Medium' | 'Low' });
    setCurrentPage(1);
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter.category && task.category !== filter.category) return false;
      if (filter.priority && task.priority !== filter.priority) return false;
      if (filter.status && task.status !== filter.status) return false;
      if (filter.search && !task.title.toLowerCase().includes(filter.search.toLowerCase())) return false;
      return true;
    });
  }, [tasks, filter]);

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  const paginatedTasks = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTasks.slice(startIndex, endIndex);
  }, [filteredTasks, currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4 ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search tasks by title..."
          className="border-[1px] border-secondary p-2 rounded-md w-full md:w-1/3 bg-primary text-secondary placeholder:text-secondary"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border-[1px] border-secondary p-2  rounded-md w-full md:w-1/4 bg-primary text-secondary"
        >
          <option value="All">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="General">General</option>
        </select>
        <select
          value={selectedPriority}
          onChange={handlePriorityChange}
          className="border-[1px] border-secondary p-2 rounded-md w-full md:w-1/4 bg-primary text-secondary"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <h2 className="text-lg font-semibold mb-2 text-secondary">
        Task List: <span>{filteredTasks.length}</span>
      </h2>
      {paginatedTasks.length === 0 ? (
        <div className="text-secondary">No tasks available</div>
      ) : (
        <ul className="space-y-2">
          {paginatedTasks.map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? 'bg-[#0f2c0d] cursor-not-allowed' : 'bg-primary'
            } text-secondary`}
          >
            Prev
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? 'bg-[#0f2c0d] cursor-not-allowed' : 'bg-primary'
            } text-secondary`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
