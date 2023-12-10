import {IRes} from "../types";
import {IHealthCheck} from "../interfaces";
import {apiServices} from "./apiServices";
import {mainUrls} from "../config";

class HealthCheckServices {
    healthCheck(): IRes<IHealthCheck> {
        console.log(mainUrls.healthCheck)
        return apiServices.get(mainUrls.healthCheck.healthCheck)
    }
}

export const healthCheckServices = new HealthCheckServices()
