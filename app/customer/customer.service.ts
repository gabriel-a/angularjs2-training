import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const CUSTOMER_URL = 'app/customers.json';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers(){
        return this._http.get(CUSTOMER_URL)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}