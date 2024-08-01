import React from 'react';
import { Container, Typography } from '@mui/material';

const BlogPost2 = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Blog Post Title 2
      </Typography>
      <Typography variant="body1" paragraph>
        This is the content of Blog Post 2.
      </Typography>
    </Container>
  );
};

export default BlogPost2;
