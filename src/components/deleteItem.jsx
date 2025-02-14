import { useContext } from 'react';
import Button from '@mui/material/Button';
import { TaskContext } from '../context/TaskContext';

export const DeleteItem = ({ index }) => {
  const { deleteTask } = useContext(TaskContext);
  
    return (
      <Button color="error" onClick={() => deleteTask(index)}>
        Delete
      </Button>
    );
  };