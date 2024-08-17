import React from 'react';
import {Container, Typography, List, ListItem } from '@mui/material';
import UIUXImage from '../../assets/todo-ui-ux.png';

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
                            6. Pagination of tasks.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            7. Ability to know completion time metrics of all tasks as well as for each priority. 
                        </Typography>
                </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                   The UI/UX requirements can be seen in the following image:
                </Typography>
                <img src={UIUXImage} alt="UIUX requirements" style={{ border: '5px solid #44197e' }}/>
                <List>
                    <ListItem>
                        <Typography>
                            1. Controls for filtering
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            2. Button for adding tasks
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            3. Priority column with sorting button
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            4. Due date column with sorting button
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            5. Actions column with buttons for editing and deleting 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            6. Pagination controls
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            7. Box with metrics 
                        </Typography>
                </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                   Extras
                </Typography>
                <List>
                    <ListItem>
                        <Typography>
                            1. Define "ToDo" class with the necessary attributes
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            2. Define API with all necessary endpoints to hadle CRUD operations (GET, POST, PUT, DELETE)
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            3. There should not be any external database, but the structure should allow easy transition to a database service
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            4. There should be 2 repositories, one for the front-end and another one for the back-end
                        </Typography>
                    </ListItem>
                </List>
                <Typography variant="h4">
                    Solution
                </Typography>
                <Typography variant="body1" paragraph>
                   The back-end portion was rather straight-forward. I first used SpringInitializr to set up most of the buildig part of the project. 
                   Once I had the structure, I created a ToDo class to handle the task objects. Then, following a layered structure, I created the 
                   repository class, the service class, and the controller class. The repository handles database interaction, which in this case, is 
                   just an array of ToDo objects. The service handles logic, which I used to implement sorting and filtering. The controller handles 
                   HTTP requests. Most of the requests are simple with a task as the parameter, but the GET method includes various parameters that allow 
                   for sorting and filtering. For testing, I used JUnit (for unit testing) and Mockito (mocking requests).
                </Typography>
                <Typography variant="body1" paragraph>
                   The front-end part was a bit more complicated. The libraries I used were: axios (for HTTP requests), Material UI (UI componnents), dayjs 
                   (handling datetime data), Jest (testing), and mock-axios (mocking requests). I created 4 main React components and another one that contains 
                   them and handles the state management with react state variables. Starting from top to bottom, we have the first componnent FilterBox, which 
                   consists of input fields that will set the parameters for the GET request. I coded it in such a way that there's no button for search, the 
                   front-end updates after a change in the field. The second component is TaskDialog, which is the pop-up window that handles adding and editing 
                   operations of tasks. If the add button is clicked, the window appears with empty fields and if the edit button is clicked, the window has the 
                   selected task's properties pre-set. The third component is the TasksBox, which includes the table view of the tasks, where a row represents a 
                   single task. It also has various buttons. At the top of the view, the priority and due date column headers can be clicked to sort the task 
                   list. There's also an Actions column with buttons to edit and delete tasks. At the bottom of the table, there are the pagination controls, with 
                   a new page created every 10 tasks. The last component is the MetricsBox, which includes the logic for calculating the metrics and displaying them. 
                   Lastly, for testing, jester and mock-axios were used, in a similar fashion to JUnit and Mockito. 
                </Typography>
                <Typography variant="h4">
                    Alternative Solutions
                </Typography>
                <Typography variant="body1" paragraph>
                    There are a lot of different ways to approach this problem. Here's a list of alternative solutions and potential improvements:
                </Typography>
                <List>
                    <ListItem>
                        <Typography>
                            • Different Tech Stack (Alterative Solution): This could be approached with another tech stack and different programming laguages. 
                            There are too may to mention, though React and Spring are very popular and used widely, so I think it's a good thing we were tasked 
                            to do this with them. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Different Libraries (Alterative Solution): There are other React libraries that provide UI components.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Move Pagination to Back-End (Improvement): This change would make the application more scalable, as putting more processing on the 
                            client side is not a good idea with heavy tasks. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Move Metric Calculation to Back-End (Improvement): Again, this will make the application more scalable too, as the processing tasks 
                            on the cliet side will be reduced. 
                        </Typography>
                    </ListItem>
                </List>
            </Container>
        </div>
        
    );
};

export default TechLogPost3;
