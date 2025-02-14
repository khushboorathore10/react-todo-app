import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [editIndex, setEditIndex] = useState(null); 

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
      });

    const updateTasksAndStorage = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    };
    
    const addTask = (name, description) => {
        const newTasks = [...tasks, { name, description, completed: false }];
        updateTasksAndStorage(newTasks);
      };
    
      const updateTask = (index, name, description) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], name, description, completed: false };
        updateTasksAndStorage(updatedTasks);
        setEditIndex(null);
      };
  
  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    updateTasksAndStorage(filteredTasks);
  };

  const completeTasks = (completedTaskIds) => {
    const updatedTasks = tasks.map((task, index) =>
      completedTaskIds.includes(index + 1) ? { ...task, completed: true } : task
    );
    updateTasksAndStorage(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, completeTasks, editIndex, setEditIndex }}
    >
      {children}
    </TaskContext.Provider>
  );
};
