import { useContext  } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "@mui/material/Button";

export const AddItem = ({ inputValue, setInputValue,description, setDescription }) => {

  const { addTask, updateTask, editIndex } = useContext(TaskContext);

  // const addToList = () => {
  //   const newList = [...props.list];
  //   if(props.editIndex != null){
  //     console.log('In add If :',props);
  //     newList[props.editIndex] = { name: props.inputValue };
  //     props.addList(newList); 
  //     props.seteditIndex(null);
  //   }
  //   else{
  //     console.log('In add Else :',props);
  //     newList.push({ name: props.inputValue })
  //     props.addList(newList);
  //   }
  //   props.setInputValue("");
  // };

  const handleAddOrUpdate = () => {
    if (inputValue.trim() === "" || description.trim() === "") return;

    if (editIndex !== null) {
      updateTask(editIndex, inputValue, description);
    } else {
      addTask(inputValue, description);
    }

    setInputValue("");
    setDescription("");
  };
  

  return (
    <Button color="success" onClick={handleAddOrUpdate}>
      {editIndex !== null ? "Update Task" : "Add Task"}
    </Button>
  );
  
};
