import React, { ChangeEvent, useEffect, useState } from 'react';
import './SignUser.css'
import '../../Root.css'
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { register } from '../../services/Service';

function SignUser() {

        let navigate = useNavigate();
        const [confirmPassword,setConfirmPassword] = useState<String>("")
        const [user, setUser] = useState<User>(
            {
                id: 0,
                name: '',
                email: '',
                password: '',
                // photo: '',
                // type: ''
            })
    
        const [userResult, setUserResult] = useState<User>(
            {
                id: 0,
                name: '',
                email: '',
                password: '',
                // photo: '',
                // type: ''
            })
    
        useEffect(() => {
            if (userResult.id != 0) {
                navigate('/login')
            }
        }, [userResult, navigate])
    
    
        function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>){
            setConfirmPassword(e.target.value)
        }
    
    
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
    
        }
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            if(confirmPassword == user.password){
            register(`/Usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
            }else{
                alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
            }
        }
    return(
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '100vh' }}>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text__bold'>Cadastrar</Typography>
                            <TextField value={user.name} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
                            <TextField value={user.email} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
                            <TextField value={user.password} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                            <TextField value={confirmPassword} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)} id='confirmPassword' label='Confirmar senha' variant='outlined' name='confirmPassword' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='no__text__decorator'>
                                    <Button variant='contained' color='primary' className='btn__secondary' style={{marginRight: '20px'}}>
                                        Voltar
                                    </Button>
                                </Link>
                                    <Button type='submit' variant='contained' color='primary' className='btn__primary'>
                                        Confirmar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                
                <Grid item xs={6} alignItems='center' className='sign__img' />

            </Grid>
        </>
    )
}

export default SignUser;