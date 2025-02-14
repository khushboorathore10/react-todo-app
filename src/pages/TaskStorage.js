import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Chip, Stack } from "@mui/material";

export const TaskStorage = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {tasks.length === 0 ? (
                <Typography variant="h6" align="center" color="textSecondary">
                    No tasks available
                </Typography>
            ) : (
                tasks.map((task, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <Stack direction="row" spacing={15}>
                                <Typography variant="h6">{index + 1}</Typography>
                                <Typography variant="h6">{task.name}</Typography>
                                <Chip 
                                    label={task.completed ? "Completed" : "Pending"} 
                                    color={task.completed ? "success" : "warning"} 
                                    variant="outlined" 
                                    style={{ marginTop: 8 }}
                                />
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {task.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </div>
    );
};
