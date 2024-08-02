import React from 'react';
import { Container, Typography } from '@mui/material';

const BlogPost2 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    Week 3
                </Typography>
            </div>
            <Container>
                <Typography variant="h4">
                    Day 1
                </Typography>
                <Typography variant="body1" paragraph>
                    As I noticed that just leaving everything to the end of the week 
                    and trying to remember what I did wasn't effective, I've decided to
                    keep a daily log of the things I do so that it becomes easy to 
                    reflect and write a proper weekly journal.
                </Typography>
                <Typography variant="body1" paragraph>
                    Today I read the tasks
                    for the week and must admit that I wasn't expecting to see LC Hard problems.
                    I am very rusty, but I like those kind of exercises, I will try to solve
                    some problems to warm up before going at them.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am also trying to get ahead on the certification and learning
                    ahead of time. I am planning on doing the AWS Machine Learning Specialty, 
                    though I'm starting with an associate-level course to have a solid foundation.
                    I'm nout sure if I will be prepared enough for the ML certification, but if not,
                    at least I will get the Developer one. Today I learned about Load Balancers in AWS.
                </Typography>
                <Typography variant="h4">
                    Day 2
                </Typography>
                <Typography variant="body1" paragraph>
                    I continued with DSA practice with videos and some problems on
                    Leetcode. I also learned about Auto Scaling Groups in AWS. 
                </Typography>
                <Typography variant="h4">
                    Day 3
                </Typography>
                <Typography variant="body1" paragraph>
                    Today I couldn't do much and even missed some onboarding meetings,
                    as I attended a conference at Google about generative AI. Though it 
                    was very business-orientated and I didn't learn much about the 
                    technical aspect and implementation methods, it was very interesting
                    to see what Google has to offer in terms of AI solutions.
                </Typography>
                <Typography variant="h4">
                    Day 4
                </Typography>
                <Typography variant="body1" paragraph>
                    Today I solved the LC Hard problem by scaling the solution of 
                    easier variants of the problem. It was a fun exercise. I also learned
                    about relational databases and Aurora for AWS. 
                </Typography>
                <Typography variant="h4">
                    Day 5
                </Typography>
                <Typography variant="body1" paragraph>
                    Today, I 'translated' the solution I did from Python to Go and solved the 
                    individual problem assignment. I chose a problem that had a similar solution
                    to the one I already did. 
                </Typography>
                <Typography variant="body1" paragraph>
                    I also attended the 'Newbie Friday' event. I had fun. Shame I had to leave early.
                </Typography>
                <Typography variant="h4">
                    Weekend
                </Typography>
                <Typography variant="body1" paragraph>
                    I know I shouldn't do much on weekends and try to rest, but I didn't organize properly. It's okay, 
                    as the tasks I have left are just uploading the stuff I already did rather than doing everyting. 
                </Typography>
                <Typography variant="h4">
                    Overall Conclusions:
                </Typography>
                <Typography>
                    I am having a good time and learning a lot. I am excited for what is to come and I am sure that I will
                    be ready for it. 
                </Typography>
                <Typography variant="body1">
                    P.S: I am still working on a good system to be more efficient. 
                </Typography>
                <Typography variant="body1">
                    P.P.S: This is still a work in progress, the plain html will change soon, I promise.
                </Typography>
                <Typography variant="body1">
                    P.P.P.S: It did change, see?
                </Typography>
            </Container>
        </div>
        
    );
};

export default BlogPost2;
