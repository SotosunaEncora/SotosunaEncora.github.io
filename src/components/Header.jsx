import React from 'react';
import { Typography, Button } from '@mui/material';
import encoraLogo from '../assets/encora-logo.svg';

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
          backgroundColor: '#bc9aff',
          borderRadius: '50%',
          minWidth: '40px',
          minHeight: '40px'
        }}
        onClick={onOpen}
      >
        S
      </Button>
    </div>
  </div>
);

export default Header;
