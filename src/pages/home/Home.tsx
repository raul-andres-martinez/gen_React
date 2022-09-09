import React from "react";
import { Typography, Grid, Button} from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import homeImg from '../img/home-img.svg';
import './Home.css';
import '../../Root.css'

function Home() {
    //fragment pra retornar uma lista de elementos 
    return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom component="h3" className='title' >Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom component="h5" className='title' >expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
              <Button variant="outlined" className="btn__outlined">Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className='posts'>
        </Grid>
      </Grid>
    </>
    );       
}

export default Home;
