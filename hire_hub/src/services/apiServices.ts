import axios from "axios";

import {baseURL} from '../config'

const apiServices = axios.create({baseURL})

export {apiServices}