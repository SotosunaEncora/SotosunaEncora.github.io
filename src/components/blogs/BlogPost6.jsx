import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost6 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 7
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                Breakable Toy II (Part I)
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
            This week was a bit more challenging as I continued to balance my project work with additional responsibilities. While I've made some progress, 
            there's still a lot to be done, especially on the front-end of the application. I also spent time catching up on mandatory trainings, which added to the workload.
            </Typography>
            <Typography variant="h4">
                Breakable Toy II: Flight Search with Amadeus API
            </Typography>
            <Typography variant="body1" paragraph>
            This week, I focused on building a web application using React (Typescript) and Spring, with the Amadeus API integrated to display flight information 
    based on filters. Most of the back-end work (and Docker set up) is complete, and I plan to shift my focus towards completing the front-end. There's still a lot to refine 
    in terms of design and functionality, but the core structure is taking shape. I aim to finish the project soon, ensuring it meets all the requirements.
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
            I'm still behind on KnowBe4 trainings, but I managed to complete a few courses this week. I focused on compliance training, particularly on handling sensitive 
            information, and development training, which covered secure application development practices. I need to make sure I finish the remaining courses by the end of next week.
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • Relearning Docker has been exciting, very cool and useful
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • I'm starting to actually like Java...
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
                        • Finish Flight Search App
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Complete all courses on KnowBe4
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Use timeboxing more thoroughly and apply the pomodoro technique for better efficiency and performance
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                TL;DR
            </Typography>
            <Typography>
                Started with the back-end this time around with the web application and relearned some things. 
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost6;
