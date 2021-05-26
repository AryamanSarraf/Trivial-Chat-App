import {MyError} from "./error";

export class Job {
    name: string;
    ocupation: string;
    salary: number;
    contact: number;
    constructor(name: string, ocupation: string, salary:number, contact: number){
        this.name = name;
        this.contact = contact;
        this.ocupation = ocupation;
        this.salary = salary;
    }
}
