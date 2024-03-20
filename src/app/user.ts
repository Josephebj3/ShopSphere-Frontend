//DTO

import { Address } from "./address";
import { Name } from "./name";

export interface User
{
    id: number;
    email: string;
    userName: string;
    password: string;
    name: Name;
    address: Address;
    phone: String;
    admin: boolean;
}