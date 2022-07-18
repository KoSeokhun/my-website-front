import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { body2 } from '../../styles/Body2';
import { useForm } from 'react-hook-form';
import { validation } from '../../styles/Validation';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/features/user/userSlice';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Iyaba's Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    // import useDispatch hook.
    const dispatch = useDispatch();

    // import useNavigate hook.
    const navigate = useNavigate();

    // import React Hook Form.
    const {
        register,
        handleSubmit,
        formState: {
            isDirty,
            errors
        },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // prevent duplicate submit.
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // onSubmit function.
    const onSubmit = data => {
        setIsSubmitted(true);   

        // send data.
        const res = dispatch(signUp(data));
       
        console.log("결과 : ", res?.payload?.isSucceeded);
        if (res?.payload?.isSucceeded)
            navigate('/ssss');
        else
            navigate('/nnnn');
        // 여기서 다시 시작.
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    {...register(
                                        "email",
                                        {
                                            required: "Email is required.",
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Please enter a valid email address."
                                            }
                                        },
                                    )}
                                />
                                <Box style={validation}>{ errors.email?.message }</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register(
                                        "password",
                                        {
                                            required: "Password is required.",
                                            pattern: {
                                                value: /^[A-Za-z\d!@#$%^&*()]{8,30}$/,
                                                message: "password must match /^[A-Za-z\\d!@#$%^&*()]{8,30}$/ regular expression."
                                            }
                                        }
                                    )}
                                />
                                <Box style={validation}>{ errors.password?.message }</Box>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!isDirty || isSubmitted }
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/LogIn" style={body2}>
                                    {"Already have an account? Login."}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}