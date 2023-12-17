import axios from "axios";

import {baseURL} from '../config'
import {authService} from "./authServices";

const apiServices = axios.create({baseURL})
apiServices.interceptors.request.use(config => {
    const access = authService.getAccessToken();
    if (access) {
        config.headers!.Authorization = `Bearer ${access}`;
    }

    return config
})


export {apiServices}