import {REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT} from '../env';


const baseURL = `${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`

const users = '/users'

const mainUrls = {
    auth: {
        sign_up: `/auth${users}/`,
        login: 'auth/jwt/create/',
        activate: `auth/users/activation/`,
        me: `/auth/users/me/`
    },
    healthCheck: {
        healthCheck: '/health_check'
    },
    users: {
        users,
    }
}

export {
    baseURL,
    mainUrls
}