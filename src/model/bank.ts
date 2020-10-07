import { Currency } from "./currency";

export interface Bank {
    amount: number;
    date: Date;
    currency: Currency;
    code: string;
    name: string;
    description: string;
}