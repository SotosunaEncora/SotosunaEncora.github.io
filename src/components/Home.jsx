import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom'
import Header from './Header';

const Home = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Header onOpen={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>About Me</DialogTitle>
                <DialogContent>
                    <Typography>
                    This is some information about me.
                    </Typography>
                </DialogContent>
            </Dialog>

            <Container >
                <Link to="/blog-post-3" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #8fc641', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#8fc641' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Blog: Week 4
                            </Typography>
                            <Typography color="#a2d062">
                                Breakable Toy (Part I)
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/tech-blog-post-2" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #41c1ef', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#41c1ef' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Tech Blog: LeetCode
                            </Typography>
                            <Typography color="#8ad8f5">
                                123. Best Time to Buy and Sell Stock III
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="/tech-blog-post-1" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #41c1ef', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#41c1ef' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Tech Blog: LeetCode
                            </Typography>
                            <Typography color="#8ad8f5">
                                2670. Find the Distinct Array
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/blog-post-2" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #8fc641', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#8fc641' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Blog: Week 3
                            </Typography>
                            <Typography color="#a2d062">
                                LeetCode Challenge
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

                <Link to='/blog-post-1' style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #8fc641', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#8fc641' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Blog: Weeks 1 & 2
                            </Typography>
                            <Typography color="#a2d062">
                                Onboarding
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Container>
        </div>
    );
};

export default Home;
