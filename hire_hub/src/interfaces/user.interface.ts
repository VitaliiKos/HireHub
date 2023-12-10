export interface IUser {
    id?: number;
    email: string;
    password?: string,
    last_name: string,
    is_active?: boolean,
    is_staff?: boolean
    created_at?: string
    updated_at?: string


}

export interface IUserResp {
    users: IUser[]
}