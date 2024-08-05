import React from 'react';
import { Typography, Button } from '@mui/material';
import encoraLogo from '../assets/encora-logo.svg';
import profilePicture from '../assets/profile-pic.png';

const Header = ({ onOpen }) => (
  <div style={{ width: '100%', backgroundColor: '#44197e', padding: '20px 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={encoraLogo} alt="Encora's Logo" style={{ width: '50px', height: '50px' }} />
      <Typography variant="h2" style={{color:"#fff", textAlign:"center"}} gutterBottom>
        Sotero's Blog
      </Typography>
      <Button
        variant="contained"
        style={{
          color: '#44197e',
          backgroundColor: 'white',
          borderRadius: '50%',
          border: '4px solid #d5bff2',
          minWidth: '40px',
          minHeight: '40px',
          padding: '0'
        }}
        onClick={onOpen}
      >
      <img src={profilePicture} alt="Profile Picture" style={{ maxWidth: '40px', maxHeight: '40px', borderRadius: '50%', padding: '0', margin: '0'}}/>
      </Button>
    </div>
  </div>
);

export default Header;
