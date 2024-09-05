import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost7 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 8
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                Breakable Toy II (Part II)
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
            This week was very challenging. I focused on the front-end side of the app and the integration with the back-end. Testing whether information was parsed 
            correctly was very challenging, as the API service didn't work for most of the week (it only was up Monday). It also consisted of refining some stuff from 
            the back-end to ensure that everything that the front-end needed to display was covered.  
            </Typography>
            <Typography variant="h4">
                Breakable Toy II: Flight Search with Amadeus API
            </Typography>
            <Typography variant="body1" paragraph>
            The front-end development was a deep dive into React with TypeScript. I made significant progress in component structuring, specifically focusing on how to 
            efficiently pass data between components. Material UI played a key role in the design and responsiveness of the interface. The most significant part was 
            handling form elements like date pickers, autocomplete fields, and selection fields, ensuring they were both user-friendly and functionally robust. Fortunately, 
            Material UI already had those components and I just needed to add some things so that it can have information from the API. This time around, I focused on modularity
            from the start and added important details I missed when I did my previous delivery.
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
            I focused very heavilty on this project, so I couldn't manage to finish the courses, but now that the Demo is ahead, I can expect this week's workload to be a bit 
            lighter. This means that the courses will be finished next week. 
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • Working with Amadeus API has been challenging, as the service wasn't so reliable
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Material UI keeps being a life saver
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Still need to work on KnowBe4 trainings
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
            <ListItem>
                    <Typography>
                        • Prepare Demo Presentation
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Complete all courses on KnowBe4
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                TL;DR
            </Typography>
            <Typography>
                Finished web-application with a bit of uncertainty, as I'm not entirely sure if it will work since I couldn't test with the API, maybe I missed something...
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost7;
