export interface IAuth {
    email: string,
    first_name: string,
    password: string,
    last_name: string,
    is_active: boolean,
    is_staff: boolean
}

export interface ILoginUser {
    email: string,
    password: string,
}

export interface IRegisterUser {
    email: string,
    first_name: string,
    password: string,
    last_name: string,
    re_password: string
}

export interface IActivationData {
    uid: string,
    token: string,
}