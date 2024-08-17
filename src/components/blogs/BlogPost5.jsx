import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost5 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 6
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                Demo Presentation
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
                This week though challenging, wasn't as bad as last week. I turned it up a notch and had a much better performance. 
                Time boxing really helped me focus on the task at hand and do the work I was supposed to do properly. I also learned
                a lot of new things and put that new knowledge in action. 
            </Typography>
            <Typography variant="h4">
                Breakable Toy: Front-End with React and MUI
            </Typography>
            <Typography variant="body1" paragraph>
                As I wrote last week, I used MUI and left most of the front-end done and functional with local variables and data. The 
                missing piece was a connection to the back-end (which I hadn't developed at the time). For this task, I used axios, as I 
                had used that library before, though with other back-end technologies. The implementation was the same as before and I didn't 
                struggle with it too much. I encountered a bug with the GET request with empty parameters, but I fixed it with an if-statement. 
                I don't know if that's good but it worked. I guess I'll wait for my mentor to give me feedback on that and teach me a bit.
            </Typography>
            <Typography variant="body1" paragraph>
                P.S: I later removed the if-statement and added more parameters for the sorting. I also received feedback from my mentor and I guess that he'll
                help me add more modularity to the code. 
            </Typography>
            <Typography variant="h4">
                Breakable Toy: Back-End with Java and Spring
            </Typography>
            <Typography variant="body1" paragraph>
                This was the focus on the week. I did some tutorials and tried to understand the basics so that I can build something fast. I 
                followed the basic structure of the tutorials and focused on understanding what each module did. In this case, I learnt about the 
                repository class, the service class, and the controller class. I understood that the repository is the layer that works directly with the database, the 
                service is the layer that implements the logic and handling of the data, and the controller is the layer that handles HTTP requests.
            </Typography>
            <Typography variant="body1" paragraph>
                I thought that was all I needed to build the back-end and make it useful, but I was wrong. When I built it and did some tests, I tried 
                to connect it to the front-end, but there were some security issues, as I got error 403 when debugging. I looked into it and added two security config
                files that fixed the situation. Again, this might not be the best implementation and hope to learn more, but it works for the breakable toy concept. 
            </Typography>
            <Typography variant="h4">
                Testing
            </Typography>
            <Typography variant="body1" paragraph>
                At the time of writing I have only done proper testing on the back-end. I found and decided to use JUnit and Mockito as my tools for the unit tests for the 
                back-end. I believe those were pretty straight-forward. Just simulate and do mock requests then assserting that the data was updated following such requests. 
                I thought that the process would be the same with React and jest and mock axios, but I have faced issues that I haven't been able to solve yet. I underestimated 
                this task. 
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
                I am still behind with KnowBe4 trainings, and I will be sure to catch up this week. 
            </Typography>
            <Typography variant="h4">
                Performance Improvements    
            </Typography>
            <Typography variant="body1" paragraph>
                Timeboxing has been a bit of a game changer, but I still need to be better. Some external issues have also risen that have made organizing and catching up more difficult
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • SpringInitializr is a great tool
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Java isn't that bad at all...
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Still need to work on KnowBe4 trainings
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Underestimated testing, thought it would be much easier
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Need to focus and perform better.
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • Finish To-Do App (front-end testing)
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
                <ListItem>
                    <Typography>
                        • Choose certification
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                TL;DR
            </Typography>
            <Typography>
                Completed web app (requirements-wise) but I am still missing tests for the front-end.  I still need to improve on my time managmenet skills.  
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost5;
