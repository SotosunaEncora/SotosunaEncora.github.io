import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom'
import Header from './Header';
import aboutPicture from '../assets/about-pic.jpg'; 

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
            <Dialog open={open} onClose={handleClose} PaperProps={{ style: { borderRadius: '10px', border: '5px solid #d5bff2' }}}>
                    <DialogTitle style={{textAlign: 'center' }}>About Me</DialogTitle>
                    <DialogContent>
                        <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <img src={aboutPicture} alt="Me holding sword and shield" style={{ maxWidth: '189px', height: 'auto', borderRadius: '10px', marginBottom: '20px'}}/>
                        <Typography>
                            Hello there! My name is Sotero and I am a recent CS graduate working currently as a technology consultant and participating in 
                            the Spark program at Encora. I am very interested in AI/ML and am studying to certify myself with cloud computing for
                            AI/ML applications. Apart from my coding life, I love sports, music, and literature. 
                        </Typography>
                        </div>
                    </DialogContent>
            </Dialog>

            <Container >
            <Link to="/blog-post-5" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #8fc641', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#8fc641' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Blog: Week 6
                            </Typography>
                            <Typography color="#a2d062">
                                Demo Presentation
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            <Link to="/blog-post-4" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #8fc641', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#8fc641' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Blog: Week 5
                            </Typography>
                            <Typography color="#a2d062">
                                Breakable Toy (Part II)
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="/tech-log-post-3" style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '20px 0', border: '5px solid #41c1ef', borderRadius:'10px', backgroundColor:'#f1eafb', color:'#41c1ef' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Tech Blog: Breakable Toy
                            </Typography>
                            <Typography color="##8ad8f5">
                                Full-Stack To-Do App
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
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

                <Link to="/tech-log-post-2" style={{ textDecoration: 'none' }}>
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
                <Link to="/tech-log-post-1" style={{ textDecoration: 'none' }}>
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
