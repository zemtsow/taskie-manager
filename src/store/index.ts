import { create } from 'zustand';

const useTodoStore = create<StoreDataTypes.TodoState>((set) => ({
  tasks: [],
  filter: {},

  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTaskStatus: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Pending' ? 'Completed' : 'Pending',
            }
          : task
      ),
    })),
  setFilter: (filter) => set(() => ({ filter })),
}));

const useFilteredTasks = () =>
  useTodoStore((state) => {
    const { tasks, filter } = state;
    return tasks.filter((task) => {
      if (filter.category && task.category !== filter.category) return false;
      if (filter.status && task.status !== filter.status) return false;
      if (filter.search && !task.title.includes(filter.search)) return false;
      return true;
    });
  });

export {
    useFilteredTasks,
    useTodoStore
}