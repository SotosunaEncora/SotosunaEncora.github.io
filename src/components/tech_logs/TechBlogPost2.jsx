import React from 'react';
import { Container, Typography } from '@mui/material';

const TechLogPost2 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    LeetCode
                </Typography>
                <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                    123. Best Time to Buy and Sell Stock III
                </Typography>
            </div>
            <Container>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Typography variant="body1" paragraph>
                The task equires determining the maximum profit achievable with at most two stock transactions, given an array prices 
                where each element represents the price of a stock on a given day. The problem involves finding the optimal points to 
                buy and sell the stock to maximize profit while allowing for at most two buy-sell transactions. This problem tests the 
                ability to apply dynamic programming to track and combine profits from different segments of the array to achieve the 
                maximum possible profit.
                </Typography>
                <Typography variant="h4">
                    Context
                </Typography>
                <Typography variant="body1" paragraph>
                    You are given an array prices where prices[i] is the price of a given stock on the ith day.
                </Typography>
                <Typography variant="body1" paragraph>
                    Find the maximum profit you can achieve. You may complete at most two transactions.    
                </Typography>
                <Typography variant="body1" paragraph>
                    Note: You may not engage in multiple transaction simultaneously (i.e. you must sell the stock before you buy again).    
                </Typography>
                <Typography variant="body1" paragraph>
                    Input: prices = [3,3,5,0,0,3,1,4]    
                </Typography>
                <Typography variant="body1" paragraph>
                    Output: 6    
                </Typography>
                <Typography variant="h4">
                    Solution
                </Typography>
                <Typography variant="body1" paragraph>
                    The key to solving this problem is understanding the basics of it and building from the easier variants of the problem. The
                    first iteration of the problem consists of finding the max profit of a single transaction. For this, we can just keep track
                    of the minimum value we encounter, calculate the profit we get as we iterate through the array, and updating the maximum
                    profit every time we find a better transaction. 
                </Typography>
                <Typography variant="body1" paragraph>
                    Now, how do we build from taht? As we have the possibility to do two transactions in this scenario, we can "split" the array
                    into two and use the solution from the easier problem. This will be by looking forwards for one array (one transaction in the 
                    future) and backwards for the other (one transaction in the past). We can keep track of the max profit for each approach and 
                    add them togeter to get the overall profit of doing two transactions at most. 
                </Typography>
                <Typography variant="h4">
                    Alternative Solutions
                </Typography>
                <Typography variant="body1" paragraph>
                    As almost always, the first solution that comes to mind is the brute force solution, which in this case, is nesting loops and 
                    adding the max profit from two transactions. Though conceptually simple and easy to understand and implement, it is computationally 
                    complex and inefficient. 
                </Typography>
            </Container>
        </div>
        
    );
};

export default TechLogPost2;
