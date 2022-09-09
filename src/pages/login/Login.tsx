import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
// import { useDispatch } from 'react-redux'
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    // const dispatch = useDispatch();
    const [token, setToken] = useLocalStorage(''); //checar depois
    const [ userLogin, setUserLogin ] =useState<UserLogin>(
        {
            id: 0,
            name: '',
            email: '',
            password: '',
            // photo: '',
            // type: 'NORMAL',
        }
        );

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login('api/Usuarios/logar', userLogin, setToken)

                alert('Usuário logado com sucesso!'); //remover dps
            } catch(error){
                alert('Dados incorretos') //trocar por innerHTML
            }
        }

        useEffect(() => {
            if(token !=''){
                navigate('/home');
            }

        }, [token, navigate]);

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid xs={6} className='login__img'>

            </Grid>

            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text__bold'>Entrar</Typography>
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='btn__primary'>
                                    Entrar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='no__text__decorator'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='text__bold'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login