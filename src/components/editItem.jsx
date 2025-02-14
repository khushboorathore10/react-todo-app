import Button from '@mui/material/Button';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const EditItem = ({ index, setInputValue, setDescription  }) => {
  const { tasks, setEditIndex } = useContext(TaskContext);

  // const editList = () => {
  //   console.log('In Edit :',props);
  //   const newList = [...props.list];
  //   const editValue = newList[props.index]
  //   props.onSendData(editValue.name);
  //   props.onSendIndex(props.index);
  // };
  const editList = () => {
    if (tasks && tasks.length > index) {
      const editValue = tasks[index];
      setInputValue(editValue.name);
      setDescription(editValue.description);
      setEditIndex(index);
    }
  };
  return (
    <>
          {/* <button className = 'edit' onClick={editList}>Edit</button> */}
      <Button  color="warning" onClick={editList}>
        Edit
      </Button>
    </>
  );
};
