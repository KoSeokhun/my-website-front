import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { body2 } from '../../styles/Body2';
import { useForm } from 'react-hook-form';
import { validation } from '../../styles/Validation';

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

export default function SignInSide() {
    // import React Hook Form.
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        defaultValues: {
            email: window.localStorage?.getItem("email"),
            password: "",
        },
    });

    // get Remember me.
    const [remember, setRemember] = React.useState(
        window.localStorage?.getItem("remember") ? true : false
    );

    // checkbox handler.
    const handleChange = (e) => setRemember(e.target.checked);

    // prevent duplicate submit.
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // onSubmit function.
    const onSubmit = data => {
        setIsSubmitted(true);

        // set Remember Me.
        if (data.remember) {
            window.localStorage.setItem("remember", "true");
            window.localStorage.setItem("email", data.email);
        } else {
            window.localStorage.removeItem("remember");
            window.localStorage.removeItem("email");
        }

        // send data.
        // dispatch()

    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            <Box style={validation}>{errors.email?.message}</Box>
                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register(
                                    "password",
                                    {
                                        required: "Password is required.",
                                        minLength: {
                                            value: 4,
                                            message: "Minimum length is 4."
                                        }
                                    }
                                )}
                            />
                            <Box style={validation}>{errors.password?.message}</Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                        onChange={handleChange}
                                        checked={remember}
                                    />}
                                label="Remember me"
                                {...register("remember")}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isSubmitted}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <NavLink to="#" style={body2}>
                                        Forgot password?
                                    </NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink to="/SignUp" style={body2}>
                                        {"Don't have an account? Sign Up"}
                                    </NavLink>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}