
export interface User{
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

// we can use it in registration and login
export interface UserFormValues {
    email: string; 
    password: string;
    displayName?: string;
    username?:string;
}