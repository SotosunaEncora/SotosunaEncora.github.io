import React from 'react';
import {Container, Typography, List, ListItem } from '@mui/material';
import UIUXImage1 from '../../assets/flight-search-ui-ux.png';
import UIUXImage2 from '../../assets/flights-results-ui-ux.png';
import UIUXImage3 from '../../assets/flight-details-ui-ux.png';
const TechLogPost4 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    Breakable Toy
                </Typography>
                <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                    Flight Search App with Amadeus API.
                </Typography>
            </div>
            <Container>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Typography variant="body1" paragraph>
                The task consisted of creating a full-stack flight search web application with React (TS), Spring, and Amadeus API. 
                </Typography>
                <Typography variant="h4">
                    Context
                </Typography>
                <Typography variant="body1" paragraph>
                   We were given the task to create a full-stack flight search app that gets the information from the Amadeus API. The 
                   user should be able to see flights according to searching criteria. The functional requirements were the following:
                </Typography>
                <List>
                    <ListItem>
                        <Typography>
                            1. Search for flights specifying different parameters (e.g. departure airport)
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            2. Display cards of flights showing information from it (e.g time of departure)
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            3. Ability to filter tasks by specifying the name, priority, and/or whether they are done or not.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            4. Ability to see details of a flight (e.g aircraft type)
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            5. Handle both one-way and two-way flights.  
                        </Typography>
                    </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                   The UI/UX requirements can be seen in the following image:
                </Typography>
                <img src={UIUXImage1} alt="UIUX home page" style={{ border: '5px solid #44197e' }}/>
                <img src={UIUXImage2} alt="UIUX results page" style={{ border: '5px solid #44197e' }}/>
                <img src={UIUXImage3} alt="UIUX details page" style={{ border: '5px solid #44197e' }}/>
                <br></br>
                <Typography variant="h4" paragraph>
                   Extras
                </Typography>
                <List style={{marginTop:"-30px"}}>
                    <ListItem>
                        <Typography>
                            1. The Amadeus API should be used, not the SDK 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            2. The deployment should be done with Docker images.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            3. No need for database. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            4. There should be 1 repository
                        </Typography>
                    </ListItem>
                </List>
                <Typography variant="h4">
                    Solution
                </Typography>
                <Typography variant="body1" paragraph>
                   The back-end portion was rather straight-forward this time too. I first used SpringInitializr again to set up most of the building part of the project. 
                   The next step was creating class and object that would fit the required specifications. In this case, I created several DTOs (Data Transfer Objects) to 
                   handle both, requests and responses to and from the API, as well as the redirection to the front-end. At this time of writing, I just have a client (instead 
                   of a repository) and a controller. My mentor gave me advice and recommended me to add interfaces and a service layer. I got a bit behind with development, 
                   so I focused on having something that works and then improve on that. At the time of writing, I have not added it, but by the demo, the improvements will be 
                   made. For testing, I used JUnit (for unit testing) and Mockito (mocking requests).
                </Typography>
                <Typography variant="body1" paragraph>
                    The front-end portion wasn't as complicated as last-time. I used mostly the same libraries that I used for the last project. This time, I separated the 
                    components from the start, rather than having a monolith and adding modularity later. I have the following components with rather self-explanatory names: 
                    FilterBox, FlightCard, FlightDetailsModal, FlightsResultsPage, HomePage, and NavBar. The HomePage shows the a box with FilterBox components that correspond 
                    to the filter criteria for flights and a search button below to search for flights with the filters. Once the user clicks the search button, the application 
                    moves to the FlightsResultsPage that has FlightCard components corresponding to the flights found. If a user clicks a FlightCard, a FlightDetailsModal will
                    show up, showing more detailed information about the flight, such as its segments. I used a modal instead of navigating to another page because I believe 
                    that seeing the details is often used for comparison purposes or preview before taking a decision. I believe this is easier with modals, as the user can 
                    see the details of different flights quicker. When thinking of scaling to having a booking service, I also think the modal is a better intermediary between 
                    the search page and the booking/checkout page.
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
                            • Showing Flight Details in Another Page (Alterative Solution): I believe a modal fits better, though navigating to a results page is also possible.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Add Interfaces (Improvement): Adding interfaces to the classes I implemented would be an improvement. As 
                            Amadeus' API proved to be unreliable, adding an interface layer would make changing the API service easier. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Add Pagination (Improvement): There could be a lot of available flights, so lowering the load on the client side is a good idea. It would 
                            also be cleaner. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            • Add Sorting (Improvement): Sorting would let the user find what he wants in an easier fashion.  
                        </Typography>
                    </ListItem>
                </List>
            </Container>
        </div>
        
    );
};

export default TechLogPost4;
