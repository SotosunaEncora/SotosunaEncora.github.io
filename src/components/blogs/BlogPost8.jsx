import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost8 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 9
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                Demo Presentation (Postponed)
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
            Though the main purpose of this week's demo was to make and present the project, most of this week's work was fixing bugs and adjusting the application 
            to the API's data. Fortunately, most were quick fixes. 
            </Typography>
            <Typography variant="h4">
                Breakable Toy II: Flight Search with Amadeus API
            </Typography>
            <Typography variant="body1" paragraph>
            The bugs I encountered were in two main aspects: (1) handling data that's different to the model and (2) handling return flights. This was because I worked
            primarily with the example provided by Amadeus, which didn't account for some special cases. To solve these problems, I changed the parsing logic a bit in 
            the back-end to account for these cases. Some light adjustments were needed in the front-end too. 
            </Typography>
            <Typography variant="body1" paragraph>
            Apart from fixing bugs, I added some improvements. I added the interfaces, as my mentor advised me. I also fixed some styling, as some things weren't shown 
            in the appropriate format. 
            </Typography>
            <Typography variant="h4">
                Demo Presentation
            </Typography>
            <Typography variant="body1" paragraph>
            This week's work also included a presentation. I followed the same template but added some slides that I missed last time and some that explain changes I 
            made since the last delivery. I will present later today. I'm feeling a bit nervous, but nothing out of the ordinary. I feel confident with my communication 
            skills, though I'm not entirely satisfied with my work. I think it can be much better...
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
            I finished some courses on the weekend and am almost done with these. 
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • There are still things to be done in the app
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Almost done with KnowBe4 trainings
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
            <ListItem>
                    <Typography>
                        • Present Demo
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
                Fixed and improved some things on the app and will present the demo soon. 
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost8;
