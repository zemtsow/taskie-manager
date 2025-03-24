import React, { useMemo, useState } from 'react';
import { useTodoStore } from '@/store';
import TaskListItem from './TaskListItem';
import Selector from './Selector';

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

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setFilter({ category: value === 'All' ? undefined : value });
    setCurrentPage(1);
  };

  const handlePriorityChange = (value: string) => {
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

  const categories = ["All", "Work", "Personal", "Shopping", "General"]
  const priority = ["All", "High", "Medium", "Low"]

  return (
    <div className="mt-4">
      <div className="flex flex-col md:grid grid-cols-1 gap-4 mb-4 ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search tasks by title..."
          className="text-base bg-primary border-[1px] border-secondary p-3 rounded-xl w-full placeholder:text-secondary text-secondary"
        />
        <div className="flex mobileS:flex-col lg:flex-row gap-2">
        <Selector
          label={"Category"}
          value={selectedCategory}
          setValue={handleCategoryChange}
          items={categories}
        />
        <Selector
          label={"Category"}
          value={selectedPriority}
          setValue={handlePriorityChange}
          items={priority}
        />
        </div>
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
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-[#0f2c0d] cursor-not-allowed' : 'bg-primary'
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
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-[#0f2c0d] cursor-not-allowed' : 'bg-primary'
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
