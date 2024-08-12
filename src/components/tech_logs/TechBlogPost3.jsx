import React from 'react';
import { Container, Typography } from '@mui/material';

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
