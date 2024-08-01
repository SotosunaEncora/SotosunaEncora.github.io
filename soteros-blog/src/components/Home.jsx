// src/Home.jsx
import React from 'react';
import { Container, Typography, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Sotero's Spark Blog
      </Typography>
      <Card style={{ margin: '20px 0' }}>
        <CardContent>
          <Link to="/soteros-blog/blog-post-1" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" component="h2">
              Blog Post Title 1
            </Typography>
            <Typography color="textSecondary">
              Blog Post Excerpt 1
            </Typography>
          </Link>
        </CardContent>
      </Card>
      <Card style={{ margin: '20px 0' }}>
        <CardContent>
          <Link to="/soteros-blog/blog-post-2" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" component="h2">
              Blog Post Title 2
            </Typography>
            <Typography color="textSecondary">
              Blog Post Excerpt 2
            </Typography>
          </Link>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          borderRadius: '50%',
          minWidth: '40px',
          minHeight: '40px'
        }}
        onClick={handleClickOpen}
      >
        i
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>About Me</DialogTitle>
        <DialogContent>
          <Typography>
            This is some information about me.
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Home;
