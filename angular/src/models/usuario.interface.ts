export interface Usuario {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}