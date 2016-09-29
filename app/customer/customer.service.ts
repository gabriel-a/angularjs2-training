import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers(){
        return  [
            {id:1, name:'Gabriel'},
            {id:2, name:'Sally'},
            {id:3, name:'Ton'},
            {id:4, name:'Dadepo'}
        ];
    }
}