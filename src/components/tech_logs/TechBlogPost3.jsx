import React from 'react';
import {Container, Typography, List, ListItem } from '@mui/material';

const TechLogPost3 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    Breakable Toy
                </Typography>
                <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                    Full-Stack To-Do App
                </Typography>
            </div>
            <Container>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Typography variant="body1" paragraph>
                The task consists of building a full-stack To-Do app. 
                </Typography>
                <Typography variant="h4">
                    Context
                </Typography>
                <Typography variant="body1" paragraph>
                   We were given the task to create a full-stack To-Do app that can handle all CRUD operations, do some filtering and 
                   sorting for the tasks, and include some completion metrics. The functional requirements were the following:
                </Typography>
                <List>
                    <ListItem>
                        <Typography>
                            1. Create a task, specifying the name, a priority, and possibly, a due date.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            2. Ability to edit name, priority, and due date for existing tasks.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            3. Ability to filter tasks by specifying the name, priority, and/or whether they are done or not.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            4. Ability to sort tasks by priority and/or due date.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            5. Change done status of tasks. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            5. Pagination of tasks.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            6. Ability to know completion time metrics of all tasks as well as for each priority. 
                        </Typography>
                </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                   The UI/UX can be seen in the following image:
                </Typography>
                <Typography variant="h4">
                    Solution
                </Typography>
                <Typography variant="body1" paragraph>
                   
                </Typography>
                <Typography variant="h4">
                    Alternative Solutions
                </Typography>
                <Typography variant="body1" paragraph>
                    
                </Typography>
            </Container>
        </div>
        
    );
};

export default TechLogPost3;
