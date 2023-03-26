export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    title: string;
    email: string;
    image: string;
    department: number
}

export interface UserOptional {
    id?: Number;
    first_name?: string;
    last_name?: string;
    title?: string;
    email?: string;
    image?: string;
    department?: number
}