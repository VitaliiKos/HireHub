import {IRes} from "../types";
import {IHealthCheck} from "../interfaces";
import {apiServices} from "./apiServices";
import {mainUrls} from "../config";

class HealthCheckServices {
    healthCheck(): IRes<IHealthCheck> {
        return apiServices.get(mainUrls.healthCheck.healthCheck)
    }
}

export const healthCheckServices = new HealthCheckServices()
