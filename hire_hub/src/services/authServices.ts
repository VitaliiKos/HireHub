import {AxiosResponse} from 'axios';

import {IActivationData, ILoginUser, IRegisterUser, ITokens, IUser} from '../interfaces';
import {IRes} from '../types';
import {mainUrls} from '../config';
import {apiServices} from "./apiServices";

class AuthService {
    private readonly accessKey = 'access'

    registerUser(user: IRegisterUser): IRes<IRegisterUser> {
        return apiServices.post(mainUrls.auth.sign_up, user)
    }

    async login(user: ILoginUser): Promise<IUser> {
        const {data}: AxiosResponse<ITokens> = await apiServices.post(mainUrls.auth.login, user);
        this.setTokens(data)
        const {data: me}: AxiosResponse<IUser> = await this.me();
        return me
    }

    async activationUser({uid, token}: IActivationData) {
        return apiServices.post(`${mainUrls.auth.activate}`, ({uid, token}))
    }

    me(): IRes<IUser> {
        return apiServices.get(mainUrls.auth.me)
    }

    setTokens({access}: ITokens): void {
        localStorage.setItem(this.accessKey, access)
    }

    getAccessToken(): string | null {
        return localStorage.getItem(this.accessKey)
    }


    deleteTokens(): void {
        localStorage.removeItem(this.accessKey)
    }
}

export const authService = new AuthService()