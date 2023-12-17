import React, {FC, Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Paper} from "@mui/material";
import {joiResolver} from '@hookform/resolvers/joi';
import {useTranslation} from "react-i18next";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {RouterEndpoints} from "../../routes";
import {ILoginUser} from "../../interfaces";
import {authActions} from "../../Store/slice";
import {authValidator} from '../../validators';


const SignIn: FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error} = useAppSelector(state => state.authReducer);
    const {
        handleSubmit,
        formState: {errors, isValid},
        register,
        reset,
    } = useForm<ILoginUser>(
        {mode: 'all', resolver: joiResolver(authValidator)}
    );

    const login: SubmitHandler<ILoginUser> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login(user));

        if (requestStatus === 'fulfilled') {
            navigate(`/${RouterEndpoints.about}`);
            reset()
        }
    };


    return (
        <Fragment>
            <Paper elevation={24} sx={{
                marginTop: 3,
                paddingTop: 1,
                maxWidth: 1 / 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('sign_in')}
                </Typography>
                <Box
                    px={3}
                    py={2}
                    component="form"
                    sx={{
                        maxWidth: '100%'
                    }}
                >
                    <Grid container spacing={1}>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="email"
                                label={t('auth.email')}
                                fullWidth
                                margin="dense"
                                {...register('email')}
                                error={!!errors.email}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="password"
                                label={t('auth.password')}
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('password')}
                                error={!!errors.password}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box mt={3}>
                        <Button
                            disabled={!isValid}
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            onClick={handleSubmit(login)}
                        >
                            {t('sign_in')}
                        </Button>
                    </Box>

                    <Typography
                        variant="inherit"
                        sx={{
                            color: 'warning.main',
                            fontSize: 16,
                        }}>
                        {error?.detail}
                    </Typography>

                </Box>

                <Grid item
                      container
                      sx={{
                          m: 1,
                          p: 1,
                      }}
                      xs={12} sm={12}
                >
                    <Grid
                        item sm={4}
                    >
                        <Link href="#" variant="body2">
                            {t('auth.forgot_password')}
                        </Link>
                    </Grid>
                    <Grid
                        item sm={8}
                    >
                        <Link href={`/${RouterEndpoints.sign_up}`} variant="body2">
                            {t('auth.sign_up')}
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    );
}
export {SignIn};