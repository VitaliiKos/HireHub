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
import {IRegisterUser} from "../../interfaces";
import {authActions} from "../../Store/slice";
import {SinUpValidator} from '../../validators';


const SighUp: FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error} = useAppSelector(state => state.authReducer);
    const {
        handleSubmit,
        formState: {errors, isValid},
        register,
        reset,
    } = useForm<IRegisterUser>(
        {mode: 'all', resolver: joiResolver(SinUpValidator)}
    );
    const registerUser: SubmitHandler<IRegisterUser> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.registerUser(user));

        if (requestStatus === 'fulfilled') {
            navigate(`/${RouterEndpoints.sign_in}`);
        }
        reset()
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
                    {t('register.sign_up')}
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                label={t('register.firstName')}
                                fullWidth
                                margin="dense"
                                {...register('first_name')}
                                error={!!errors.first_name}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.first_name?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                label={t('register.lastName')}
                                fullWidth
                                margin="dense"
                                {...register('last_name')}
                                error={!!errors.last_name}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.last_name?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="email"
                                label={t('register.email')}
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
                                label={t('register.password')}
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
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="confirmPassword"
                                label={t('register.confirmPassword')}
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('re_password')}
                                error={!!errors.re_password}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.re_password?.message}
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
                            onClick={handleSubmit(registerUser)}
                        >
                            {t('register.sign_up')}
                        </Button>
                    </Box>

                </Box>
                <Typography
                    variant="inherit"
                    sx={{ color: 'warning.main',
                        fontSize:18,
                        fontWeight: 600
                }}>
                    {error?.email}
                </Typography>

                <Grid item
                      container
                      sx={{
                          m: 1,
                          p: 1,
                      }}
                      xs={12} sm={12}
                >
                    <Grid container justifyContent="space-around">
                        <Grid item>
                            <Link href={`/${RouterEndpoints.sign_in}`} variant="body2">
                                {t('register.sign_in')}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Fragment>
    );
}


export {SighUp};