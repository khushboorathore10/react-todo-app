import { useContext } from 'react';
import Button from '@mui/material/Button';
import { TaskContext } from '../context/TaskContext';

export const CompleteTask = ({ completedTasks }) => {
  const { completeTasks } = useContext(TaskContext);

  return (
    <Button color="primary" onClick={() => completeTasks(completedTasks)}>
      Complete Task
    </Button>
  );
};
