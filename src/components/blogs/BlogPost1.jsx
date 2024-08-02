// src/BlogPost1.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const BlogPost1 = () => {
    return (
        <div>
            <Container>
            <Typography variant="h2" align="center" gutterBottom>
            Blog Post Title 1
            </Typography>
            <Typography variant="body1" paragraph>
            This is the content of Blog Post 1.
            </Typography>
        </Container>
        </div>
    );
};

export default BlogPost1;
