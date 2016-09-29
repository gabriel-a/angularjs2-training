import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
   moduleId: module.id,
   selector: 'app-customer', //<app-customer>
   templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
    //This is a single instance of CustomerService, angular is retrieving it from customersService provider
    //If we add provider here than the CustomerService will be new instance
    constructor(private _customerService: CustomerService) { }

    @Input() customer: {id: number, name: string};
    myColor = 'red';
    
    ngOnInit() { }
}