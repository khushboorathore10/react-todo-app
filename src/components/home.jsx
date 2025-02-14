import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AddItem } from "./addItem";
import { CompleteTask } from "./completeTask";
import { EditItem } from "./editItem";
import { DeleteItem } from "./deleteItem";

export const Home = ({ inputValue, setInputValue, completedTasks, setCompletedTasks,description, setDescription }) => {
    const { tasks } = useContext(TaskContext); 

  const rows = tasks.map((item, index) => ({
    id: index + 1,
    task: item.name,
    description: item.description,
    completed: item.completed,
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "task", headerName: "Task", width: 750 },
    {
      field: "completed",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <span style={{ color: params.value ? "green" : "red" }}>
          {params.value ? "Done" : "Pending"}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        const index = params.row.id - 1;
        return (
          <Stack direction="row" spacing={2} sx={{padding: "8px"}}>
            <EditItem index={index} 
            setInputValue={setInputValue}
            setDescription={setDescription} 
            />
            <DeleteItem index={index} />
          </Stack>
        );
      },
    },
  ];

  return (
    <header className="App-header">
      <Box className="upper-box">
      <Stack spacing={2} width="100%">
    <TextField
      id="standard-search"
      required
      value={inputValue}
      label="Enter Title"
      type="search"
      variant="standard"
      onChange={(e) => setInputValue(e.target.value)}
      fullWidth
    />
    <TextField
      id="outlined-multiline-static"
      required
      label="Enter Description"
      variant="outlined" 
      multiline
      rows={2} 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      fullWidth
    />
    <AddItem
      inputValue={inputValue}
      setInputValue={setInputValue}
      description={description}
      setDescription={setDescription}
    />
  </Stack>
      </Box>
      <Box className="center-box">
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(e) => setCompletedTasks(e)}
          rows={rows}
          columns={columns}
          slots={{
            footer: () => (
              <div className="data-grid-footer">
                <CompleteTask completedTasks={completedTasks} />
              </div>
            ),
          }}
        />
      </Box>
    </header>
  );
};
