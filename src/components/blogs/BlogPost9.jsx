import React from 'react';
import { Container, Typography, List, ListItem} from '@mui/material';

const BlogPost9 = () => {
  return (
    <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
        <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
            <Typography variant="h2" align="center" color="white" gutterBottom>
                Week 10
            </Typography>
            <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                AWS (Part I) + Demo 
            </Typography>
        </div>
        <Container>
            <Typography variant="h4">
                Overview
            </Typography>
            <Typography variant="body1" paragraph>
            This week, apart from the demo, I dedicated time to following Stephane Maarek's Udemy course for AWS Solutions Architect. Though I have some familiarity with AWS concepts, I wanted to solidify my understanding of core services and fundamentals like Identity and Access Management (IAM), the AWS Command Line Interface (CLI), and Elastic Compute Cloud (EC2). Revisiting these concepts has given me a refreshed perspective as I continue preparing for the AWS Solutions Architect certification.
            </Typography>
            <Typography variant="h4">
                Demo
            </Typography>
            <Typography variant="body1" paragraph>
            Though I think I had a better presentation and preparation compared to last time, I think I did a bit worse, as I was a bit careless with an addition I made to my code. Said mistake made me nervous and unsure about my project. Though I could answer questions surely (since I understand my project very well), I think my work was not good enough and didn't live up to my standards. 
            </Typography>
            <Typography variant="h4">
                AWS Solution Architect
            </Typography>
            <Typography variant="body1" paragraph>
            I chose the AWS Solutions Architect certification path because it offers a comprehensive understanding of AWS services and their applications. It's versatile, providing knowledge that spans across infrastructure, security, and deployment strategies, making it an ideal certification for someone who wants to have a strong foundational grasp of AWS and the cloud. Plus, it equips me with insights that can be applied to various roles, ensuring that I stay adaptable in my career.
            </Typography>
            <Typography variant="h4">
                IAM in AWS
            </Typography>
            <Typography variant="body1" paragraph>
            Identity and Access Management (IAM) is a fundamental service in AWS that controls access to resources securely. While I had previous exposure to IAM, the course covered essential topics such as policies, roles, and groups. I spent time revisiting the core concept of least privilege, ensuring that users have the minimum necessary permissions to perform their tasks. This section emphasized how crucial IAM is for securing AWS resources properly, especially in a production environment.
            </Typography>
            <Typography variant="h4">
                AWS CLI
            </Typography>
            <Typography variant="body1" paragraph>
            The AWS CLI allows users to interact with AWS services through the command line, which can greatly streamline repetitive tasks. I was already familiar with the AWS CLI but decided to refresh my understanding of how to configure it for various regions, manage profiles, and use it to perform administrative tasks. Stephane Maarek’s approach to explaining the commands made it easier to navigate AWS services efficiently, and I practiced different commands to automate tasks that would otherwise be manual via the console.
            </Typography>
            <Typography variant="h4">
                EC2
            </Typography>
            <Typography variant="body1" paragraph>
            Elastic Compute Cloud (EC2) is the backbone of many cloud infrastructures. In this module, I relearned the fundamentals of launching, configuring, and securing EC2 instances. While I have experience setting up EC2 instances in the past, reviewing the different instance types and their appropriate use cases helped reinforce my knowledge. I also revisited security groups and key pairs, essential for ensuring instances are properly secured.
            </Typography>
            <Typography variant="h4">
                Key Takeaways
            </Typography>
            <List>
                <ListItem>
                    <Typography>
                        • Managed time effectively between work and studying, but juggling multiple things remains challenging.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • The course content is structured well for both beginners and those looking to revisit key AWS concepts.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • The hands-on labs in IAM, AWS CLI, and EC2 were valuable, even though I already had some exposure.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • Relearning fundamentals proved beneficial as it filled small gaps in my knowledge.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        • I enjoyed the pace and simplicity of the explanations, making even complex topics feel approachable.
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                Next Steps:
            </Typography>
            <List>
            <ListItem>
                    <Typography>
                        • Continue with my preparation for the AWS Certification
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h4">
                TL;DR
            </Typography>
            <Typography>
            This week, I focused on the fundamentals of AWS according to Stephane Maareks Udemy course for AWS Solutions Architect.
            </Typography>
        </Container>
    </div>
      
  );
};

export default BlogPost9;
