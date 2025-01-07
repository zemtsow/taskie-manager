declare namespace StoreDataTypes {
  type Task = {
    id: string;
    title: string;
    description: string;
    category: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Pending' | 'Completed';
  };
  
  type Filter = {
    category?: string;
    status?: 'Pending' | 'Completed';
    search?: string;
    priority?: 'High' | 'Medium' | 'Low';
  };
  
  type TodoState = {
    tasks: Task[];
    filter: Filter;
    addTask: (task: Task) => void;
    updateTask: (updatedTask: Task) => void;
    deleteTask: (id: string) => void;
    toggleTaskStatus: (id: string) => void;
    setFilter: (filter: Partial<Filter>) => void;
  };
}