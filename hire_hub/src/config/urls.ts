import {REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT} from '../env';


const baseURL = `${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`
const users = '/users'
const mainUrls = {
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