import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';
import '../../../Root.css'
//import { useSelector } from 'react-redux';
//import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    /*const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );*/

    var footerComponent;

    //if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="footer">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="footer__text">Me siga! </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="social" />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="social" />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="social" />
                        </a>
                    </Box>
                
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" className="text" >Feito com &#9829; por Raul</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    //}

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;