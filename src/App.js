import './App.css';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TaskStorage } from './pages/TaskStorage';
import { TaskProvider } from './context/TaskContext'; 
import { Home } from './components/home'


function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [description, setDescription] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <AppBar position="static" sx={{ backgroundColor: "#a6c6e7" }}>
            <Toolbar>
              <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
                <Typography variant="h6">TO-DO LIST</Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/stored-tasks">Stored Tasks</Button>
              </Stack>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={
            <Home 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            completedTasks={completedTasks} 
            setCompletedTasks={setCompletedTasks}
            description={description}
            setDescription={setDescription}
          />
          
            } 
             />
            <Route path="/stored-tasks" element={<TaskStorage />} />
          </Routes>
        </div>  
      </Router>
    </TaskProvider>
  ); 
}
export default App;
