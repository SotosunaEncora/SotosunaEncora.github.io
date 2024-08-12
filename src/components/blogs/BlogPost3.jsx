import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost2 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 4
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                Breakable Toy (Part I)
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
                This has certainly been the most challenging week so far. Web development, though fun, isn't my strong suit, as I prefer
                other areas of development. I still believe some basic abilities of web development are essential and the honing of those
                skills has been the focus of the week. 
            </Typography>
            <Typography variant="h4">
                Catching Up: Updating the Site for the Blog
            </Typography>
            <Typography variant="body1" paragraph>
                I got a bit behind with the blog and my previous submissions were incomplete. I had plain HTML text and didn't do the proper
                technical blogs that were required. Part of this weeks' work and learning, was completing those pending issues and catching up to 
                my peers regarding that. I chose to do a website because I wanted to practice and become better at web development by getting my 
                hands dirty with React and GitHub pages. 
            </Typography>
            <Typography variant="body1" paragraph>
                I was already familiar with React, so it was a bit easy to create the project and the overall structure, but I am a complete 
                beginner when it comes to design and aesthetics. While looking for resources and libraries to facilitate the design, I discovered 
                Material UI and chose to use it. I just read the documentation and looked for the components I needed and applied them. They have 
                lots of resources and very easy to use. 
            </Typography>
            <Typography variant="body1" paragraph>
                The biggest challenge with this was deploying the project to GitHub pages. I followed the instructions on GitHub, looked for posts
                on StackOverflow, and videos on YouTube but for some reason, nothing worked properly for me. I actually messed up the repository and 
                had to do a full reset and delete various branches on the way. What finally worked, was thinking about the solution by myself rather
                than following steps blindly. 
            </Typography>
            <Typography variant="h4">
                Breakable Toy: Front-End with React and MUI
            </Typography>
            <Typography variant="body1" paragraph>
                The challenge of building the public blog with React proved useful for the To-Do App task, as Material UI can be used for that task too.
                As I'm more familiar with that aspect web development, I worked on it during the week and I'm 95% done with it. It wasn't much of a struggle.
                I'm still missing the code for communicating with a back-end service, which I haven't finsihed yet...
            </Typography>
            <Typography variant="h4">
                Breakable Toy: Back-End with Java and Spring
            </Typography>
            <Typography variant="body1" paragraph>
                For the back-end of the web application, we have been tasked to do it with Java and Spring. To be honest, I have an irrational aversion towards Java 
                and have been actively avoiding it. There's no reason, that's why its irrational. I have been watching tutorials to learn by analogy and build from 
                there. I haven't delved to deep into the theory yet, as I think it's more productive to get my hands dirty with it. I haven't started coding that
                for the To-Do app yet, but I have completed some tutorials and I think that I understand enough to build the back-end successfully.  
            </Typography>
            <Typography variant="h4">
                Feedback and Focus
            </Typography>
            <Typography variant="body1" paragraph>
                Upon receiving feedback, I realized that I haven't been performing up to my standards. I was looking too far into the future and prepared for an AWS 
                certification rather than focusing on the week's tasks and submitting everything on time. I think the criticism I received was fair and I need to level 
                up a bit. It doesn't feel so good to be told that you aren't performing well enough, but I am confident in my skills and fully believe that I can turn 
                things around and be much better with better effort, focus, and organization. 
            </Typography>
            <Typography variant="h4">
                KnowBe4 Trainings
            </Typography>
            <Typography variant="body1" paragraph>
                To be honest, I didn't properly assign time to this task and can't comment on it too much.
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • MUI is a great resource and learning to use it has saved me a lot of time.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Can't avoid Java forever. 
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • It's more productive for me to focus on the practice rather than theory.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • It's important to think about what one's doing while following a tutorial and understand what's going on, rather than just following steps blindly.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Need to focus and perform better.
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • Finish To-Do App (mostly missing the back-end portion)
                    </Typography>
                </ListItem>
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
                Learned a lot about web development tools and how to use them.  I also received feedback and need to focus and level up my performance. 
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost2;
