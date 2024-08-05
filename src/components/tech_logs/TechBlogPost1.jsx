import React from 'react';
import { Container, Typography } from '@mui/material';
import shouldSpreadAdditionalProps from '@mui/material/modern/utils/shouldSpreadAdditionalProps';
import useTouchRipple from '@mui/material/useTouchRipple/useTouchRipple';
import {withEmotionCache} from '@emotion/react';

const TechLogPost1 = () => {
    return (
        <div style={{ backgroundColor: '#bc9aff', minHeight: '100vh', padding: '20px' }}>
            <div style={{ backgroundColor: '#44197e', width: '100%', margin: '0', textAlign: 'center' }}>
                <Typography variant="h2" align="center" color="white" gutterBottom>
                    LeetCode
                </Typography>
                <Typography variant="h4" align="center" color="white" gutterBottom style={{paddingBottom: '10px'}}>
                    2670. Find the Distinct Array
                </Typography>
            </div>
            <Container>
                <Typography variant="h4">
                    Overview
                </Typography>
                <Typography variant="body1" paragraph>
                The task is to create a distinct difference array from a given zero-indexed integer array nums. The distinct difference array 
                diff is calculated such that for each index i, diff[i] is the difference between the number of distinct elements in the subarray 
                nums[0,...,i] and the number of distinct elements in the subarray nums[i+1,...,n-1]. This problem challenges one to efficiently 
                compute the number of distinct elements in varying subarrays and derive the distinct difference array based on those counts.
                </Typography>
                <Typography variant="h4">
                    Context
                </Typography>
                <Typography variant="body1" paragraph>
                You are given a 0-indexed array nums of length n
                </Typography>
                <Typography variant="body1" paragraph>
                The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elementas
                in the suffix nums[i+1, ..., n-1] subtracted from the number of distinct elements in the prefix nums[0, ..., i].
                </Typography>
                <Typography variant="body1" paragraph>
                Return the distinct difference array of nums.
                </Typography>
                <Typography variant="body1" paragraph>
                Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i &gt; j
                then nums[i, ..., j] denotes an empty subarray. 
                </Typography>
                <Typography variant="body1" paragraph>
                Input: nums = [1,2,3,4,5]
                </Typography>
                <Typography variant="body1" paragraph>
                Output: [-3,-1,1,3,5]
                </Typography>
                <Typography variant="h4">
                    Solution
                </Typography>
                <Typography variant="body1" paragraph>
                The solution I came up with is to iterate through nums and create two arrays of length n, one to keep track of distinct elements in the prefix, 
                and the other one to keep track of distinct elements in the suffix. We then iterate through both arrays at the same time and assign the difference 
                at each point to the output array.
                </Typography>
                <Typography variant="h4">
                    Alternative Solutions
                </Typography>
                <Typography variant="body1" paragraph>
                An alternative solution can be to nest loops and compare accordingly, but there would be lots of redundant operations and it wouldn't be as efficient. 
                </Typography>
            </Container>
        </div>
        
    );
};

export default TechLogPost1;
