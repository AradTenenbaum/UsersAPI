export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    title: string;
    email: string;
    image: string;
    department: number
}

export interface UpdateUser {
    first_name?: string;
    last_name?: string;
    title?: string;
    email?: string;
    image?: string;
    department?: number
}

export interface GetUser {
    id?: Number;
    first_name?: string;
    last_name?: string;
    title?: string;
    email?: string;
    image?: string;
    department?: number
}