export type MenuKeys = 'home' | 'users' | 'companies' | 'about';

interface IMenuItem {
    pageUrl: string;
}

export type  IMenu<T extends string> = {
    [key in T]: IMenuItem;
}


export type SettingsMenuKeys = 'profile' | 'account' | 'logout' | 'dashboard';

interface IMenuSettingsItem {
    pageUrl: string;
}

export type  ISettingsMenu<S extends string> = {
    [key in S]: IMenuSettingsItem;
}

