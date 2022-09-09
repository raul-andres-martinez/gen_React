import React from "react";
//import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuIcon } from '@material-ui/core';
//import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../../../Root.css'

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            {/* className='cursor' */}
            <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                Sair
              </Typography>
            </Box>
            </Link>    
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
