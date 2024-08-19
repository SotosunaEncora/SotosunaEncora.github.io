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
                This week wasn't that challenging in comparison to the past weeks, as I feel comfortable speaking English and presenting my project. This 
                week's work consisted of preparing a presentation and explaining the project in the clearest way possible and refining some details. As the 
                deadline was extended, I focused on refactoring code and improving testing. 
            </Typography>
            <Typography variant="h4">
                Breakable Toy: Refining the Details
            </Typography>
            <Typography variant="body1" paragraph>
               By the start of this week, the web application was practically done. The basic requirements were covered and the tests were written. The issue 
               lied in the structure of the code, as I basically had a monolith on the front-end. My mentor gave me proper feedback on this and recommended me 
               to make the code more modular and do some slight changes with variable naming. I worked on refining those details and made the project clearer and 
               easier to read. Though I am the only developer in this case, I believe that doing this will build good habits when collaborating with others in the 
               future. 
            </Typography>
            <Typography variant="h4">
                Demo Presentation
            </Typography>
            <Typography variant="body1" paragraph>
                I must admit that I was a bit nervous before the presentation, I believe it's only normal because of the situation, but I think I did okay. I 
                felt comfortable with what I did and with the language. This is not to say that there isn't any room for improvement. I think I could have done 
                better slides and given more proper context. Adding a script or at least some proper outline would have also been better. 
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
                I am still behind with KnowBe4 trainings, and I will be sure to catch up this week. Unfortunately, it happened again.
            </Typography>
            <Typography variant="h4">
                Chosen Certification
            </Typography>
            <Typography variant="body1" paragraph>
                I decided to go for the ML Engineer - Associate Certification from AWS. Though I want to remain skilled and be a proper Software Engineer, my main interest 
                still is AI/ML, so I want to start moving in that direction.  
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • I learned of the importance of Separation of Concerns 
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • I am no longer a Java hater, I am now a disliker
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Still need to work on KnowBe4 trainings
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • I want to move towards AI/ML
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
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
                Refined the web application and did a demo presentation on it. Received feedback for improving.   
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost5;
