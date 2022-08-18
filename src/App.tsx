import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import dove from './Images/dove-24588.svg';
import roof from './Images/roofbackground.jpg';

function App() {
  return (
    <div className="App">
      <div style={{height:70, width:'100vw', background:'#202225', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 24px', boxSizing: 'border-box'}}>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img src={dove} alt={'dove'} style={{height: 50, marginRight: 16}} />
          <Typography color={'white'} variant={'h5'}>ASHES TO BEAUTY</Typography>
        </div>
      </div>
      <img src={roof} alt={'roofIMg'} style={{width: '100vw'}} />
    </div>
  );
}

export default App;
