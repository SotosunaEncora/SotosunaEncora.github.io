import React from 'react';
import { Container, Typography } from '@mui/material';

const BlogPost1 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    Weeks 1 & 2
                </Typography>
            </div>
            <Container>
                <Typography variant="body1" paragraph>
                    These past two weeks at my internship have been relatively light and enjoyable. The team welcomed me warmly 
                    my first day, and I've enjoyed learning about the company. Everyone here is super cool and it's been inspiring 
                    to be surrounded by talented people.
                </Typography>
                <Typography variant="body1" paragraph>
                    During the first weeks, we have been tasked to dive into habit building and productivity. Though passionate about
                    self-improvement and familiar with most of the material, I still have learned new things. Having some refreshers
                    also doesnt' hurt. 
                </Typography>
                <Typography variant="body1" paragraph>
                    I have also been doing the compliance training (and discovered later on that I am missing some material). The 
                    material is standard and some were very interesting. I personally have enjoyed the Teams meetings more. 
                </Typography>
                <Typography variant="body1" paragraph>
                    Getting to know my colleagues has been a highlight. Everyone is so supportive and willing to share their knowledge. 
                    This collaborative environment has made the learning process enjoyable and motivating.
                </Typography>
                <Typography variant="body1" paragraph>
                    My key takeaway from these past weeks is that I need to adjust some things and improve my planning and timeboxing abilites
                    so that I can have something to write about, as this text has been written without notes. I need to implement a better system,
                    probably daily logs. 
                </Typography>
            </Container>
        </div>
        
    );
};

export default BlogPost1;
